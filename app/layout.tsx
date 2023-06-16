import './globals.css'
import { Karla } from 'next/font/google'

const karla = Karla({ 
  subsets: ['latin'],
  variable: '--font-karla'
})

export const metadata = {
  title: "Yusuf's Word Scrambler",
  description: "An app where you can input text and we'll shuffle it around for you",
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
        </main>
      </body>
    </html>
  )
}
