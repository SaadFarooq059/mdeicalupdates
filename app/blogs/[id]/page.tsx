import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <article className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-8">
                <Link href="/blogs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blogs
                </Link>
              </Button>

              <div className="mb-8">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">
                  Conference Review
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  World Health Summit 2024: Key Takeaways on Pandemic Preparedness
                </h1>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>January 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                <img
                  src="/medical-conference-hall.jpg"
                  alt="World Health Summit"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed space-y-6">
                  <p className="text-lg text-muted-foreground">
                    The World Health Summit 2024, held in Berlin from October 13-15, brought together global health
                    leaders, policymakers, and researchers to discuss critical challenges facing the international
                    healthcare community. This year's summit placed particular emphasis on pandemic preparedness and
                    response mechanisms.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Discussions and Commitments</h2>

                  <p className="text-muted-foreground">
                    The summit featured over 300 speakers from 100+ countries, addressing topics ranging from vaccine
                    equity to digital health infrastructure. Several key themes emerged from the three-day event that
                    will shape global health policy in the coming years.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Strengthening Global Health Security
                  </h3>

                  <p className="text-muted-foreground">
                    Leaders emphasized the need for robust early warning systems and rapid response mechanisms. The WHO
                    Director-General highlighted the importance of international cooperation in detecting and containing
                    emerging infectious diseases before they become global threats.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Vaccine Development and Distribution
                  </h3>

                  <p className="text-muted-foreground">
                    Discussions centered on accelerating vaccine development timelines while ensuring equitable access
                    across all nations. Several pharmaceutical companies announced partnerships with developing
                    countries to establish local manufacturing capabilities.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Digital Health Innovation</h3>

                  <p className="text-muted-foreground">
                    The role of artificial intelligence and digital technologies in pandemic response was a major focus.
                    Presentations showcased AI-powered diagnostic tools and telemedicine platforms that proved crucial
                    during recent health crises.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Analysis</h2>

                  <p className="text-muted-foreground">
                    As a watchdog organization, Medical Updates observed several positive developments at this year's
                    summit. The increased commitment to transparency in health data sharing and the emphasis on
                    including low and middle-income countries in decision-making processes represent significant
                    progress.
                  </p>

                  <p className="text-muted-foreground">
                    However, we note that concrete implementation timelines and funding mechanisms for many initiatives
                    remain unclear. We will continue to monitor the follow-through on commitments made during the summit
                    and report on progress in the coming months.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Looking Ahead</h2>

                  <p className="text-muted-foreground">
                    The World Health Summit 2024 set an ambitious agenda for global health cooperation. The true measure
                    of success will be the implementation of discussed strategies and the tangible improvements in
                    pandemic preparedness worldwide. Medical Updates will continue to track these developments and
                    provide regular updates to our community.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <Button asChild>
                  <Link href="/blogs">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Articles
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
