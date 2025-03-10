"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ru" | "uz"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    track_package: "Отслеживать посылку",
    our_services: "Наши услуги",
    about_us: "О нас",
    our_partners: "Наши партнеры",
    contact_us: "Связаться с нами",

    // Hero
    hero_title: "RZG new express - ваш надежный курьерский партнер",
    hero_description:
      "Мы - динамично развивающаяся компания, предоставляющая профессиональные услуги в сфере грузоперевозок, туризма и консалтинга. Наша цель - предложить надежные решения, ориентированные на потребности наших клиентов.",

    // Tracking
    track_section_title: "Отслеживайте свою посылку",
    track_section_description:
      "Отслеживайте статус и местоположение вашей посылки в режиме реального времени. Введите номер отслеживания и получите актуальную информацию о местонахождении вашего груза.",
    enter_tracking_number: "Введите номер отслеживания",
    track: "Отследить",
    searching: "Поиск...",
    tracking_error: "Произошла ошибка при отслеживании посылки. Пожалуйста, попробуйте позже.",
    tracking_info:
      "Для получения дополнительной информации о вашей посылке, пожалуйста, свяжитесь с нашей службой поддержки.",

    // Services
    services_title: "Наши услуги",
    service_cargo: "Грузоперевозки",
    service_cargo_desc: "Надежные и оперативные грузоперевозки по всему миру с гарантией своевременной доставки",
    service_customs: "Таможенное оформление",
    service_customs_desc: "Профессиональное таможенное оформление с учетом всех требований законодательства",
    service_tours: "Туры",
    service_tours_desc: "Организация индивидуальных и корпоративных туров с полным сопровождением",
    service_business: "Бизнес-услуги",
    service_business_desc: "Комплексные решения для развития вашего бизнеса и консалтинговые услуги",

    // About
    about_label: "О нас",
    about_title: "Мы продолжаем расти и достигать новых высот вместе с нашими клиентами!",
    stat_cargo: "тонн успешно доставленного груза за месяц",
    stat_tours: "организованных туров",
    stat_business: "успешных бизнес - стратегий внедрено",

    // Contact
    contact_title: "Связаться с нами",
    contact_description: "Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время.",
    first_name: "Имя",
    last_name: "Фамилия",
    phone: "Номер телефона",
    email: "Электронная почта",
    message: "Сообщение",
    send: "Отправить",
    sending: "Отправка...",
    contact_success: "Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    contact_error: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.",

    // Partners
    partners_title: "Наши партнеры",

    // Footer
    about_company: "О компании",
    about_company_desc:
      "Courier - ваш надежный партнер в сфере грузоперевозок, туризма и консалтинга. Мы предоставляем профессиональные услуги и индивидуальный подход к каждому клиенту.",
    quick_links: "Быстрые ссылки",
    contacts: "Контакты",
    copyright: "Все права защищены.",

    // Tracking details
    package: "Посылка",
    status: "Статус",
    location: "Местоположение",
    last_update: "Последнее обновление",
    sender: "Отправитель",
    recipient: "Получатель",
    package_info: "Информация о посылке",
    tracking_number: "Номер отправления",
    weight: "Вес",
    amount: "Сумма",
    history: "История отправления",
    unknown_status: "Статус неизвестен",
    support_info: "Для получения дополнительной информации, свяжитесь с нашей службой поддержки",

    // Language
    language: "Язык",
    ru: "Русский",
    uz: "O'zbekcha",
  },
  uz: {
    // Header
    track_package: "Jo'natmani kuzatish",
    our_services: "Bizning xizmatlar",
    about_us: "Biz haqimizda",
    our_partners: "Bizning hamkorlar",
    contact_us: "Biz bilan bog'lanish",

    // Hero
    hero_title: "RZG new express - sizning ishonchli kuryer hamkoringiz",
    hero_description:
      "Biz - yuk tashish, turizm va konsalting sohasida professional xizmatlarni taqdim etuvchi dinamik rivojlanayotgan kompaniyamiz. Bizning maqsadimiz - mijozlarimizning ehtiyojlariga yo'naltirilgan ishonchli yechimlarni taklif qilish.",

    // Tracking
    track_section_title: "Jo'natmangizni kuzating",
    track_section_description:
      "Jo'natmangizning holati va joylashuvini real vaqt rejimida kuzating. Kuzatuv raqamini kiriting va yuklaringiz joylashuvi haqida dolzarb ma'lumot oling.",
    enter_tracking_number: "Kuzatuv raqamini kiriting",
    track: "Kuzatish",
    searching: "Qidirilmoqda...",
    tracking_error: "Jo'natmani kuzatishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
    tracking_info:
      "Jo'natmangiz haqida qo'shimcha ma'lumot olish uchun, iltimos, bizning qo'llab-quvvatlash xizmatimiz bilan bog'laning.",

    // Services
    services_title: "Bizning xizmatlar",
    service_cargo: "Yuk tashish",
    service_cargo_desc:
      "O'z vaqtida yetkazib berishni kafolati bilan butun dunyo bo'ylab ishonchli va tezkor yuk tashish",
    service_customs: "Bojxona rasmiylashtiruvi",
    service_customs_desc: "Qonunchilik talablarini hisobga olgan holda professional bojxona rasmiylashtiruvi",
    service_tours: "Turlar",
    service_tours_desc: "To'liq hamrohlik bilan individual va korporativ turlarni tashkil etish",
    service_business: "Biznes xizmatlari",
    service_business_desc: "Biznesingizni rivojlantirish va konsalting xizmatlari uchun kompleks yechimlar",

    // About
    about_label: "Biz haqimizda",
    about_title: "Biz mijozlarimiz bilan birga o'sishda davom etmoqdamiz va yangi cho'qqilarga erishmoqdamiz!",
    stat_cargo: "tonna yuk bir oyda muvaffaqiyatli yetkazib berildi",
    stat_tours: "tashkil etilgan turlar",
    stat_business: "muvaffaqiyatli biznes strategiyalari joriy etildi",

    // Contact
    contact_title: "Biz bilan bog'lanish",
    contact_description: "Kontakt ma'lumotlaringizni qoldiring, va biz siz bilan tez orada bog'lanamiz.",
    first_name: "Ism",
    last_name: "Familiya",
    phone: "Telefon raqami",
    email: "Elektron pochta",
    message: "Xabar",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    contact_success: "Rahmat! Sizning xabaringiz muvaffaqiyatli yuborildi. Biz siz bilan tez orada bog'lanamiz.",
    contact_error: "Xabarni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",

    // Partners
    partners_title: "Bizning hamkorlar",

    // Footer
    about_company: "Kompaniya haqida",
    about_company_desc:
      "Courier - yuk tashish, turizm va konsalting sohasida ishonchli hamkoringiz. Biz har bir mijozga professional xizmatlar va individual yondashuvni taqdim etamiz.",
    quick_links: "Tezkor havolalar",
    contacts: "Kontaktlar",
    copyright: "Barcha huquqlar himoyalangan.",

    // Tracking details
    package: "Jo'natma",
    status: "Holat",
    location: "Joylashuv",
    last_update: "Oxirgi yangilanish",
    sender: "Yuboruvchi",
    recipient: "Qabul qiluvchi",
    package_info: "Jo'natma haqida ma'lumot",
    tracking_number: "Jo'natma raqami",
    weight: "Og'irlik",
    amount: "Summa",
    history: "Jo'natma tarixi",
    unknown_status: "Holat noma'lum",
    support_info: "Qo'shimcha ma'lumot olish uchun, bizning qo'llab-quvvatlash xizmatimiz bilan bog'laning",

    // Language
    language: "Til",
    ru: "Русский",
    uz: "O'zbekcha",
  },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("ru")

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "uz")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

