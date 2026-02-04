import { Zap } from 'lucide-react'
import { type ReactNode } from 'react'

export type ActionCardLayout = 'compact' | 'full-width' | 'mixed'

export interface ActionCardProps {
  title: string
  subhead: string
  description: string
  metadata?: string
  icon?: ReactNode
  actions: ReactNode
  layout?: ActionCardLayout
}

export function ActionCard({
  title,
  subhead,
  description,
  metadata,
  icon = <Zap className="w-6 h-6" />,
  actions,
  layout = 'compact',
}: ActionCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-card-default">
      {}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-black-500 mb-1">{title}</h3>
          <p className="text-sm font-medium text-primary-500">{subhead}</p>
        </div>
        <div className="text-primary-500 ml-4">{icon}</div>
      </div>

      {}
      <div className="mb-6 space-y-2">
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
        {metadata && <p className="text-sm text-gray-500">{metadata}</p>}
      </div>

      {}
      <div className="border-t border-gray-100 mb-6" />

      {}
      <div
        className={
          layout === 'compact'
            ? 'grid grid-cols-2 gap-3'
            : layout === 'full-width'
              ? 'flex flex-col gap-3'
              : 'flex flex-col gap-3'
        }
      >
        {actions}
      </div>
    </div>
  )
}
