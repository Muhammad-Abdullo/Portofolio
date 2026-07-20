'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactData {
  email: string
  phone: string
  location: string
}

export function ContactSection({ data }: { data: ContactData }) {
  return (
    <div className="space-y-6">
      {/* Grid Kartu Kontak */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* KARTU EMAIL (Bisa diklik langsung buka aplikasi Email) */}
        <a 
          href={`mailto:${data.email}`}
          className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/50 transition-all group"
        >
          <div className="p-3 rounded-xl bg-card text-primary border border-border group-hover:text-primary-foreground group-hover:bg-primary transition-colors">
            <Mail className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium truncate group-hover:underline">{data.email}</p>
          </div>
        </a>

        {/* KARTU PHONE (Bisa diklik langsung buka WhatsApp) */}
        <a 
          href="https://wa.me/6281357841933"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-green-500/50 transition-all group"
        >
          <div className="p-3 rounded-xl bg-card text-primary border border-border group-hover:text-white group-hover:bg-green-500 transition-colors">
            <Phone className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="text-sm font-medium truncate group-hover:underline">{data.phone}</p>
          </div>
        </a>

        {/* KARTU LOCATION */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
          <div className="p-3 rounded-xl bg-card text-primary border border-border">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm font-medium">{data.location}</p>
          </div>
        </div>

      </div>

      {/* Bagian Form / Peta di bawahnya (Tetap Aman) */}
      {/* Kode v0 kamu otomatis melanjutkan sisa form bawaan di sini jika ada */}
    </div>
  )
}