import './globals.css'
import { Karla } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { title } from 'process';

const karla = Karla({ 
  subsets: ['latin'],
  variable: '--font-karla'
})

export const metadata: Metadata = {
  title: "Yusuf's Word Scrambler",
  description: "An app where you can input text and we'll shuffle it around for you",
  openGraph: {
    title: "a React text Shuffler",
    description: "an app that'll shuffle your text for you and allow to download the result",
    siteName: "scrambledeggs.yusuf.fyi",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "a React text shuffler",
    description: "an app that'll shuffle your text for you and allow to download the result",
    creator: "@spacehiker_"
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.variable} >
        <main className='font-sans bg-stone-50 h-full flex items-center justify-center caret-orange-400'>
        {children}
        <Analytics/>
        </main>
      </body>
    </html>
  )
}
