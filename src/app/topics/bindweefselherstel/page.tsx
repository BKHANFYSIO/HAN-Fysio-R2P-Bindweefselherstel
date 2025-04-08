'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FlashCard {
  front: string;
  back: string;
}

interface Question {
  title: string;
  description: string;
}

interface CaseStudy {
  question: string;
  context: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const flashcards: FlashCard[] = [
  {
    front: "Wat is collageen?",
    back: "Een structureel eiwit dat de belangrijkste component is van bindweefsel en zorgt voor sterkte en elasticiteit"
  },
  {
    front: "Fibroblasten",
    back: "Cellen die verantwoordelijk zijn voor de productie van collageen en andere extracellulaire matrix componenten"
  },
  {
    front: "Cellen die collageen produceren en essentieel zijn voor wondgenezing",
    back: "Fibroblasten"
  },
  {
    front: "Inflammatiefase",
    back: "De eerste fase van wondgenezing, gekenmerkt door ontstekingsreactie en opruiming van beschadigd weefsel"
  },
  {
    front: "Welke fase wordt gekenmerkt door verhoogde doorbloeding, warmte en zwelling?",
    back: "Inflammatiefase"
  },
  {
    front: "Proliferatiefase",
    back: "Fase waarin nieuwe cellen worden gevormd en collageen wordt geproduceerd om het weefsel te herstellen"
  },
  {
    front: "In welke fase vindt de aanmaak van nieuw collageen voornamelijk plaats?",
    back: "Proliferatiefase"
  },
  {
    front: "Remodelleringsfase",
    back: "Laatste fase van weefselherstel waarin het litteken wordt versterkt en geherorganiseerd"
  },
  {
    front: "Mechanotransductie",
    back: "Het proces waarbij mechanische belasting wordt omgezet in cellulaire responsen"
  },
  {
    front: "Het proces waarbij mechanische krachten worden omgezet in biologische signalen",
    back: "Mechanotransductie"
  },
  {
    front: "Proteoglycanen",
    back: "Moleculen die water vasthouden in de extracellulaire matrix en bijdragen aan de veerkracht van weefsel"
  },
  {
    front: "Matrix Metalloproteinases (MMPs)",
    back: "Enzymen die betrokken zijn bij de afbraak en hermodellering van de extracellulaire matrix"
  },
  {
    front: "Welke enzymen zijn cruciaal voor de hermodellering van bindweefsel?",
    back: "Matrix Metalloproteinases (MMPs)"
  },
  {
    front: "Crosslinks",
    back: "Verbindingen tussen collageenvezels die zorgen voor extra stevigheid van het weefsel"
  },
  {
    front: "Wat zorgt voor de verbinding tussen collageenvezels?",
    back: "Crosslinks"
  },
  {
    front: "Tensile strength",
    back: "De maximale spanning die weefsel kan verdragen voordat het scheurt"
  },
  {
    front: "PRICE principe",
    back: "Protection, Rest, Ice, Compression, Elevation - basisprincipes voor acute blessurebehandeling"
  },
  {
    front: "Wat staat voor Protection, Rest, Ice, Compression, Elevation?",
    back: "PRICE principe"
  },
  {
    front: "Mechanische belasting die nodig is voor optimaal weefselherstel",
    back: "Optimale belasting"
  },
  {
    front: "Optimale belasting",
    back: "De juiste hoeveelheid mechanische stress die weefsel nodig heeft om te herstellen en sterker te worden"
  }
];

const questions: Question[] = [
  {
    title: "1. Mechanotransductie en Bindweefselherstel",
    description: "Beschrijf het mechanisme en de relevantie voor de fysiotherapeutische praktijk. Ga in op het concept, de rol in herstel, praktische toepassing en de relatie met belasting."
  },
  {
    title: "2. Inflammatoire Fase",
    description: "Beschrijf de cellulaire processen tijdens de inflammatoire fase en leg uit waarom deze fase essentieel is voor optimaal weefselherstel."
  },
  {
    title: "3. Collageen Type I vs Type III",
    description: "Vergelijk de eigenschappen en functies van collageen type I en III. Leg uit waarom de omzetting van type III naar type I belangrijk is tijdens het herstelproces."
  },
  {
    title: "4. Belasting en Adaptatie",
    description: "Leg uit hoe progressieve belasting het bindweefsel beïnvloedt en beschrijf de principes van weefseladaptatie in relatie tot training."
  },
  {
    title: "5. Matrix Metalloproteinases (MMPs)",
    description: "Beschrijf de rol van MMPs in bindweefselherstel en leg uit hoe deze enzymen bijdragen aan weefselremodellering."
  },
  {
    title: "6. Crosslinks en Weefselsterkte",
    description: "Verklaar het belang van crosslinks in bindweefsel en beschrijf hoe deze verbindingen de mechanische eigenschappen van het weefsel beïnvloeden."
  },
  {
    title: "7. Fibroblasten en Mechanosensitiviteit",
    description: "Leg uit hoe fibroblasten mechanische prikkels waarnemen en hierop reageren. Beschrijf de implicaties voor behandeling."
  },
  {
    title: "8. Angiogenese in Weefselherstel",
    description: "Beschrijf het proces van angiogenese tijdens weefselherstel en leg uit waarom goede doorbloeding essentieel is voor optimaal herstel."
  },
  {
    title: "9. Proteoglycanen en Weefselhydratatie",
    description: "Leg uit welke rol proteoglycanen spelen in bindweefsel en hoe ze bijdragen aan de mechanische eigenschappen van het weefsel."
  },
  {
    title: "10. Optimale Belasting vs. Overbelasting",
    description: "Beschrijf het verschil tussen optimale belasting en overbelasting op cellulair niveau en leg uit hoe dit zich vertaalt naar de klinische praktijk."
  }
];

const caseStudies: CaseStudy[] = [
  {
    question: "In welke fase van bindweefselherstel bevindt deze cliënt zich waarschijnlijk?",
    context: "Een 35-jarige recreatieve hardloper komt bij je met een achillespeesklacht die 3 weken geleden is ontstaan. Er is geen acute aanleiding, maar de klachten zijn geleidelijk ontstaan na het opvoeren van de trainingsintensiteit.",
    options: ["Inflammatiefase", "Proliferatiefase", "Remodelleringsfase"],
    correctAnswer: 1,
    explanation: "Deze casus bevindt zich in de proliferatiefase omdat:\n- De klachten zijn 3 weken oud, wat past binnen de proliferatiefase (5-21 dagen)\n- Er is geen acute aanleiding, wat duidt op een overbelastingsblessure\n- De geleidelijke ontstaan past bij een verstoorde balans tussen belasting en belastbaarheid\n- In deze fase is de vorming van nieuw collageen door fibroblasten essentieel"
  },
  {
    question: "Welke behandelstrategie is het meest geschikt voor deze patiënt?",
    context: "Een 42-jarige tennisser heeft sinds 2 dagen last van een acute pijn in de kuit na een snelle beweging naar voren. Er is sprake van zwelling, warmte en bewegingsbeperking.",
    options: ["Direct starten met excentrische oefeningen", "PRICE-protocol toepassen", "Maximaal belasten binnen de pijngrens"],
    correctAnswer: 1,
    explanation: "Het PRICE-protocol is hier het meest geschikt omdat:\n- De blessure is in de acute fase (0-5 dagen)\n- Er zijn duidelijke ontstekingsverschijnselen (zwelling, warmte)\n- Bescherming en ontstekingsmodulatie zijn nu prioriteit\n- Te vroege belasting kan het herstelproces verstoren"
  },
  // ... more case studies ...
];

export default function BindweefselHerstel() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userExplanation, setUserExplanation] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkAnswer = async () => {
    if (!userExplanation.trim()) {
      alert('Vul eerst je antwoord in voordat je het controleert.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/check-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userAnswer: userExplanation }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setFeedback(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setFeedback('Er is een fout opgetreden bij het controleren van je antwoord. Probeer het later opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  const checkCaseAnswer = () => {
    if (selectedAnswer === null) {
      alert('Selecteer eerst een antwoord');
      return;
    }
    setShowExplanation(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#e6007e] text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-white hover:text-gray-200 mb-4 inline-block">
            ← Terug naar overzicht
          </Link>
          <h1 className="text-4xl font-bold mt-4">Bindweefselherstel</h1>
        </div>
      </div>

      {/* Level Selection */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => setCurrentLevel(level)}
              className={`px-6 py-3 rounded-full ${
                currentLevel === level
                  ? 'bg-[#e6007e] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Level {level}
            </button>
          ))}
        </div>

        {/* Level Content */}
        {currentLevel === 1 && (
          <div className="max-w-none">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Basiskennis Bindweefselherstel</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Introductie</h3>
                <p className="mb-4">
                  Bindweefselherstel is een complex en dynamisch proces dat essentieel is voor het herstel van blessures en de adaptatie van het lichaam aan belasting. Voor fysiotherapeuten is een goed begrip van dit proces cruciaal voor effectieve behandeling.
                </p>
                <p className="mb-4">
                  Het bindweefsel in ons lichaam bestaat voornamelijk uit collageen, elastine en proteoglycanen, geproduceerd door fibroblasten. Deze componenten zorgen samen voor de structurele integriteit en elasticiteit van weefsels zoals pezen, ligamenten en fascie.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Fasen van Bindweefselherstel</h3>
                <ol className="list-decimal list-inside space-y-4">
                  <li className="font-semibold">Inflammatiefase (0-5 dagen)
                    <div className="font-normal ml-6 mt-2 space-y-2">
                      <p className="mb-2">De acute ontstekingsreactie waarbij het beschadigde weefsel wordt opgeruimd en ontstekingscellen worden aangetrokken.</p>
                      <ul className="list-disc ml-4 space-y-1">
                        <li>Verhoogde doorbloeding en vaatpermeabiliteit</li>
                        <li>Infiltratie van ontstekingscellen (neutrofielen, macrofagen)</li>
                        <li>Opruiming van beschadigd weefsel</li>
                        <li>Vrijkomen van groeifactoren en cytokinen</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        Klinische kenmerken: roodheid, warmte, zwelling, pijn en functiebeperking
                      </p>
                    </div>
                  </li>
                  <li className="font-semibold">Proliferatiefase (5-21 dagen)
                    <div className="font-normal ml-6 mt-2 space-y-2">
                      <p className="mb-2">Vorming van nieuw bindweefsel door fibroblasten die collageen produceren.</p>
                      <ul className="list-disc ml-4 space-y-1">
                        <li>Activatie en proliferatie van fibroblasten</li>
                        <li>Productie van collageen type III (voorlopig collageen)</li>
                        <li>Vorming van nieuwe bloedvaten (angiogenese)</li>
                        <li>Begin van matrix organisatie</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        In deze fase is gecontroleerde mechanische belasting essentieel voor optimale weefselorganisatie
                      </p>
                    </div>
                  </li>
                  <li className="font-semibold">Remodelleringsfase (21 dagen - 1 jaar)
                    <div className="font-normal ml-6 mt-2 space-y-2">
                      <p className="mb-2">Reorganisatie en versterking van het nieuwe bindweefsel onder invloed van mechanische belasting.</p>
                      <ul className="list-disc ml-4 space-y-1">
                        <li>Omzetting van collageen type III naar type I</li>
                        <li>Vorming van crosslinks tussen collageenvezels</li>
                        <li>Uitlijning van vezels in de belastingsrichting</li>
                        <li>Optimalisatie van weefselsterkte</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        Progressieve belasting is cruciaal voor optimale weefselsterkte en functionaliteit
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Mechanotransductie en Belasting</h3>
                <p className="mb-4">
                  Mechanotransductie speelt een cruciale rol bij bindweefselherstel. Dit is het proces waarbij mechanische krachten worden omgezet in cellulaire responsen:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <span className="font-semibold">Cellulaire respons:</span> Fibroblasten reageren op mechanische prikkels door aanpassing van hun metabolisme en productie van matrix componenten
                  </li>
                  <li>
                    <span className="font-semibold">Optimale belasting:</span> Te weinig belasting leidt tot atrofie, terwijl overbelasting kan resulteren in weefselschade
                  </li>
                  <li>
                    <span className="font-semibold">Progressieve opbouw:</span> Geleidelijke toename van belasting is essentieel voor optimaal herstel en adaptatie
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Klinische Implicaties</h3>
                <div className="space-y-4">
                  <p className="mb-4">
                    Voor optimaal herstel moet de behandeling worden afgestemd op de fase van weefselherstel:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="font-semibold">Acute fase:</span> Bescherming en ontstekingsmodulatie (PRICE-principe)
                    </li>
                    <li>
                      <span className="font-semibold">Subacute fase:</span> Gecontroleerde mobilisatie en progressieve belasting
                    </li>
                    <li>
                      <span className="font-semibold">Remodellering:</span> Functionele training en sport-specifieke oefeningen
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Het is essentieel om de belasting aan te passen aan de individuele patient en de specifieke eigenschappen van het aangedane weefsel.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Aanbevolen Bronnen</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">De Ontstekingsfase:</h4>
                    <a href="https://youtu.be/8-x9RKv-bXY?si=TF6L_geJ2XTAgqkA" 
                       className="text-blue-600 hover:underline block ml-4" 
                       target="_blank"
                       rel="noopener noreferrer">
                      🎥 De Inflammatoire Fase van Weefselherstel (0-5 dagen)
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">De Proliferatiefase:</h4>
                    <a href="https://youtu.be/fWecGdjEuxc?si=ZZUv_s27BvbElx-S" 
                       className="text-blue-600 hover:underline block ml-4" 
                       target="_blank"
                       rel="noopener noreferrer">
                      🎥 De Proliferatiefase: Opbouw van Nieuw Weefsel (5-21 dagen)
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">De Remodelleringsfase:</h4>
                    <a href="https://youtu.be/I9jeffyqexg?si=XPv58Jf_ahD5YzC-" 
                       className="text-blue-600 hover:underline block ml-4" 
                       target="_blank"
                       rel="noopener noreferrer">
                      🎥 De Remodelleringsfase: Versterking en Reorganisatie (21+ dagen)
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Level 2 - Flashcards */}
        {currentLevel === 2 && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-8">Flashcards</h2>
            <div className="relative h-96 perspective-1000">
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center text-center shadow-md">
                    <p className="text-xl font-medium">{flashcards[currentCard].front}</p>
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-[#e6007e] text-white rounded-lg p-6 h-full flex items-center justify-center text-center shadow-md">
                    <p className="text-xl">{flashcards[currentCard].back}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentCard((prev) => (prev === 0 ? flashcards.length - 1 : prev - 1));
                  setIsFlipped(false);
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
              >
                ← Vorige
              </button>
              <span className="self-center text-gray-500">
                {currentCard + 1} / {flashcards.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentCard((prev) => (prev === flashcards.length - 1 ? 0 : prev + 1));
                  setIsFlipped(false);
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
              >
                Volgende →
              </button>
            </div>
          </div>
        )}

        {/* Level 3 - Explanation Exercise */}
        {currentLevel === 3 && (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-8">Uitleg Oefening</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Beantwoord de volgende vraag:
                </h3>
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <p className="font-semibold">{questions[currentQuestion].title}</p>
                  <p className="text-sm mt-2 text-gray-700">
                    {questions[currentQuestion].description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <textarea
                  className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-[#e6007e] focus:border-transparent resize-none bg-white text-gray-900 text-lg"
                  placeholder="Type je uitleg hier..."
                  value={userExplanation}
                  onChange={(e) => setUserExplanation(e.target.value)}
                />
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      setCurrentQuestion((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
                      setUserExplanation('');
                      setFeedback('');
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    ← Vorige
                  </button>
                  <span className="text-gray-500">
                    {currentQuestion + 1} / {questions.length}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentQuestion((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
                      setUserExplanation('');
                      setFeedback('');
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    Volgende →
                  </button>
                </div>
                <button 
                  className={`w-full px-6 py-3 rounded-full transition-colors ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#e6007e] hover:bg-[#cc0066]'
                  } text-white mt-4`}
                  onClick={checkAnswer}
                  disabled={isLoading}
                >
                  {isLoading ? 'Bezig met controleren...' : 'Controleer Antwoord'}
                </button>

                {feedback && (
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Feedback:</h4>
                    <div className="prose prose-lg">
                      {feedback.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Level 4 - Case Studies */}
        {currentLevel === 4 && (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-8">Praktijkcasus</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Casus {currentCase + 1}</h3>
                <p className="text-gray-700 mb-6">
                  {caseStudies[currentCase].context}
                </p>
                <p className="font-semibold mb-4">
                  {caseStudies[currentCase].question}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  {caseStudies[currentCase].options.map((option, index) => (
                    <label key={index} className="block w-full">
                      <div className={`flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                        showExplanation && index === caseStudies[currentCase].correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : showExplanation && selectedAnswer === index
                          ? 'bg-red-100 border-red-500'
                          : ''
                      }`}>
                        <input 
                          type="radio" 
                          name="answer"
                          value={index}
                          checked={selectedAnswer === index}
                          onChange={() => setSelectedAnswer(index)}
                          disabled={showExplanation}
                          className="w-5 h-5 text-[#e6007e] border-gray-300 focus:ring-[#e6007e]" 
                        />
                        <span className="ml-3 text-lg text-gray-700">{option}</span>
                      </div>
                    </label>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => {
                      setCurrentCase((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
                      setSelectedAnswer(null);
                      setShowExplanation(false);
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    ← Vorige
                  </button>
                  <span className="text-gray-500">
                    {currentCase + 1} / {caseStudies.length}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentCase((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
                      setSelectedAnswer(null);
                      setShowExplanation(false);
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    Volgende →
                  </button>
                </div>
                
                <button 
                  className={`w-full px-6 py-3 rounded-full transition-colors ${
                    showExplanation 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#e6007e] hover:bg-[#cc0066]'
                  } text-white mt-4`}
                  onClick={checkCaseAnswer}
                  disabled={showExplanation}
                >
                  {showExplanation ? 'Antwoord gecontroleerd' : 'Controleer Antwoord'}
                </button>

                {showExplanation && (
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">Uitleg:</h4>
                    <div className="prose prose-lg">
                      {caseStudies[currentCase].explanation.split('\n').map((line, index) => (
                        <p key={index} className="mb-2">{line}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Level 5 - AI Chat Options */}
        {currentLevel === 5 && (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-8">AI Leerhulp</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Kies je AI Assistent</h3>
                <p className="text-gray-700 mb-6">
                  Kies een van de onderstaande AI assistenten om meer te leren over bindweefselherstel. 
                  De assistenten zullen je helpen door middel van de Socratische methode - ze stellen vragen 
                  die je helpen zelf tot inzichten te komen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://chat.openai.com/share/your-chatgpt-link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-[#74AA9C] text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold mb-2">ChatGPT</h4>
                  <p className="mb-4">Start een gesprek met ChatGPT over bindweefselherstel</p>
                  <div className="text-sm opacity-75">
                    Vooraf ingestelde prompt voor optimaal leereffect
                  </div>
                </a>

                <a 
                  href="https://claude.ai/chat" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-[#6B4F9E] text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold mb-2">Claude</h4>
                  <p className="mb-4">Start een gesprek met Claude over bindweefselherstel</p>
                  <div className="text-sm opacity-75">
                    Vooraf ingestelde prompt voor optimaal leereffect
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Voorgestelde Gespreksstarters:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>"Wat zijn de belangrijkste factoren die de snelheid van bindweefselherstel beïnvloeden?"</li>
                  <li>"Hoe kan ik bepalen of een weefsel klaar is voor progressieve belasting?"</li>
                  <li>"Wat is de rol van mechanotransductie in het herstelproces?"</li>
                  <li>"Welke signalen geven aan dat het weefsel overbelast wordt?"</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 