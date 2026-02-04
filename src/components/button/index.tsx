import clsx from 'clsx'
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'success'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading


    const baseStyles = clsx(
      'inline-flex items-center justify-center gap-2',
      'font-medium rounded-medium',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      !isDisabled && 'cursor-pointer',
    )


    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm h-[38px]',
      md: 'px-4 py-2 text-base h-[38px]',
      lg: 'px-6 py-3 text-lg h-[38px]',
    }


    const variantStyles = {
      primary: clsx(
        'bg-primary-500 text-white',
        'shadow-button-default',
        !isDisabled && 'hover:bg-primary-600 hover:shadow-button-hover',
        !isDisabled && 'active:bg-primary-700 active:shadow-button-pressed',
        'focus:ring-primary-500',
      ),
      secondary: clsx(
        'bg-secondary-500 text-white',
        'shadow-button-default',
        !isDisabled && 'hover:bg-secondary-600 hover:shadow-button-hover',
        !isDisabled && 'active:bg-secondary-700 active:shadow-button-pressed',
        'focus:ring-secondary-500',
      ),
      ghost: clsx(
        'bg-transparent text-primary-500 border-2 border-primary-500',
        !isDisabled && 'hover:bg-primary-50 hover:border-primary-600',
        !isDisabled && 'active:bg-primary-100',
        'focus:ring-primary-500',
      ),
      danger: clsx(
        'bg-error-500 text-white',
        'shadow-button-default',
        !isDisabled && 'hover:bg-error-600 hover:shadow-button-hover',
        !isDisabled && 'active:bg-error-700 active:shadow-button-pressed',
        'focus:ring-error-500',
      ),
      success: clsx(
        'bg-success-500 text-white',
        'shadow-button-default',
        !isDisabled && 'hover:bg-success-600 hover:shadow-button-hover',
        !isDisabled && 'active:bg-success-700 active:shadow-button-pressed',
        'focus:ring-success-500',
      ),
    }

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Carregando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
