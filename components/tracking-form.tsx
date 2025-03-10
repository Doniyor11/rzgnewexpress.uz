"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import TrackingResult from "./tracking-result"
import { useLanguage } from "@/contexts/language-context"

interface Status {
  Name: string
  Date: string
}

interface TrackingData {
  Recipient?: string
  Sender?: string
  TrackNumber?: string
  Weight?: number
  Sum?: number
  Statuses?: Status[]
}

export default function TrackingForm() {
  const { t } = useLanguage()
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<TrackingData | null>(null)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!trackingNumber.trim()) {
      setError(t("enter_tracking_number"))
      return
    }

    setIsLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`/api/track?trackNumber=${encodeURIComponent(trackingNumber)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Ошибка при получении данных")
      }

      if (data.error) {
        setError(data.error)
      } else {
        setResult(data)
      }
    } catch (err) {
      setError(t("tracking_error"))
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <Input
          type="text"
          placeholder={t("enter_tracking_number")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("searching")}
            </>
          ) : (
            t("track")
          )}
        </Button>
      </form>

      {error && (
        <Alert variant="destructive" className="max-w-xl mx-auto">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && <TrackingResult data={result} />}

      {!result && !error && <p className="text-sm text-gray-500 text-center">{t("tracking_info")}</p>}
    </div>
  )
}

