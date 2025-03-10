"use client"

import Image from "next/image"
import TrackingForm from "@/components/tracking-form"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

const partners = [
  {
    name: "Otabek Express",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-nEE9IfnOBlgAcX9h8hJ7OJilwQmtE9.png",
    link: "https://www.instagram.com/otabek__express/",
  },
  {
    name: "Onson Mail",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-xAx5PXnQnIB6pc8E0ylu8j5JKf9tE2.png",
    link: "https://onson-mail.uz/",
  },
  {
    name: "Chopar Express",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-RYOJQBvRTmAXc3GfAP8nBVQb7CTvyJ.png",
    link: "https://www.instagram.com/choparexpress/",
  },
  {
    name: "Ruzgar Express",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-7QGBWidBEJelJpoBQQuz3VX4CjcT9Y.jpeg",
    link: "https://ruzgarexpress.com/ru/index.html",
  },
  {
    name: "Lochin Cargo Express",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-hoFkaVZJ65WqjWT56Vp8s9IrmipiZG.jpeg",
    link: "#",
  },
  {
    name: "Best Express Expo Cargo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-rw0YMTIqrPheoE8MyGDFnAlzmLsYtz.jpeg",
    link: "#",
  },
]

const services = [
  {
    titleKey: "service_cargo",
    descriptionKey: "service_cargo_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-rTRPJTELBzOvRHFEKObO0dkM94O2JX.png",
  },
  {
    titleKey: "service_customs",
    descriptionKey: "service_customs_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-pjzFpUzzzODKy4eR0BQCcVAFeU85Nh.png",
  },
  {
    titleKey: "service_tours",
    descriptionKey: "service_tours_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-9wuYb754tGy3Ta0ht1ft2ZJYorxBx5.png",
  },
  {
    titleKey: "service_business",
    descriptionKey: "service_business_desc",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-RgQwdgBpq0tyhUv9BoO6sLs6O8TpfU.png",
  },
]

export default function HomeContent() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Логистический фон с грузовиками и контейнерами"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t("hero_title")}</h1>
            <p className="text-lg text-gray-700">{t("hero_description")}</p>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="bg-gray-100 py-24 scroll-mt-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              {t("track_section_title")} <span className="text-orange-500">{t("package").toLowerCase()}</span>
            </h2>
            <p className="text-gray-600">{t("track_section_description")}</p>
            <TrackingForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 scroll-mt-32">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("services_title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-gray-600 mb-1">{t(service.titleKey)}</h3>
                  <p className="text-gray-900 font-medium">{t(service.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white scroll-mt-32">
        <div className="container">
          <div className="space-y-8">
            <span className="text-orange-500 font-medium">{t("about_label")}</span>
            <h2 className="text-4xl font-bold max-w-4xl">{t("about_title")}</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 p-8 rounded-2xl space-y-12">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">10 000+</h3>
                  <p className="text-gray-600">{t("stat_cargo")}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">1 000+</h3>
                  <p className="text-gray-600">{t("stat_tours")}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">100+</h3>
                  <p className="text-gray-600">{t("stat_business")}</p>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about-1.1-zEaaUhAmRfb0YytVrZkxoYuVBhGhDd.png"
                  alt="Грузовой корабль с контейнерами"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 overflow-hidden scroll-mt-32">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-13.jpg-gTgZ65QGij1bSFkkYAX6WTumWqGSrk.webp"
            alt="Ночная сцена с современным грузовиком на шоссе"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("contact_title")}</h2>
              <p className="mb-8 text-gray-600">{t("contact_description")}</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-gray-50 py-24 scroll-mt-32">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("partners_title")}</h2>
          <PartnersCarousel partners={partners} />
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Courier",
            description: "Профессиональные услуги в сфере грузоперевозок, туризма и консалтинга",
            url: "https://www.courier-example.com",
            logo: "https://www.courier-example.com/logo.png",
            sameAs: [
              "https://www.facebook.com/courier-example",
              "https://www.instagram.com/courier-example",
              "https://www.linkedin.com/company/courier-example",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+7-123-456-7890",
              contactType: "customer service",
              areaServed: "RU",
              availableLanguage: ["Russian", "English"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Логистическая улица",
              addressLocality: "Москва",
              postalCode: "123456",
              addressCountry: "RU",
            },
          }),
        }}
      />
    </main>
  )
}

