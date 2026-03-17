'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface NeoButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  accent?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const variantClasses = {
  primary: 'bg-black text-white border-2 border-black dark:bg-white dark:text-black dark:border-white',
  secondary: 'bg-white text-black border-2 border-black dark:bg-transparent dark:text-white dark:border-white',
  ghost: 'bg-transparent border-2 border-transparent hover:border-black dark:hover:border-white text-black dark:text-white',
}

export function NeoButton({
  children, variant = 'primary', size = 'md', accent, onClick,
  href, disabled, icon, iconPosition = 'left', className, type = 'button', target, rel
}: NeoButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-bold font-heading',
    'transition-all duration-100',
    sizeClasses[size],
    variantClasses[variant],
    !disabled && 'cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo dark:hover:shadow-neo-white',
    !disabled && 'active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        style={accent ? { backgroundColor: accent, borderColor: accent } : undefined}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={accent ? { backgroundColor: accent, borderColor: accent } : undefined}
    >
      {content}
    </button>
  )
}
