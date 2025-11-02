"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import createGlobe, { type COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function GlobeFeatureSection() {
  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl bg-muted border border-border shadow-md px-6 py-16 md:px-16 md:py-24 mt-16">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h2 className="text-3xl font-normal text-foreground">
            Stay Informed About <span className="text-primary">Global Medical Events</span>{" "}
            <span className="text-muted-foreground">
              Track medical conferences, symposiums, and healthcare developments worldwide with Medical Updates.
            </span>
          </h2>
          <Button
            asChild
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <Link href="/contact">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative h-[180px] w-full max-w-xl">
          <Globe className="absolute -bottom-20 -right-40 scale-150" />
        </div>
      </div>
    </section>
  )
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [128 / 255, 0 / 255, 32 / 255], // Maroon color for markers
  glowColor: [1, 1, 1],
  markers: [
    { location: [33.6844, 73.0479], size: 0.08 }, // Islamabad, Pakistan
    { location: [52.52, 13.405], size: 0.07 }, // Berlin, Germany
    { location: [25.2048, 55.2708], size: 0.06 }, // Dubai, UAE
    { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
    { location: [51.5074, -0.1278], size: 0.07 }, // London, UK
    { location: [40.7128, -74.006], size: 0.08 }, // New York, USA
    { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo, Japan
    { location: [19.076, 72.8777], size: 0.05 }, // Mumbai, India
    { location: [-23.5505, -46.6333], size: 0.06 }, // São Paulo, Brazil
    { location: [48.8566, 2.3522], size: 0.05 }, // Paris, France
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
