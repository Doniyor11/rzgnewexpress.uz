"use server"

interface ContactFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
}

const TELEGRAM_TOKEN = "7650143276:AAFOwr4R9HPJYqcw61Be7u4zmIs42Lb9F8c"
const TELEGRAM_CHAT_ID = "-1002340938586"

export async function submitContactForm(data: ContactFormData) {
  try {
    const message = `
📨 Новая заявка

👤 Имя: ${data.firstName} ${data.lastName}
📱 Телефон: ${data.phone}
📧 Email: ${data.email}

💬 Сообщение:
${data.message}
    `

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    })

    const result = await response.json()

    if (!response.ok || !result.ok) {
      console.error("Telegram API error:", result)
      throw new Error(result.description || "Failed to send message to Telegram")
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending message to Telegram:", error)
    return { success: false, error: "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз." }
  }
}

