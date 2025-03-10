import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold">О компании Courier</h1>
              <p className="text-lg text-gray-600">
                Courier - это динамично развивающаяся компания, предоставляющая профессиональные услуги в сфере
                грузоперевозок, туризма и консалтинга. Мы стремимся к совершенству, предлагая надежные решения,
                ориентированные на потребности наших клиентов.
              </p>
              <p className="text-lg text-gray-600">
                Основанная в 2010 году, наша компания прошла долгий путь развития и сегодня является одним из лидеров
                логистического рынка Узбекистана.
              </p>
              <Button size="lg">Наша история</Button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="О компании Courier"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Присоединяйтесь к нашей команде</h2>
              <p className="text-blue-100 text-lg">
                Мы всегда в поиске талантливых и мотивированных специалистов, готовых внести свой вклад в развитие нашей
                компании.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Открытые вакансии
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const values = [
  {
    title: "Клиентоориентированность",
    description: "Мы ставим потребности клиентов на первое место и стремимся превзойти их ожидания.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Инновации",
    description: "Мы постоянно внедряем новые технологии и решения для повышения качества наших услуг.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Качество",
    description: "Мы гарантируем высокое качество всех предоставляемых услуг и постоянно совершенствуем наши процессы.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Надежность",
    description: "Мы всегда выполняем свои обязательства и соблюдаем сроки доставки.",
    icon: <Clock className="w-6 h-6" />,
  },
]

const team = [
  {
    name: "Алексей Иванов",
    position: "Генеральный директор",
    bio: "Более 15 лет опыта в логистике и управлении. Под его руководством компания стала одним из лидеров рынка.",
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Елена Смирнова",
    position: "Операционный директор",
    bio: "Отвечает за эффективность всех операционных процессов компании и постоянное повышение качества услуг.",
    photo: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Дмитрий Петров",
    position: "Руководитель отдела логистики",
    bio: "Эксперт в области международной логистики с опытом работы более 10 лет в крупных транспортных компаниях.",
    photo: "/placeholder.svg?height=400&width=400",
  },
]

