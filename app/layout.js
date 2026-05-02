import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import GSAPProvider from "../components/GSAPProvider"
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: "ANNAI College of Engineering & Technology",
  description: "Empowering young minds with quality education, innovative ideas, futuristic development to create global leaders of tomorrow.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <GSAPProvider>
          <main className="flex-1">
            {children}
          </main>
        </GSAPProvider>
        <Footer />
      </body>
    </html>
  )
}