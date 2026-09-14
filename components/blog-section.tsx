'use client'

import { useEffect, useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { blogData } from '@/lib/portfolio-data'

interface BlogSectionProps {
  data?: typeof blogData
}

export function BlogSection({ data = blogData }: BlogSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isImageOpen = selectedIndex !== null

  const selectedPost =
    selectedIndex !== null ? data.posts[selectedIndex] : null

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null)
      }

      if (event.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex(
          (selectedIndex + 1) % data.posts.length
        )
      }

      if (event.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex(
          (selectedIndex - 1 + data.posts.length) % data.posts.length
        )
      }
    }

    if (isImageOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isImageOpen, selectedIndex, data.posts.length])

  const showPrevious = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      (selectedIndex - 1 + data.posts.length) % data.posts.length
    )
  }

  const showNext = () => {
    if (selectedIndex === null) return

    setSelectedIndex(
      (selectedIndex + 1) % data.posts.length
    )
  }

  return (
    <>
      <div className="space-y-6 md:space-y-8">

        {/* Section Header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Certificate
          </h2>

          <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {data.posts.map((post, index) => (
            <article
              key={index}
              className="group bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >

              {/* Certificate Image */}
              <div
                className="aspect-video overflow-hidden bg-background cursor-pointer"
                onClick={() => setSelectedIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setSelectedIndex(index)
                  }
                }}
                aria-label={`View ${post.title} certificate`}
              >
                <img
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Certificate Information */}
              <div className="p-4 md:p-5">

                {/* Category & Date */}
                <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground mb-3">

                  <span className="px-2.5 md:px-3 py-0.5 md:py-1 bg-accent/10 text-accent rounded-full font-medium">
                    {post.category}
                  </span>

                  {post.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      {post.date}
                    </span>
                  )}

                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

              </div>
            </article>
          ))}

        </div>
      </div>

      {/* Certificate Lightbox */}
      {isImageOpen && selectedPost && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >

          {/* Previous Button */}
          {data.posts.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              className="absolute left-3 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 text-foreground border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-lg"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

          {/* Certificate Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-background text-foreground border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-lg"
              aria-label="Close certificate"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Certificate */}
            <img
              src={selectedPost.image || '/placeholder.svg'}
              alt={selectedPost.title}
              className="max-w-[92vw] max-h-[78vh] md:max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />

            {/* Certificate Info */}
            <div className="mt-4 text-center max-w-2xl px-4">

              <h3 className="text-base md:text-lg font-semibold text-white">
                {selectedPost.title}
              </h3>

              {selectedPost.date && (
                <p className="text-xs md:text-sm text-white/70 mt-1">
                  {selectedPost.date}
                </p>
              )}

            </div>

          </div>

          {/* Next Button */}
          {data.posts.length > 1 && (
            <button
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              className="absolute right-3 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 text-foreground border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 shadow-lg"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

        </div>
      )}
    </>
  )
}