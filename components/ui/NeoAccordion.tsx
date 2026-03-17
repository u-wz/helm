'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Plus, X } from 'lucide-react'

interface AccordionItem {
  id: string
  trigger: React.ReactNode
  content: React.ReactNode
  defaultOpen?: boolean
}

interface NeoAccordionProps {
  items: AccordionItem[]
  exclusive?: boolean
  accent?: string
  className?: string
}

export function NeoAccordion({ items, exclusive = true, accent, className }: NeoAccordionProps) {
  const defaultOpen = items.filter(i => i.defaultOpen).map(i => i.id)
  const [openIds, setOpenIds] = useState<string[]>(exclusive ? defaultOpen.slice(0, 1) : defaultOpen)

  const toggle = (id: string) => {
    if (exclusive) {
      setOpenIds(prev => prev.includes(id) ? [] : [id])
    } else {
      setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
    }
  }

  return (
    <div className={cn('border-2 border-black dark:border-white', className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className={cn(index < items.length - 1 && 'border-b-2 border-black dark:border-white')}>
            <button
              onClick={() => toggle(item.id)}
              className={cn(
                'w-full flex items-center justify-between p-4',
                'font-bold font-heading text-left',
                'hover:bg-black/5 dark:hover:bg-white/5',
                'transition-colors duration-100',
                'cursor-pointer',
                isOpen && accent && 'border-l-4'
              )}
              style={isOpen && accent ? { borderLeftColor: accent } : undefined}
            >
              <span className="flex-1">{item.trigger}</span>
              <span className="ml-3 flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                <Plus size={20} />
              </span>
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-[5000px]' : 'max-h-0'
              )}
            >
              <div className="p-4 pt-0 font-body">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
