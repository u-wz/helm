'use client'
import { cn } from '@/lib/utils'
import { Search, X } from 'lucide-react'
import React from 'react'

interface NeoInputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  icon?: React.ReactNode
  clearable?: boolean
  className?: string
  type?: string
  rows?: number
  maxLength?: number
  disabled?: boolean
  required?: boolean
}

export function NeoInput({
  placeholder, value, onChange, icon, clearable = false,
  className, type = 'text', rows, maxLength, disabled, required
}: NeoInputProps) {
  if (type === 'textarea') {
    return (
      <div className="relative">
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows ?? 4}
          maxLength={maxLength}
          disabled={disabled}
          required={required}
          className={cn(
            'w-full border-2 border-black dark:border-white',
            'bg-white dark:bg-neo-card text-black dark:text-white',
            'px-4 py-3 font-body text-base',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white',
            'placeholder:text-gray-400 resize-none',
            disabled && 'opacity-60 cursor-not-allowed',
            className
          )}
        />
        {maxLength && (
          <span className="absolute bottom-2 right-2 text-xs text-gray-400">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="relative flex items-center">
      {icon && (
        <span className="absolute left-3 text-gray-400 pointer-events-none">
          {icon}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={cn(
          'w-full border-2 border-black dark:border-white',
          'bg-white dark:bg-neo-card text-black dark:text-white',
          'px-4 py-2.5 font-body text-base',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white',
          'placeholder:text-gray-400',
          icon && 'pl-10',
          clearable && value && 'pr-10',
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
      />
      {clearable && value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

export function NeoSelect({
  value, onChange, options, placeholder, className
}: {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  className?: string
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className={cn(
        'w-full border-2 border-black dark:border-white',
        'bg-white dark:bg-neo-card text-black dark:text-white',
        'px-4 py-2.5 font-body text-base',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white',
        'appearance-none cursor-pointer',
        className
      )}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  )
}
