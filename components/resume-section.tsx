import type { ReactNode } from 'react'
import { BookOpen, Briefcase } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Resume</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>
      <ResumeGroup title="Education" icon={<BookOpen className="w-6 h-6 text-accent" aria-hidden="true" />} items={data.education} />
      <ResumeGroup title="Experience" icon={<Briefcase className="w-6 h-6 text-accent" aria-hidden="true" />} items={data.experience} />
    </div>
  )
}

type ResumeItem = (typeof resumeData.education)[number]

function ResumeGroup({ title, icon, items }: { title: string; icon: ReactNode; items: ResumeItem[] }) {
  return (
    <section aria-labelledby={`${title.toLowerCase()}-heading`}>
      <div className="flex items-center gap-3 mb-5">
        {icon}
        <h3 id={`${title.toLowerCase()}-heading`} className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="space-y-4 border-l-2 border-border ml-3 pl-6">
        {items.map((item) => (
          <article key={`${item.title}-${item.period}`} className="relative">
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-sm text-accent font-medium mb-1">{item.period}</p>
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {item.description.map((description) => <p key={description}>{description}</p>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
