"use client"

import { MedicalNavbar } from "@/components/medical-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search, FileText, Users, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import HeroSection from "@/components/ui/hero-section-9"

const blogPosts = [
  {
    id: 1,
    title: "World Health Summit 2024: Key Takeaways on Pandemic Preparedness",
    excerpt:
      "An in-depth analysis of the discussions and commitments made at this year's World Health Summit, focusing on global pandemic response strategies.",
    category: "Conference Review",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "/medical-conference-hall.jpg",
  },
  {
    id: 2,
    title: "Breakthrough Announcements at the International Cardiology Conference",
    excerpt:
      "Exploring the latest research findings and treatment innovations presented at the ICC in Dubai, including advances in minimally invasive procedures.",
    category: "Medical Research",
    date: "January 10, 2025",
    readTime: "6 min read",
    image: "/cardiology-equipment.png",
  },
  {
    id: 3,
    title: "Digital Health Revolution: Insights from Asian MedTech Expo",
    excerpt:
      "A comprehensive review of emerging technologies showcased at the Asian Medical Technology Expo, from AI diagnostics to telemedicine platforms.",
    category: "Technology",
    date: "January 5, 2025",
    readTime: "10 min read",
    image: "/digital-health-technology.jpg",
  },
  {
    id: 4,
    title: "Global Oncology Summit: Progress in Cancer Treatment",
    excerpt:
      "Highlighting the most promising developments in cancer research and treatment protocols discussed at the Global Oncology Summit.",
    category: "Conference Review",
    date: "December 28, 2024",
    readTime: "7 min read",
    image: "/medical-research-lab.png",
  },
  {
    id: 5,
    title: "Mental Health in Focus: WHO Regional Conference Report",
    excerpt:
      "Key insights from the WHO Regional Conference on Mental Health, addressing stigma, access to care, and innovative treatment approaches.",
    category: "Public Health",
    date: "December 20, 2024",
    readTime: "9 min read",
    image: "/mental-health-support.png",
  },
  {
    id: 6,
    title: "Vaccine Development Forum: Lessons from Recent Outbreaks",
    excerpt:
      "Analysis of discussions at the Vaccine Development Forum regarding rapid response mechanisms and equitable distribution strategies.",
    category: "Medical Research",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/vaccine-research.jpg",
  },
]

const categories = ["All", "Conference Review", "Medical Research", "Technology", "Public Health"]

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const heroData = {
    title: (
      <>
        Medical Insights <br /> & Conference Reports
      </>
    ),
    subtitle:
      "Stay informed with in-depth analysis, reviews, and reports from global medical conferences and healthcare events.",
    actions: [
      {
        text: "Explore Articles",
        onClick: () => {
          const searchSection = document.getElementById("search-section")
          searchSection?.scrollIntoView({ behavior: "smooth" })
        },
        variant: "default" as const,
      },
      {
        text: "Subscribe",
        onClick: () => alert("Subscribe feature coming soon!"),
        variant: "outline" as const,
      },
    ],
    stats: [
      {
        value: "150+",
        label: "Articles",
        icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: "50+",
        label: "Events Covered",
        icon: <Globe className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: "10K+",
        label: "Readers",
        icon: <Users className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: ["/medical-conference-hall.jpg", "/cardiology-equipment.png", "/digital-health-technology.jpg"],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MedicalNavbar />

      <main className="flex-1">
        <HeroSection
          title={heroData.title}
          subtitle={heroData.subtitle}
          actions={heroData.actions}
          stats={heroData.stats}
          images={heroData.images}
        />

        {/* Search and Filter Section */}
        <section id="search-section" className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background border-input"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-foreground text-xl leading-tight mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button asChild variant="link" className="p-0 h-auto text-primary">
                        <Link href={`/blogs/${post.id}`}>
                          Read Full Article
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"></div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
