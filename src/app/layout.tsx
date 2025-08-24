import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdelaziz Aguenchich - Full-Stack Engineer',
  description: 'Digital Banking Innovator & Full-Stack Engineer specializing in microservices, AI integration, and enterprise applications.',
  keywords: 'Full-Stack Engineer, Digital Banking, Microservices, Angular, Java, React, Morocco, Casablanca',
  author: 'Abdelaziz Aguenchich',
  openGraph: {
    title: 'Abdelaziz Aguenchich - Full-Stack Engineer',
    description: 'Digital Banking Innovator & Full-Stack Engineer',
    type: 'website',
  },
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font link removed; using Next.js font optimization */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}