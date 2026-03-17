'use client'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { BADGE_COLORS } from '@/lib/constants'

type BadgeVariant = keyof typeof BADGE_COLORS | 'custom'

interface NeoBadgeProps {
  label: string
  variant?: BadgeVariant
  customColor?: { bg: string; border: string; text: string }
  size?: 'sm' | 'md'
  removable?: boolean
  onRemove?: () => void
  className?: string
}

export function NeoBadge({
  label, variant = 'custom', customColor, size = 'sm', removable, onRemove, className
}: NeoBadgeProps) {
  const colors = variant !== 'custom' ? BADGE_COLORS[variant as keyof typeof BADGE_COLORS] : customColor

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-bold border-2 uppercase tracking-wide',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        className
      )}
      style={colors ? {
        backgroundColor: colors.bg,
        borderColor: colors.border,
        color: colors.text,
      } : { backgroundColor: '#F0F0F0', borderColor: '#999', color: '#333' }}
    >
      {label}
      {removable && onRemove && (
        <button onClick={onRemove} className="ml-1 hover:opacity-70 cursor-pointer">
          <X size={10} strokeWidth={3} />
        </button>
      )}
    </span>
  )
}
