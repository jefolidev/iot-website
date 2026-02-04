import clsx from 'clsx'
import { Trash2 } from 'lucide-react'
import { type ReactNode } from 'react'
import { IconButton } from '../icon-button'
import { QuantitySelector } from '../quantity-selector'

export type ProductCardInCartLayout = 'default' | 'compact'

export interface ProductCardInCartProps {
  imageSrc: string
  imageAlt?: string
  title: string
  price: string
  priceLabel?: string
  quantity: number
  min?: number
  max?: number
  imageTag?: ReactNode
  priceTag?: ReactNode
  description?: string
  layout?: ProductCardInCartLayout
  onIncrement?: () => void
  onDecrement?: () => void
  onRemove?: () => void
  className?: string
}

export function ProductCardInCart({
  imageSrc,
  imageAlt = 'Produto',
  title,
  price,
  priceLabel = 'Price',
  quantity,
  min = 1,
  max = 99,
  imageTag,
  priceTag,
  description,
  layout = 'default',
  onIncrement,
  onDecrement,
  onRemove,
  className,
}: ProductCardInCartProps) {
  const isCompact = layout === 'compact'

  return (
    <div
      className={clsx(
        'bg-gray-50 border-b border-gray-100',
        'p-6',
        'transition-colors duration-200',
        className,
      )}
    >
      <div className="flex gap-6">
        {}
        <div className="relative flex-shrink-0">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          {imageTag && <div className="absolute top-3 left-3">{imageTag}</div>}
        </div>

        {}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <h3 className="text-lg font-semibold text-black-500 mb-3">
              {title}
            </h3>

            {isCompact && (
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">{priceLabel}</p>
                <p className="text-2xl font-bold text-black-500 mb-1">
                  {price}
                </p>
                {description && (
                  <p className="text-sm text-black-400">{description}</p>
                )}
              </div>
            )}
          </div>

          {}
          <div>
            <QuantitySelector
              value={quantity}
              min={min}
              max={max}
              size="sm"
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        </div>

        {}
        <div className="flex flex-col items-end justify-between">
          {}
          <IconButton
            icon={<Trash2 />}
            variant="primary"
            buttonStyle="ghost"
            size="md"
            shape="square"
            aria-label="Remover item"
            onClick={onRemove}
          />

          {}
          {!isCompact && (
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-1">
                <p className="text-xs text-gray-500">{priceLabel}</p>
                {priceTag && <div>{priceTag}</div>}
              </div>
              <p className="text-2xl font-bold text-primary-500">{price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
