import clsx from 'clsx'
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react'

export type IconButtonVariant = 'primary' | 'secondary' | 'error'
export type IconButtonStyle = 'solid' | 'outline' | 'ghost'
export type IconButtonSize = 'sm' | 'md' | 'lg'
export type IconButtonShape = 'circle' | 'square'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  variant?: IconButtonVariant
  buttonStyle?: IconButtonStyle
  size?: IconButtonSize
  shape?: IconButtonShape
  'aria-label': string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'primary',
      buttonStyle = 'solid',
      size = 'md',
      shape = 'circle',
      className,
      disabled,
      ...props
    },
    ref,
  ) => {

    const baseStyles = clsx(
      'inline-flex items-center justify-center',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-40',
      !disabled && 'cursor-pointer',
    )


    const sizeStyles = {
      sm: 'w-8 h-8 text-base',
      md: 'w-10 h-10 text-lg',
      lg: 'w-12 h-12 text-xl',
    }


    const shapeStyles = {
      circle: 'rounded-full',
      square: 'rounded-md',
    }


    const variantStyleMap: Record<
      IconButtonVariant,
      Record<IconButtonStyle, string>
    > = {
      primary: {
        solid: clsx(
          'bg-primary-500 text-white',
          'shadow-button-default',
          !disabled && 'hover:bg-primary-600 hover:shadow-button-hover',
          !disabled && 'focus:ring-primary-400',
          !disabled && 'active:bg-primary-700 active:shadow-button-pressed',
        ),
        outline: clsx(
          'border-2 border-primary-500 text-primary-500 bg-transparent',
          !disabled && 'hover:bg-primary-50 hover:border-primary-600',
          !disabled && 'focus:ring-primary-400',
          !disabled && 'active:bg-primary-100 active:border-primary-700',
        ),
        ghost: clsx(
          'text-primary-500 bg-transparent',
          !disabled && 'hover:bg-primary-50',
          !disabled && 'focus:ring-primary-400',
          !disabled && 'active:bg-primary-100',
        ),
      },
      secondary: {
        solid: clsx(
          'bg-secondary-500 text-white',
          'shadow-button-default',
          !disabled && 'hover:bg-secondary-600 hover:shadow-button-hover',
          !disabled && 'focus:ring-secondary-400',
          !disabled && 'active:bg-secondary-700 active:shadow-button-pressed',
        ),
        outline: clsx(
          'border-2 border-secondary-500 text-secondary-500 bg-transparent',
          !disabled && 'hover:bg-secondary-50 hover:border-secondary-600',
          !disabled && 'focus:ring-secondary-400',
          !disabled && 'active:bg-secondary-100 active:border-secondary-700',
        ),
        ghost: clsx(
          'text-secondary-500 bg-transparent',
          !disabled && 'hover:bg-secondary-50',
          !disabled && 'focus:ring-secondary-400',
          !disabled && 'active:bg-secondary-100',
        ),
      },
      error: {
        solid: clsx(
          'bg-error-500 text-white',
          'shadow-button-default',
          !disabled && 'hover:bg-error-400 hover:shadow-button-hover',
          !disabled && 'focus:ring-error-300',
          !disabled && 'active:bg-error-500 active:shadow-button-pressed',
        ),
        outline: clsx(
          'border-2 border-error-500 text-error-500 bg-transparent',
          !disabled && 'hover:bg-error-50 hover:border-error-400',
          !disabled && 'focus:ring-error-300',
          !disabled && 'active:bg-error-100 active:border-error-500',
        ),
        ghost: clsx(
          'text-error-500 bg-transparent',
          !disabled && 'hover:bg-error-50',
          !disabled && 'focus:ring-error-300',
          !disabled && 'active:bg-error-100',
        ),
      },
    }

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          sizeStyles[size],
          shapeStyles[shape],
          variantStyleMap[variant][buttonStyle],
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {icon}
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
