"use client"

import TrackStandalone from "@/components/track-standalone"
import { useLanguage } from "@/contexts/language-context"

export default function TrackWidgetContent() {
  const { t } = useLanguage()

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("track_package")}</h1>
      <TrackStandalone />
    </main>
  )
}

