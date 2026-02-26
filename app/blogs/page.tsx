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
    id: "pakistan-medical-sector-comprehensive-analysis",
    title: "Pakistan Medical Sector",
    excerpt:
      "A comprehensive analysis of Pakistan's health-care landscape covering public hospitals, private sector, military medical facilities, budget allocations, and key recommendations for achieving universal, equitable care.",
    category: "Healthcare System",
    date: "September 2025",
    author: "Hamza Khursheed",
    readTime: "12 min read",
    image: "/blog7.jpg",
  },
  {
    id: "tuberculosis-lung-diseases-pakistan-efforts-challenges",
    title: "Tuberculosis & Lung Diseases in Pakistan: Current Efforts, Challenges, and the Road Ahead",
    excerpt:
      "An in-depth look at Pakistan's fight against TB and chronic lung diseases, covering government prevention measures, modern treatment facilities, public-private partnerships, and the path forward to a TB-free future.",
    category: "Public Health",
    date: "June 2022",
    author: "Hamza Khursheed",
    readTime: "11 min read",
    image: "/tb.jpg",
  },
  {
    id: "improvement-medical-facilities-remote-areas-pakistan",
    title: "Improvement of Medical Facilities in Remote Areas of Pakistan Across All Provinces",
    excerpt:
      "A comprehensive guide to strengthening healthcare in Pakistan's remote areas through infrastructure, human resources, technology, and governance reforms to close the rural-urban health gap.",
    category: "Public Health",
    date: "March 2025",
    author: "Hamza Khursheed",
    readTime: "14 min read",
    image: "/blog6.jpg",
  },
  {
    id: "who-role-in-pakistan-medical-sector",
    title: "WHO Role in Pakistan Medical Sector",
    excerpt:
      "An examination of WHO's multidimensional role as Pakistan's principal international technical partner, providing policy guidance, emergency coordination, capacity building, and strategic support for TB, polio, and respiratory health.",
    category: "Public Health",
    date: "June 2025",
    author: "Hamza Khursheed",
    readTime: "10 min read",
    image: "/blog5.jpg",
  },
  {
    id: "pakistan-medical-structure-overview-facilities-who-support",
    title: "Pakistan Medical Structure: Overview, Facilities, WHO Support, Rankings, and Pathways for Improvement",
    excerpt:
      "A comprehensive analysis of Pakistan's health system architecture, government facilities, private sector contributions, WHO support, international rankings, and immediate pathways for strengthening healthcare delivery.",
    category: "Public Health",
    date: "December 2024",
    author: "Hamza Khursheed",
    readTime: "15 min read",
    image: "/blog4.jpg",
  },
  {
    id: "polio-in-pakistan-brief-overview-and-current-response",
    title: "Polio in Pakistan: Brief Overview and Current Response",
    excerpt:
      "An examination of Pakistan's urgent public health challenge with polio, covering government actions, private sector contributions, modern tools in use, and opportunities for complete eradication.",
    category: "Public Health",
    date: "February 2023",
    author: "Dr Amir Nagra",
    readTime: "12 min read",
    image: "/blog3.JPG",
  },
  {
    id: "pakistan-breast-cancer-awareness-campaigns",
    title: "Pakistan's Breast Cancer Awareness Campaigns: A Nation's Fight for Early Detection and Empowerment",
    excerpt:
      "Breast cancer awareness in Pakistan is gaining momentum through nationwide campaigns, public-private partnerships, and community-driven initiatives addressing one of Asia's highest incidence rates.",
    category: "Public Health",

    date: "November 2022",
    author: "Hamza Khursheed",
    readTime: "10 min read",
    image: "/blog2.webp",
  },
  {
    id: "covid-19-in-pakistan-response-partnerships-and-awareness",
    title: "COVID-19 in Pakistan — Response, Partnerships, and Awareness",
    excerpt:
      "A summary of Pakistan's multi-sector COVID-19 response: government actions, private-sector support, and awareness campaigns that shaped public behaviour and vaccine uptake.",
    category: "Public Health",
    date: "February 15, 2021",
    author: "Hamza Khursheed",
    readTime: "12 min read",
    image: "/blog1.webp",
  },
  {
    id: "saudi-arabia-hematology-conference-2024",
    title: "Saudi Arabia’s Hematology Conference: A Step Forward in 2024",
    excerpt:
      "A review of the Second SSBMT/SSH Combined Annual Conference in Jeddah, highlighting its expanded collaboration, four-in-one format, multidisciplinary focus, and growing role as a Pan-Arab hub for hematology and transplantation.",
    category: "Conference Review",
    date: "February 2024",
    author: "Medical Updates Team",
    readTime: "8 min read",
    image: "/saudi.jpg",
  }
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
    images: ["/service.jpg", "/service1.jpeg", "/service3.webp"],
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Users className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
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
                      <Link href={`/blogs/${post.id}`} className="text-primary hover:underline inline-flex items-center text-sm font-medium">
                        Read Full Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
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
