import Link from "next/link";

export default function Home() {
  const learningTopics = [
    {
      title: "Bindweefselherstel",
      description: "Leer over het herstelproces van bindweefsel en de factoren die hierbij een rol spelen.",
      icon: "🔬"
    },
    {
      title: "Trainingsleer Principes",
      description: "Ontdek de fundamentele principes van effectieve training en periodisering.",
      icon: "💪"
    },
    {
      title: "Anatomie & Fysiologie",
      description: "Verdiep je in de structuur en werking van het menselijk lichaam.",
      icon: "🫀"
    },
    {
      title: "Biomechanica",
      description: "Begrijp de mechanische principes van menselijke beweging.",
      icon: "⚡"
    },
    {
      title: "Sportvoeding",
      description: "Leer over optimale voeding voor sportprestaties en herstel.",
      icon: "🥗"
    },
    {
      title: "Blessurepreventie",
      description: "Ontdek strategieën om sportblessures te voorkomen.",
      icon: "🏥"
    },
    {
      title: "Motorisch Leren",
      description: "Begrijp hoe bewegingsvaardigheden worden aangeleerd en verbeterd.",
      icon: "🧠"
    },
    {
      title: "Sportpsychologie",
      description: "Verken de mentale aspecten van sport en prestatie.",
      icon: "🎯"
    },
    {
      title: "Revalidatie Technieken",
      description: "Leer over moderne methoden van sportrevalidatie.",
      icon: "⚕️"
    },
    {
      title: "Krachttraining",
      description: "Ontdek principes en technieken van effectieve krachttraining.",
      icon: "🏋️"
    },
    {
      title: "Conditietraining",
      description: "Leer over verschillende methoden van conditieverbetering.",
      icon: "🏃"
    },
    {
      title: "Sportmassage",
      description: "Verdiep je in technieken en effecten van sportmassage.",
      icon: "✋"
    },
    {
      title: "Bewegingsanalyse",
      description: "Leer bewegingspatronen analyseren en optimaliseren.",
      icon: "📊"
    },
    {
      title: "Sporttaping",
      description: "Ontdek verschillende tape-technieken voor sport en herstel.",
      icon: "🎯"
    },
    {
      title: "Sportspecifieke Training",
      description: "Leer over trainingsmethoden voor verschillende sporten.",
      icon: "🎾"
    },
    {
      title: "Voedingssupplementen",
      description: "Begrijp de rol en werking van verschillende supplementen.",
      icon: "💊"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#e6007e] to-[#cc0066] text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ontdek & Leer
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Verdiep je kennis in sport, gezondheid en beweging met onze interactieve leermodules
          </p>
          <button className="bg-white text-[#e6007e] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Start je leerreis
          </button>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Beschikbare Onderwerpen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTopics.map((topic, index) => (
            <Link href={`/topics/${topic.title.toLowerCase().replace(/ /g, '-')}`} key={index}>
              <div className="group bg-white border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#e6007e] group-hover:text-[#cc0066]">
                  {topic.title}
                </h3>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
