import clsx from 'clsx'
import { type AnchorHTMLAttributes, forwardRef } from 'react'

export type LinkVariant = 'primary' | 'inverted' | 'dark'
export type LinkSize = 'sm' | 'md' | 'lg'
export type LinkWeight = 'normal' | 'medium' | 'bold'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
  size?: LinkSize
  weight?: LinkWeight
  disabled?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      weight = 'normal',
      disabled = false,
      className,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {

    const baseStyles = clsx(
      'inline-flex items-center gap-1',
      'underline decoration-1',
      'transition-all duration-200',
      !disabled && 'cursor-pointer',
      disabled && 'cursor-not-allowed opacity-50 pointer-events-none',
    )


    const sizeStyles = {
      sm: 'text-sm underline-offset-2',
      md: 'text-base underline-offset-4',
      lg: 'text-lg underline-offset-4',
    }


    const weightStyles = {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    }


    const variantStyles = {
      primary: clsx(
        'text-primary-500 decoration-primary-500',
        !disabled &&
          'hover:text-primary-600 hover:decoration-primary-600 hover:decoration-2',
      ),
      inverted: clsx(
        'text-white decoration-white',
        !disabled &&
          'hover:text-gray-100 hover:decoration-gray-100 hover:decoration-2',
      ),
      dark: clsx(
        'text-secondary-700 decoration-secondary-700',
        !disabled &&
          'hover:text-secondary-900 hover:decoration-secondary-900 hover:decoration-2',
      ),
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    }

    return (
      <a
        ref={ref}
        className={clsx(
          baseStyles,
          sizeStyles[size],
          weightStyles[weight],
          variantStyles[variant],
          className,
        )}
        onClick={handleClick}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    )
  },
)

Link.displayName = 'Link'
