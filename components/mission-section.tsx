"use client"
import { WorldMap } from "@/components/ui/map"
import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Global Medical <span className="text-primary">Event Monitoring</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Connect with medical events and conferences worldwide. Our platform enables seamless monitoring across
            continents, bringing global healthcare insights to Pakistan.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                  label: "Fairbanks",
                },
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                  label: "Los Angeles",
                },
              },
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                  label: "Fairbanks",
                },
                end: {
                  lat: -15.7975,
                  lng: -47.8919,
                  label: "Brasília",
                },
              },
              {
                start: {
                  lat: -15.7975,
                  lng: -47.8919,
                  label: "Brasília",
                },
                end: {
                  lat: 38.7223,
                  lng: -9.1393,
                  label: "Lisbon",
                },
              },
              {
                start: {
                  lat: 51.5074,
                  lng: -0.1278,
                  label: "London",
                },
                end: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
              },
              {
                start: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
                end: {
                  lat: 43.1332,
                  lng: 131.9113,
                  label: "Vladivostok",
                },
              },
              {
                start: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
                end: {
                  lat: -1.2921,
                  lng: 36.8219,
                  label: "Nairobi",
                },
              },
            ]}
            lineColor="hsl(var(--primary))"
          />
        </motion.div>
      </div>
    </section>
  )
}
