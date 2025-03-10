import { type NextRequest, NextResponse } from "next/server"

const API_BASE_URL = "cn23.uz:8855"
const API_PATH = "/cn23rofogroup/hs/InvoicesInformation"
const API_USERNAME = "Интегратор"
const API_PASSWORD = "ddx3355@"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const trackNumber = searchParams.get("trackNumber")

  if (!trackNumber) {
    return NextResponse.json({ error: "Tracking number is required" }, { status: 400 })
  }

  try {
    // Create Basic Auth header
    const authHeader = "Basic " + Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString("base64")

    const response = await fetch(`http://${API_BASE_URL}${API_PATH}/${trackNumber}`, {
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching tracking data:", error)
    return NextResponse.json({ error: "Failed to fetch tracking information" }, { status: 500 })
  }
}

