'use client'
import { useState } from 'react'
import { NeoInput } from '@/components/ui/NeoInput'
import { NeoButton } from '@/components/ui/NeoButton'
import { useToast } from '@/components/ui/NeoToast'
import { Send, Terminal, Map, BookOpen, UserPlus } from 'lucide-react'

interface FeedbackFormProps {
  onSuccess: () => void
}

const SURVEY_CATEGORIES = [
  {
    value: 'roadmap',
    label: 'Roadmap Feedback',
    icon: Map,
    color: '#4361EE', // Neo Blue
    emoji: '🗺️',
    description: 'Help us improve the learning paths'
  },
  {
    value: 'content',
    label: 'Content Suggestion',
    icon: BookOpen,
    color: '#06D6A0', // Neo Green
    emoji: '📚',
    description: 'Suggest new courses or resources'
  },
  {
    value: 'contribution',
    label: 'I want to contribute',
    icon: UserPlus,
    color: '#FF0F80', // Neo Pink
    emoji: '🤝',
    description: 'Collaborate on the project'
  },
  {
    value: 'technical',
    label: 'Technical Insights',
    icon: Terminal,
    color: '#FFE500', // Neo Yellow
    emoji: '💻',
    description: 'Feedback on site performance/tech'
  },
]

export function FeedbackForm({ onSuccess }: FeedbackFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'roadmap',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { show } = useToast()

  const currentCategory = SURVEY_CATEGORIES.find(c => c.value === formData.category)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        show('Thank you! Your insights are recorded 🚀', 'success')
        onSuccess()
      } else {
        show(data.error || 'Something went wrong. Please try again.', 'error')
      }
    } catch (error) {
      show('Failed to connect to the server. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="font-heading font-black text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
          01. Identity
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NeoInput
            placeholder="Full Name *"
            value={formData.name}
            onChange={(v) => setFormData({ ...formData, name: v })}
            disabled={isSubmitting}
            required
          />
          <NeoInput
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(v) => setFormData({ ...formData, email: v })}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="font-heading font-black text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
          02. Select Category
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SURVEY_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isSelected = formData.category === cat.value

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFormData({ ...formData, category: cat.value })}
                disabled={isSubmitting}
                className={`
                  p-4 border-4 border-black dark:border-white text-left transition-all relative cursor-pointer
                  ${isSelected 
                    ? 'bg-black dark:bg-white text-white dark:text-black translate-x-1 translate-y-1 shadow-none' 
                    : 'bg-white dark:bg-black text-black dark:text-white shadow-[4px_4px_0px_0px_#0A0A0A] dark:shadow-[4px_4px_0px_0px_#F5F5F0] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#0A0A0A] dark:hover:shadow-[2px_2px_0px_0px_#F5F5F0]'
                  }
                `}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon size={18} className={isSelected ? '' : `text-[${cat.color}]`} />
                  <span className="font-heading font-black text-sm uppercase tracking-tight">{cat.label}</span>
                </div>
                <p className={`text-[10px] font-body ${isSelected ? 'opacity-80' : 'text-gray-500'}`}>
                  {cat.description}
                </p>
                {isSelected && <span className="absolute top-2 right-2 text-lg">{cat.emoji}</span>}
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <label className="font-heading font-black text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            03. Your Insights
          </label>
          <span className="text-[10px] font-mono text-gray-400">{formData.message.length}/2000</span>
        </div>
        <NeoInput
          type="textarea"
          placeholder="What can we do better? What's missing from the guide?"
          value={formData.message}
          onChange={(v) => setFormData({ ...formData, message: v })}
          rows={6}
          maxLength={2000}
          disabled={isSubmitting}
          required
        />
      </div>

      <NeoButton
        type="submit"
        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
        className="w-full py-4 text-xl border-4"
        accent={currentCategory?.color}
      >
        <div className="flex items-center justify-center gap-2">
          {isSubmitting ? (
            <span className="animate-spin text-2xl">⚡</span>
          ) : (
            <>
              <Send size={20} />
              <span>Submit Contribution</span>
            </>
          )}
        </div>
      </NeoButton>
    </form>
  )
}