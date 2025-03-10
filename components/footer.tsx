"use client"

import { useEffect } from "react"
import { Phone, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          const headerOffset = 80 // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("about_company")}</h3>
            <p className="text-sm">{t("about_company_desc")}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tracking" className="hover:text-white transition-colors">
                  {t("track_package")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("our_services")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t("about_us")}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  {t("our_partners")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t("contact_us")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contacts")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+998977575747" className="hover:text-white transition-colors">
                  +998 97 757 57 47
                </a>
              </li>
              <li className="flex items-center">
                <Send className="w-5 h-5 mr-2" />
                <a
                  href="https://t.me/jakhonshokh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @jakhonshokh
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            © {new Date().getFullYear()} Courier. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

