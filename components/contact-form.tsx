"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(event.currentTarget)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const result = await submitContactForm(data)
      if (result.success) {
        setSuccess(true)
        setError("") // Ensure error is cleared on success
        event.currentTarget.reset()
      } else {
        setSuccess(false)
        setError(result.error || t("contact_error"))
      }
    } catch (err) {
      setSuccess(false)
      setError(t("contact_error"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          name="firstName"
          placeholder={t("first_name")}
          required
          disabled={isLoading}
          className="bg-white"
        />
        <Input
          type="text"
          name="lastName"
          placeholder={t("last_name")}
          required
          disabled={isLoading}
          className="bg-white"
        />
      </div>
      <Input type="tel" name="phone" placeholder={t("phone")} required disabled={isLoading} className="bg-white" />
      <Input type="email" name="email" placeholder={t("email")} required disabled={isLoading} className="bg-white" />
      <Textarea
        name="message"
        placeholder={t("message")}
        required
        disabled={isLoading}
        className="min-h-[120px] bg-white"
      />
      <div className="flex flex-col items-center gap-4">
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto px-8 bg-orange-500 hover:bg-orange-600 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("sending")}
            </>
          ) : (
            t("send")
          )}
        </Button>
        {error && !success && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{t("contact_success")}</p>}
      </div>
    </form>
  )
}

