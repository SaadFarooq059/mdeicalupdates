"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface ArticleCardProps {
  headline: string
  excerpt: string
  cover?: string
  tag?: string
  readingTime?: number // in seconds
  writer?: string
  publishedAt?: Date
  clampLines?: number
}

// Human-friendly read time: seconds -> "X min read"
export function formatReadTime(seconds: number): string {
  if (!seconds || seconds < 60) return "Less than 1 min read"
  const minutes = Math.ceil(seconds / 60)
  return `${minutes} min read`
}

// Date -> "Aug 15, 2025" (localized but concise)
export function formatPostDate(date: Date): string {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  cover,
  tag,
  readingTime,
  headline,
  excerpt,
  writer,
  publishedAt,
  clampLines,
}) => {
  const hasMeta = tag || readingTime
  const hasFooter = writer || publishedAt

  return (
    <Card className="flex w-full max-w-sm h-full flex-col gap-3 overflow-hidden rounded-3xl border p-3 shadow-lg">
      {cover && (
        <CardHeader className="p-0 flex-shrink-0">
          <div className="relative h-56 w-full">
            <Image src={cover || "/placeholder.svg"} alt={headline} fill className="rounded-2xl object-cover" />
          </div>
        </CardHeader>
      )}

      <CardContent className="flex-grow p-3 flex flex-col min-h-0">
        {hasMeta && (
          <div className="mb-4 flex items-center text-sm text-muted-foreground flex-shrink-0">
            {tag && (
              <Badge className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground hover:text-black">
                {tag}
              </Badge>
            )}
            {tag && readingTime && <span className="mx-2">•</span>}
            {readingTime && <span>{formatReadTime(readingTime)}</span>}
          </div>
        )}

        <h2 className="mb-2 text-2xl font-bold leading-tight text-card-foreground line-clamp-2 flex-shrink-0">
          {headline}
        </h2>

        <p
          className={cn("text-muted-foreground overflow-hidden text-ellipsis", {
            "[-webkit-box-orient:vertical] [display:-webkit-box]": clampLines && clampLines > 0,
          })}
          style={{
            WebkitLineClamp: clampLines || 3,
          }}
        >
          {excerpt}
        </p>
      </CardContent>

      {hasFooter && (
        <CardFooter className="flex items-center justify-between p-3 flex-shrink-0 mt-auto">
          {writer && (
            <div>
              <p className="text-sm text-muted-foreground">By</p>
              <p className="font-semibold text-muted-foreground truncate max-w-[120px]">{writer}</p>
            </div>
          )}
          {publishedAt && (
            <div className={writer ? "text-right" : ""}>
              <p className="text-sm text-muted-foreground">Published</p>
              <p className="font-semibold text-muted-foreground whitespace-nowrap">{formatPostDate(publishedAt)}</p>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
