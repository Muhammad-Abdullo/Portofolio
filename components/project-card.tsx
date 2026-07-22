import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      {/* Container Gambar */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Konten Kartu */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          {/* Judul Proyek */}
          <h3 className="text-xl font-semibold tracking-tight text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Deskripsi Proyek */}
          <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tag & Link */}
        <div className="mt-6 space-y-4 pt-4 border-t border-border/50">
          {/* Daftar Tech Stack (Tags) */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tombol Akses (Jika ada URL) */}
          {(liveUrl || githubUrl) && (
            <div className="flex items-center gap-3 pt-2">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}