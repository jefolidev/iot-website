import clsx from 'clsx'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { type ReactNode, forwardRef } from 'react'

export type AlertVariant = 'error' | 'warning' | 'info' | 'success'
export type AlertEmphasis = 'default' | 'low' | 'medium' | 'high'

export interface AlertProps {
  variant?: AlertVariant
  emphasis?: AlertEmphasis
  title?: string
  description: string
  icon?: ReactNode
  className?: string
}

const defaultIcons: Record<AlertVariant, ReactNode> = {
  error: <AlertCircle size={20} />,
  warning: <AlertTriangle size={20} />,
  info: <Info size={20} />,
  success: <CheckCircle size={20} />,
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      emphasis = 'default',
      title,
      description,
      icon,
      className,
    },
    ref,
  ) => {
    const displayIcon = icon ?? defaultIcons[variant]


    const baseStyles = clsx(
      'flex gap-3 p-4 rounded-lg',
      'transition-all duration-200',
    )


    const variantEmphasisStyles: Record<
      AlertVariant,
      Record<AlertEmphasis, string>
    > = {
      error: {
        default: clsx('bg-error-50 text-error-500', 'border border-error-100'),
        low: clsx(
          'bg-white text-error-500',
          'border-2 border-error-300',
          'shadow-sm',
        ),
        medium: clsx(
          'bg-error-50 text-error-500',
          'border-l-4 border-error-500',
          'shadow-sm',
        ),
        high: clsx(
          'bg-error-500 text-white',
          'border-l-4 border-error-500',
          'shadow-md',
        ),
      },
      warning: {
        default: clsx(
          'bg-warning-50 text-warning-500',
          'border border-warning-100',
        ),
        low: clsx(
          'bg-white text-warning-500',
          'border-2 border-warning-300',
          'shadow-sm',
        ),
        medium: clsx(
          'bg-warning-50 text-warning-500',
          'border-l-4 border-warning-500',
          'shadow-sm',
        ),
        high: clsx(
          'bg-warning-500 text-white',
          'border-l-4 border-warning-500',
          'shadow-md',
        ),
      },
      info: {
        default: clsx('bg-info-50 text-info-500', 'border border-info-100'),
        low: clsx(
          'bg-white text-info-500',
          'border-2 border-info-300',
          'shadow-sm',
        ),
        medium: clsx(
          'bg-info-50 text-info-500',
          'border-l-4 border-info-500',
          'shadow-sm',
        ),
        high: clsx(
          'bg-info-500 text-white',
          'border-l-4 border-info-500',
          'shadow-md',
        ),
      },
      success: {
        default: clsx(
          'bg-success-50 text-success-500',
          'border border-success-100',
        ),
        low: clsx(
          'bg-white text-success-500',
          'border-2 border-success-300',
          'shadow-sm',
        ),
        medium: clsx(
          'bg-success-50 text-success-500',
          'border-l-4 border-success-500',
          'shadow-sm',
        ),
        high: clsx(
          'bg-success-500 text-white',
          'border-l-4 border-success-500',
          'shadow-md',
        ),
      },
    }


    const iconStyles: Record<AlertVariant, Record<AlertEmphasis, string>> = {
      error: {
        default: 'text-error-500',
        low: 'text-error-500',
        medium: 'text-error-500',
        high: 'text-white',
      },
      warning: {
        default: 'text-warning-500',
        low: 'text-warning-500',
        medium: 'text-warning-500',
        high: 'text-white',
      },
      info: {
        default: 'text-info-500',
        low: 'text-info-500',
        medium: 'text-info-500',
        high: 'text-white',
      },
      success: {
        default: 'text-success-500',
        low: 'text-success-500',
        medium: 'text-success-500',
        high: 'text-white',
      },
    }


    const titleStyles: Record<AlertEmphasis, string> = {
      default: 'hidden',
      low: clsx('font-semibold text-base mb-1'),
      medium: clsx('font-semibold text-base mb-1'),
      high: clsx('font-semibold text-base mb-1'),
    }


    const descriptionStyles: Record<AlertEmphasis, string> = {
      default: 'text-sm',
      low: 'text-sm opacity-90',
      medium: 'text-sm opacity-90',
      high: 'text-sm opacity-95',
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(
          baseStyles,
          variantEmphasisStyles[variant][emphasis],
          className,
        )}
      >
        <div
          className={clsx(
            'flex-shrink-0 mt-0.5',
            iconStyles[variant][emphasis],
          )}
        >
          {displayIcon}
        </div>
        <div className="flex-1 min-w-0">
          {title && emphasis !== 'default' && (
            <h3 className={titleStyles[emphasis]}>{title}</h3>
          )}
          <p className={descriptionStyles[emphasis]}>{description}</p>
        </div>
      </div>
    )
  },
)

Alert.displayName = 'Alert'
