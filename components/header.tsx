"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import HeaderTop from "./header-top"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setOpen(false) // Close the mobile menu

    // Use setTimeout to ensure the menu is closed before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        const headerOffset = 120 // Increased to account for the new header top and potential mobile browser UI
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100) // Small delay to ensure smooth transition
  }

  return (
    <>
      <HeaderTop />
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="absolute inset-0 bg-white" />

        <div className="container relative">
          <div className="flex items-center justify-between py-2">
            <Link href="/" className="flex items-center">
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-b5dlDI48f2ZGUKeHfhoHSXWmtM4plO.png"
                  alt="Courier Service Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("tracking")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t("track_package")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t("our_services")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t("about_us")}
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t("our_partners")}
              </button>
              <LanguageSwitcher />
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center md:hidden">
              <LanguageSwitcher />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="ml-2">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => scrollToSection("tracking")}
                      className="text-lg font-medium hover:text-blue-600 transition-colors text-left w-full"
                    >
                      {t("track_package")}
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-lg font-medium hover:text-blue-600 transition-colors text-left w-full"
                    >
                      {t("our_services")}
                    </button>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-lg font-medium hover:text-blue-600 transition-colors text-left w-full"
                    >
                      {t("about_us")}
                    </button>
                    <button
                      onClick={() => scrollToSection("partners")}
                      className="text-lg font-medium hover:text-blue-600 transition-colors text-left w-full"
                    >
                      {t("our_partners")}
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-lg font-medium hover:text-blue-600 transition-colors text-left w-full"
                    >
                      {t("contact_us")}
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

