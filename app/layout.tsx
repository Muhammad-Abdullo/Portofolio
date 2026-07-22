import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Muhammad Abdulloh Portofolio',
  description: 'Portfolio of John Doe, a Full-Stack Developer specializing in modern web technologies',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logom.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logom.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logom.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logom.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
