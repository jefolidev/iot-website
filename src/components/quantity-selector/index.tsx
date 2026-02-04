import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { forwardRef } from 'react'

export type QuantitySelectorSize = 'sm' | 'md' | 'lg'

export interface QuantitySelectorProps {
  value: number
  min?: number
  max?: number
  size?: QuantitySelectorSize
  onIncrement?: () => void
  onDecrement?: () => void
  className?: string
  disabled?: boolean
}

export const QuantitySelector = forwardRef<
  HTMLDivElement,
  QuantitySelectorProps
>(
  (
    {
      value,
      min = 1,
      max = 999,
      size = 'md',
      onIncrement,
      onDecrement,
      className,
      disabled = false,
    },
    ref,
  ) => {
    const isDecrementDisabled = disabled || value <= min
    const isIncrementDisabled = disabled || value >= max


    const containerStyles = clsx(
      'inline-flex items-center justify-between',
      'border border-primary-500/50 rounded-lg',
      'bg-white',
      'transition-all duration-200',
      disabled && 'opacity-50 cursor-not-allowed',
    )


    const sizeStyles = {
      sm: {
        container: 'h-8 px-2 gap-2 min-w-[80px]',
        button: 'w-5 h-5 text-sm',
        value: 'text-sm font-semibold min-w-[24px]',
        icon: 14,
      },
      md: {
        container: 'h-10 px-3 gap-3 min-w-[100px]',
        button: 'w-6 h-6 text-base',
        value: 'text-base font-semibold min-w-[32px]',
        icon: 16,
      },
      lg: {
        container: 'h-12 px-4 gap-4 min-w-[120px]',
        button: 'w-7 h-7 text-lg',
        value: 'text-lg font-bold min-w-[40px]',
        icon: 18,
      },
    }


    const buttonBaseStyles = clsx(
      'inline-flex items-center justify-center',
      'rounded-md',
      'text-primary-500',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1',
    )

    const buttonEnabledStyles = clsx(
      'hover:bg-primary-50',
      'active:bg-primary-100',
      'cursor-pointer',
    )

    const buttonDisabledStyles = clsx('opacity-30 cursor-not-allowed')

    const currentSize = sizeStyles[size]

    return (
      <div
        ref={ref}
        className={clsx(containerStyles, currentSize.container, className)}
      >
        {}
        <button
          type="button"
          onClick={onDecrement}
          disabled={isDecrementDisabled}
          aria-label="Diminuir quantidade"
          className={clsx(
            buttonBaseStyles,
            currentSize.button,
            isDecrementDisabled ? buttonDisabledStyles : buttonEnabledStyles,
          )}
        >
          <Minus size={currentSize.icon} strokeWidth={2.5} />
        </button>

        {}
        <span
          className={clsx(
            currentSize.value,
            'text-black-500 text-center select-none',
          )}
        >
          {value}
        </span>

        {}
        <button
          type="button"
          onClick={onIncrement}
          disabled={isIncrementDisabled}
          aria-label="Aumentar quantidade"
          className={clsx(
            buttonBaseStyles,
            currentSize.button,
            isIncrementDisabled ? buttonDisabledStyles : buttonEnabledStyles,
          )}
        >
          <Plus size={currentSize.icon} strokeWidth={2.5} />
        </button>
      </div>
    )
  },
)

QuantitySelector.displayName = 'QuantitySelector'
