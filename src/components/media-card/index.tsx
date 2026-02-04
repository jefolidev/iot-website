import { type ReactNode } from 'react'

export type MediaCardVariant = 'white' | 'gray'
export type MediaCardAspect = 'video' | 'square'

export interface MediaCardProps {
  imageSrc?: string
  imageAlt?: string
  tag?: string
  title: string
  description: string
  metadata?: string
  priceLabel?: string
  priceValue?: string
  actions?: ReactNode
  links?: ReactNode
  variant?: MediaCardVariant
  aspect?: MediaCardAspect
}

export function MediaCard({
  imageSrc,
  imageAlt = '',
  tag,
  title,
  description,
  metadata,
  priceLabel,
  priceValue,
  actions,
  links,
  variant = 'white',
  aspect = 'video',
}: MediaCardProps) {
  const variantStyles = {
    white: 'bg-white',
    gray: 'bg-grey-50',
  }

  const aspectStyles = {
    video: 'aspect-video',
    square: 'aspect-square',
  }

  return (
    <div
      className={`rounded-3xl overflow-hidden shadow-card-default ${variantStyles[variant]}`}
    >
      {}
      <div className={`relative ${aspectStyles[aspect]} bg-grey-200`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-grey-100 to-grey-200">
            <span className="text-grey-400 text-sm">Imagem</span>
          </div>
        )}

        {}
        {tag && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-grey-600 shadow-sm">
              {tag}
            </span>
          </div>
        )}
      </div>

      {}
      <div className="p-6 space-y-4">
        {}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-black-500">{title}</h3>
          <p className="text-base text-grey-600 leading-relaxed">
            {description}
          </p>
          {metadata && <p className="text-sm text-grey-500">{metadata}</p>}
        </div>

        {}
        {priceLabel && priceValue && (
          <div className="pt-2 border-t border-grey-100">
            <p className="text-sm text-grey-500 mb-1">{priceLabel}</p>
            <p className="text-2xl font-bold text-primary-500">{priceValue}</p>
          </div>
        )}

        {}
        {links && <div className="flex flex-wrap gap-4">{links}</div>}

        {}
        {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
      </div>
    </div>
  )
}
