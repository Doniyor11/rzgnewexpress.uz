"use client"

import { Package, Truck, Building2, FileCheck2, Home } from "lucide-react"
import { cn } from "@/lib/utils"
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

const statusIcons = [
  { icon: Package, label: "На упаковке" },
  { icon: Truck, label: "Посылка отправлено" },
  { icon: FileCheck2, label: "Таможенном оформлении" },
  { icon: Building2, label: "На складе" },
  { icon: Home, label: "На доставке" },
]

export default function TrackingResult({ data }: { data: TrackingData }) {
  const { t } = useLanguage()

  // Find current status index
  const currentStatusIndex = data.Statuses
    ? data.Statuses.filter((status) => status.Date && status.Date !== "").length - 1
    : -1

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Progress Indicator */}
      <div className="p-6 ">
        <div className="relative pt-5">
          {/* Semi-circular progress background */}
          <svg className="w-full h-32" viewBox="0 0 200 100">
            <path d="M20,80 A60,60 0 0,1 180,80" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" />
            {/* Active progress line */}
            <path
              d="M20,80 A60,60 0 0,1 180,80"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - 251.2 * ((currentStatusIndex + 1) / statusIcons.length)}
            />

            {/* Status Icons */}
            {statusIcons.map((status, index) => {
              const angle = (Math.PI / (statusIcons.length - 1)) * index
              const x = 100 - Math.cos(angle) * 80
              const y = 80 - Math.sin(angle) * 60
              const isActive = index <= currentStatusIndex

              return (
                <g key={index} transform={`translate(${x - 12}, ${y - 12})`}>
                  <circle cx="12" cy="12" r="16" fill={isActive ? "#4f46e5" : "#e5e7eb"} />
                  <status.icon
                    className={cn("w-6 h-6 absolute", isActive ? "text-white" : "text-gray-400")}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  />
                </g>
              )
            })}
          </svg>

          {/* Current Status Text */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm uppercase">{t("status")}:</p>
            <p className="text-lg font-semibold text-gray-900">
              {data.Statuses?.[currentStatusIndex]?.Name || t("unknown_status")}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">{t("history")}</h3>
          <div className="space-y-4">
            {data.Statuses?.map((status, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-4",
                  status.Date && status.Date !== "" ? "opacity-100" : "opacity-50",
                )}
              >
                <div
                  className={cn(
                    "w-3 h-3 rounded-full mt-1.5",
                    status.Date && status.Date !== "" ? "bg-indigo-600" : "bg-gray-300",
                  )}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{status.Name}</p>
                  {status.Date && <p className="text-sm text-gray-500">{status.Date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Details */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">{t("package_info")}</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">{t("sender")}:</span>
              <span className="font-medium">{data.Sender}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("recipient")}:</span>
              <span className="font-medium">{data.Recipient}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("tracking_number")}:</span>
              <span className="font-medium">{data.TrackNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">{t("weight")}:</span>
              <span className="font-medium">{data.Weight} кг</span>
            </div>
            {data.Sum > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">{t("amount")}:</span>
                <span className="font-medium">${data.Sum}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

