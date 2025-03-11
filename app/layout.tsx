import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: {
    default: "Courier - Логистические и транспортные услуги",
    template: "% | Courier",
  },
  description:
    "Профессиональные услуги в сфере грузоперевозок, туризма и консалтинга. Надежные решения для вашего бизнеса.",
  keywords: ["грузоперевозки", "логистика", "туризм", "консалтинг", "таможенное оформление"],
  authors: [{ name: "Courier" }],
  creator: "Courier",
  publisher: "Courier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    // Default favicon.ico
    { rel: "shortcut icon", url: "/favicon.ico" },
    // Other icon sizes
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-FWL64bkpgvy2IUq1xOaNugnUqh2dG4.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-0nl8HQ95jF7G5EXDi572e6lMGrcTdx.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-CW7gDdyjtMwl7CTkJ4mQlZlmzeYg9T.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-COt5EwxpvQf23Nt1Lfv2BhQzMHVJeg.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-TcTqq5SuDvtJsm0Z2MdOk3xMGDf61t.png",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'
