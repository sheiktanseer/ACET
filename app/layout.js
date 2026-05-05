import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import GSAPProvider from "../components/GSAPProvider"
import AdmissionPopup from "../components/AdmissionPopup"
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
  authors: [{ name: "Sheik Tanseer" }],
  creator: "Sheik Tanseer",
  other: {
    "designed-by": "Sheik Tanseer",
    "built-by": "Sheik Tanseer — B.E. Mechanical Engineering, Annai College 2016",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",   // enables env(safe-area-inset-*) for iPhone notch/Dynamic Island
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <AdmissionPopup />
        <Navbar />
        {/* page-wrapper clips horizontal overflow without breaking fixed navbar (Safari safe) */}
        <div className="page-wrapper flex-1 flex flex-col">
          <GSAPProvider>
            <main className="flex-1">
              {children}
            </main>
          </GSAPProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}