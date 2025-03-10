"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Package, MapPin, Calendar, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface TrackingResult {
  Номер?: string
  Статус?: string
  Местоположение?: string
  ДатаСоздания?: string
  ДатаОбновления?: string
  Получатель?: string
  Отправитель?: string
  [key: string]: any
}

export default function TrackStandalone() {
  const { t } = useLanguage()
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<TrackingResult | null>(null)
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

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Н/Д"
    try {
      const date = new Date(dateString)
      return date.toLocaleString("ru-RU")
    } catch (e) {
      return dateString
    }
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>{t("track_package")}</CardTitle>
        <CardDescription>{t("track_section_description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <div className="mt-6 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-blue-700 font-medium">
                <Package className="h-5 w-5" />
                <span>
                  {t("package")} #{result.Номер || trackingNumber}
                </span>
              </div>
            </div>

            <div className="grid gap-4">
              {result.Статус && (
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("status")}</p>
                    <p className="font-medium">{result.Статус}</p>
                  </div>
                </div>
              )}

              {result.Местоположение && (
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("location")}</p>
                    <p className="font-medium">{result.Местоположение}</p>
                  </div>
                </div>
              )}

              {result.ДатаОбновления && (
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("last_update")}</p>
                    <p className="font-medium">{formatDate(result.ДатаОбновления)}</p>
                  </div>
                </div>
              )}

              {(result.Отправитель || result.Получатель) && (
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    {result.Отправитель && (
                      <div className="mb-1">
                        <p className="text-sm text-gray-500">{t("sender")}</p>
                        <p className="font-medium">{result.Отправитель}</p>
                      </div>
                    )}
                    {result.Получатель && (
                      <div>
                        <p className="text-sm text-gray-500">{t("recipient")}</p>
                        <p className="font-medium">{result.Получатель}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-sm text-gray-500 text-center">{t("support_info")}</p>
      </CardFooter>
    </Card>
  )
}

