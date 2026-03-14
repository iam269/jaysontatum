import { motion } from "framer-motion"

interface HighlightCardProps {
  title: string
  description: string
  year?: string
  icon?: React.ReactNode
  delay?: number
  image?: string
}

export function HighlightCard({
  title,
  description,
  year,
  icon,
  delay = 0,
  image,
}: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg border border-border bg-white shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}
      <div className="p-6">
        {year && <span className="text-xs font-semibold text-primary uppercase tracking-wider">{year}</span>}
        <div className="flex items-start gap-3 mt-2">
          {icon && <div className="text-2xl flex-shrink-0 mt-1">{icon}</div>}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
