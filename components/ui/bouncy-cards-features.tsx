"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Eye, Target, Heart, Globe } from "lucide-react"

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl text-foreground">
          Our Core Values
          <span className="text-muted-foreground"> guiding our mission</span>
        </h2>
        <motion.a
          href="/blogs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground shadow-xl transition-colors hover:bg-primary/90"
        >
          Read Our Reports
        </motion.a>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>
            <Eye className="h-8 w-8 text-primary mb-2" />
            Watchdog Monitoring
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary/80 to-primary p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-sm text-primary-foreground leading-relaxed">
              We vigilantly track medical conferences, symposiums, and events across the globe to ensure transparency
              and accountability in healthcare.
            </p>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>
            <Target className="h-8 w-8 text-primary mb-2" />
            Accurate Reporting
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary/70 to-primary/90 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-sm text-primary-foreground leading-relaxed">
              Our team provides detailed, unbiased reports on medical events, highlighting key findings, breakthrough
              research, and developments that impact global healthcare.
            </p>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>
            <Globe className="h-8 w-8 text-primary mb-2" />
            Global Reach
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary/90 to-primary/70 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-sm text-primary-foreground leading-relaxed">
              From Pakistan to the world, we monitor medical events across 50+ countries, ensuring no important
              development goes unnoticed in the global healthcare landscape.
            </p>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>
            <Heart className="h-8 w-8 text-primary mb-2" />
            Public Service
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-primary to-primary/80 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <p className="text-sm text-primary-foreground leading-relaxed">
              We serve the public interest by making medical information accessible and understandable to all
              stakeholders.
            </p>
          </div>
        </BounceCard>
      </div>
    </section>
  )
}

const BounceCard = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-muted/50 p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold text-foreground flex flex-col items-center">
      {children}
    </h3>
  )
}
