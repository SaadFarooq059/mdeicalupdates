import { MedicalNavbar } from "@/components/medical-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { MissionSection } from "@/components/mission-section"
import GlobeFeatureSection from "@/components/ui/globe-feature-section"
import { BouncyCardsFeatures } from "@/components/ui/bouncy-cards-features"
import { ArticleCard } from "@/components/ui/blog-post-card"
import { HeroSection } from "@/components/ui/hero-section-2"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MedicalNavbar />

      <HeroSection
        logo={{
          url: "/medical-cross-logo.png",
          alt: "Medical Updates and Broadcast Logo",
          text: "Medical Updates and Broadcast",
        }}
        slogan="GLOBAL HEALTH WATCHDOG"
        title={
          <>
            Monitoring Medical Events <br />
            <span className="text-primary">For a Healthier Tomorrow</span>
          </>
        }
        subtitle="Medical Updates and Broadcast is a Pakistan-based watchdog NGO dedicated to tracking, analyzing, and reporting on medical conferences and events worldwide. We ensure transparency and accountability in global healthcare."
        callToAction={{
          text: "EXPLORE OUR REPORTS",
          href: "/blogs",
        }}
        backgroundImage="/hero.webp"
        contactInfo={{
          website: "medicalupdates.net",
          phone: "+92 (300) 123-4567",
          address: "Studio No 4 Shahid Plaza, Block R, Blue Area, Islamabad Pakistan-44000",
        }}
      />

      <main className="flex-1">
        <MissionSection />

        {/* Mission Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BouncyCardsFeatures />
          </div>
        </section>

        {/* Featured Blog Posts Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Latest Medical Conference Reports
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Read our in-depth coverage and analysis of recent medical events and conferences from around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8">
              <Link href="/blogs/pakistan-medical-sector-comprehensive-analysis" className="hover:opacity-90 transition-opacity">
                <ArticleCard
                  headline="Pakistan Medical Sector"
                  excerpt="A comprehensive analysis of Pakistan's health-care landscape covering public hospitals, private sector, military medical facilities, budget allocations, and key recommendations for achieving universal, equitable care."
                  cover="/blog7.jpg"
                  tag="Healthcare System"
                  readingTime={720}
                  writer="Hamza Khursheed"
                  publishedAt={new Date("2025-09-01")}
                  clampLines={3}
                />
              </Link>

              <Link href="/blogs/who-role-in-pakistan-medical-sector" className="hover:opacity-90 transition-opacity">
                <ArticleCard
                  headline="WHO Role in Pakistan Medical Sector"
                  excerpt="An examination of WHO's multidimensional role as Pakistan's principal international technical partner, providing policy guidance, emergency coordination, capacity building, and strategic support for TB, polio, and respiratory health."
                  cover="/blog5.jpg"
                  tag="Public Health"
                  readingTime={600}
                  writer="Hamza Khursheed"
                  publishedAt={new Date("2025-06-01")}
                  clampLines={3}
                />
              </Link>

              <Link href="/blogs/improvement-medical-facilities-remote-areas-pakistan" className="hover:opacity-90 transition-opacity">
                <ArticleCard
                  headline="Improvement of Medical Facilities in Remote Areas of Pakistan Across All Provinces"
                  excerpt="A comprehensive guide to strengthening healthcare in Pakistan's remote areas through infrastructure, human resources, technology, and governance reforms to close the rural-urban health gap."
                  cover="/blog6.jpg"
                  tag="Public Health"
                  readingTime={840}
                  writer="Hamza Khursheed"
                  publishedAt={new Date("2025-03-01")}
                  clampLines={3}
                />
              </Link>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/blogs">
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <GlobeFeatureSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
