'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { profileData } from '@/lib/portfolio-data'

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)

  const whatsappNumber = data.phone.replace(/[^0-9]/g, '')

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    data.email
  )}`

  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <>
      <aside className="w-full lg:w-80 bg-card rounded-2xl border border-border p-4 md:p-6 lg:sticky lg:top-8 h-fit">

        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div
            className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 cursor-pointer"
            onClick={() => setIsImageOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsImageOpen(true)
              }
            }}
            aria-label="View profile photo"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent animate-pulse-slow" />

            <div className="absolute inset-[2px] rounded-3xl bg-secondary overflow-hidden">
              <img
                src={data.avatar || '/placeholder.svg'}
                alt={data.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            {data.name}
          </h1>

          <p className="text-xs md:text-sm text-muted-foreground bg-secondary px-3 md:px-4 py-1 rounded-lg">
            {data.title}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4 md:my-6" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase mb-1">
                Email
              </p>

              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent transition-colors break-all"
              >
                {data.email}
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-accent" />
            </div>

            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase mb-1">
                Phone
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent transition-colors"
              >
                {data.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>

            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase mb-1">
                Location
              </p>

              <p className="text-sm text-foreground">
                {data.location}
              </p>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">

          {/* GitHub */}
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href={data.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href={data.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

        </div>

      </aside>

      {/* Enlarged Profile Image / Lightbox */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={data.avatar || '/placeholder.svg'}
              alt={data.name}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background text-foreground border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors shadow-lg"
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}