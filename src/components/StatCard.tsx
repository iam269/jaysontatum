import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StatCardProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  delay?: number
}

export function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (typeof value !== "number") return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      setDisplayValue(Math.floor(value * progress))

      if (currentStep >= steps) {
        setDisplayValue(value)
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      {icon && <div className="mb-3 text-primary text-2xl">{icon}</div>}
      <div className="text-3xl font-bold text-primary mb-2">
        {typeof value === "number" ? displayValue : value}
      </div>
      <p className="text-sm text-muted-foreground text-center font-medium">{label}</p>
    </motion.div>
  )
}
