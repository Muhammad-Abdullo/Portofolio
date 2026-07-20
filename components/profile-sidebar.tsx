'use client'

import { Mail, Phone, Calendar, MapPin } from 'lucide-react'

interface ProfileData {
  name: string
  role: string
  email: string
  phone: string
  birthday: string
  location: string
  avatarUrl: string
}

export function ProfileSidebar({ data }: { data: ProfileData }) {
  return (
    <aside className="w-full lg:w-80 bg-card rounded-xl md:rounded-2xl border border-border p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center lg:text-left lg:items-start h-fit lg:sticky lg:top-6">
      {/* Avatar & Nama */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden mb-4 bg-muted border border-border">
        <img
          src={data.avatarUrl || "/placeholder.svg"}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-foreground">
        {data.name}
      </h1>
      
      <p className="text-xs sm:text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-lg mb-6 inline-block font-medium">
        {data.role}
      </p>

      <div className="w-full border-t border-border my-2 lg:block hidden"></div>

      {/* Info Kontak */}
      <div className="w-full space-y-4 sm:space-y-5 text-left pt-4">
        {/* EMAIL (Bisa diklik langsung buka aplikasi Email) */}
        <div className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/50">
            <Mail className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Email</p>
            <a 
              href={`mailto:${data.email}`}
              className="text-xs sm:text-sm text-foreground hover:text-primary hover:underline transition-colors block truncate"
            >
              {data.email}
            </a>
          </div>
        </div>

        {/* PHONE (Bisa diklik langsung chat ke WhatsApp) */}
        <div className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/50">
            <Phone className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Phone</p>
            <a 
              href="https://wa.me/6281357841933" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-foreground hover:text-green-500 hover:underline transition-colors block truncate"
            >
              {data.phone}
            </a>
          </div>
        </div>

        {/* BIRTHDAY */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/50">
            <Calendar className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Birthday</p>
            <p className="text-xs sm:text-sm text-foreground">{data.birthday}</p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-secondary text-primary border border-border/50">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">Location</p>
            <p className="text-xs sm:text-sm text-foreground">{data.location}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}