'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

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
  const { t } = useLanguage();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFlipWarning, setShowFlipWarning] = useState(false);
  const [lastFlipTime, setLastFlipTime] = useState<number | null>(null);
  const [userExplanation, setUserExplanation] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Array of flashcard keys
  const flashcardKeys = ['collagen', 'fibroblasts'];

  const handleFlipCard = () => {
    const now = Date.now();
    if (lastFlipTime && now - lastFlipTime < 3000) {
      setShowFlipWarning(true);
      setTimeout(() => setShowFlipWarning(false), 3000);
      return;
    }
    setLastFlipTime(now);
    setIsFlipped(!isFlipped);
  };

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
            {t('backToOverview')}
          </Link>
          <h1 className="text-4xl font-bold mt-4">{t('topics.Bindweefselherstel')}</h1>
        </div>
      </div>

      {/* Level Selection */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8">
          {[
            { level: 1, title: t('sections.info') },
            { level: 2, title: t('sections.practice') },
            { level: 3, title: t('sections.test') },
            { level: 4, title: t('sections.cases') },
            { level: 5, title: t('sections.aiHelp') }
          ].map((item) => (
            <button
              key={item.level}
              onClick={() => setCurrentLevel(item.level)}
              className={`px-6 py-3 rounded-full ${
                currentLevel === item.level
                  ? 'bg-[#e6007e] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Level Content */}
        {currentLevel === 1 && (
          <div className="max-w-none">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">{t('content.basicKnowledge')}</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">{t('content.introduction')}</h3>
                <p className="mb-4">{t('content.introText1')}</p>
                <p className="mb-4">{t('content.introText2')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">{t('content.phases')}</h3>
                <ol className="list-decimal list-inside space-y-4">
                  <li className="font-semibold">{t('contentSections.phases.inflammatory.title')}
                    <div className="font-normal ml-6 mt-2 space-y-2">
                      <p className="mb-2">{t('contentSections.phases.inflammatory.description')}</p>
                      <ul className="list-disc ml-4 space-y-1">
                        {t('contentSections.phases.inflammatory.points', { returnObjects: true }).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        {t('contentSections.phases.inflammatory.clinical')}
                      </p>
                    </div>
                  </li>
                  <li className="font-semibold">{t('contentSections.phases.proliferative.title')}
                    <div className="font-normal ml-6 mt-2 space-y-2">
                      <p className="mb-2">{t('contentSections.phases.proliferative.description')}</p>
                      <ul className="list-disc ml-4 space-y-1">
                        {t('contentSections.phases.proliferative.points', { returnObjects: true }).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        {t('contentSections.phases.proliferative.clinical')}
                      </p>
                    </div>
                  </li>
                  <li className="font-semibold">{t('contentSections.phases.remodeling.title')}
                    <div className="font-normal ml-6 mt-2 space-y-2">
                      <p className="mb-2">{t('contentSections.phases.remodeling.description')}</p>
                      <ul className="list-disc ml-4 space-y-1">
                        {t('contentSections.phases.remodeling.points', { returnObjects: true }).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        {t('contentSections.phases.remodeling.clinical')}
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">{t('contentSections.mechanotransduction.title')}</h3>
                <p className="mb-4">{t('contentSections.mechanotransduction.description')}</p>
                <ul className="list-disc ml-6 space-y-2">
                  {t('contentSections.mechanotransduction.points', { returnObjects: true }).map((point, index) => (
                    <li key={index}>
                      <span className="font-semibold">{point.title}:</span> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">{t('contentSections.clinicalImplications.title')}</h3>
                <div className="space-y-4">
                  <p className="mb-4">{t('contentSections.clinicalImplications.description')}</p>
                  <ul className="list-disc ml-6 space-y-2">
                    {t('contentSections.clinicalImplications.phases', { returnObjects: true }).map((phase, index) => (
                      <li key={index}>
                        <span className="font-semibold">{phase.title}:</span> {phase.description}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">{t('contentSections.clinicalImplications.note')}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">{t('contentSections.recommendedSources.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{t('contentSections.recommendedSources.inflammatoryPhase.title')}:</h4>
                    <a href="https://youtu.be/8-x9RKv-bXY?si=TF6L_geJ2XTAgqkA" 
                       className="text-blue-600 hover:underline block ml-4" 
                       target="_blank"
                       rel="noopener noreferrer">
                      🎥 {t('contentSections.recommendedSources.inflammatoryPhase.link')}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('contentSections.recommendedSources.proliferativePhase.title')}:</h4>
                    <a href="https://youtu.be/fWecGdjEuxc?si=ZZUv_s27BvbElx-S" 
                       className="text-blue-600 hover:underline block ml-4" 
                       target="_blank"
                       rel="noopener noreferrer">
                      🎥 {t('contentSections.recommendedSources.proliferativePhase.link')}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('contentSections.recommendedSources.remodelingPhase.title')}:</h4>
                    <a href="https://youtu.be/I9jeffyqexg?si=XPv58Jf_ahD5YzC-" 
                       className="text-blue-600 hover:underline block ml-4" 
                       target="_blank"
                       rel="noopener noreferrer">
                      🎥 {t('contentSections.recommendedSources.remodelingPhase.link')}
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
            <h2 className="text-2xl font-bold mb-8">{t('flashcards.title')}</h2>
            
            {/* Warning message */}
            {showFlipWarning && (
              <div className="mb-4 bg-amber-100 border border-amber-200 text-amber-800 px-4 py-2 rounded-lg">
                {t('flashcards.warningMessage')}
                <br />
                {t('flashcards.learningTip')}
              </div>
            )}

            <div
              className="relative w-full h-64 perspective-1000"
              onClick={handleFlipCard}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <div className="bg-gray-50 rounded-lg p-8 h-full flex items-center justify-center text-center shadow-md">
                    <p className="text-xl font-medium text-gray-800">
                      {t(`flashcards.cards.${flashcardKeys[currentCard]}.front`)}
                    </p>
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="bg-[#e6007e] text-white rounded-lg p-8 h-full flex items-center justify-center text-center shadow-md">
                    <p className="text-xl">
                      {t(`flashcards.cards.${flashcardKeys[currentCard]}.back`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentCard((prev) => (prev === 0 ? flashcardKeys.length - 1 : prev - 1));
                  setIsFlipped(false);
                  setLastFlipTime(null);
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
              >
                {t('previous')}
              </button>
              <span className="text-gray-600 font-medium">
                {currentCard + 1} / {flashcardKeys.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentCard((prev) => (prev === flashcardKeys.length - 1 ? 0 : prev + 1));
                  setIsFlipped(false);
                  setLastFlipTime(null);
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
              >
                {t('next')}
              </button>
            </div>
          </div>
        )}

        {/* Level 3 - Explanation Exercise */}
        {currentLevel === 3 && (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">{t('questions.title')}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {t('questions.title')}:
                </h3>
                <div className="p-4 border border-gray-200 rounded-lg bg-white">
                  <p className="font-semibold text-gray-900">
                    {t('questions.list', { returnObjects: true })[currentQuestion].title}
                  </p>
                  <p className="text-base mt-2 text-gray-700">
                    {t('questions.list', { returnObjects: true })[currentQuestion].description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <textarea
                  className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-[#e6007e] focus:border-transparent resize-none bg-white text-gray-900 text-lg"
                  placeholder={t('questions.answerPlaceholder')}
                  value={userExplanation}
                  onChange={(e) => setUserExplanation(e.target.value)}
                />
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      setCurrentQuestion((prev) => (prev === 0 ? t('questions.list', { returnObjects: true }).length - 1 : prev - 1));
                      setUserExplanation('');
                      setFeedback('');
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    {t('previous')}
                  </button>
                  <span className="text-gray-500">
                    {currentQuestion + 1} / {t('questions.list', { returnObjects: true }).length}
                  </span>
                  <button
                    onClick={() => {
                      setCurrentQuestion((prev) => (prev === t('questions.list', { returnObjects: true }).length - 1 ? 0 : prev + 1));
                      setUserExplanation('');
                      setFeedback('');
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    {t('next')}
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
                  {isLoading ? t('checking') : t('checkAnswer')}
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
            <h2 className="text-2xl font-bold mb-8">{t('caseStudies.title')}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('caseStudies.case')} {currentCase + 1}</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700 mb-4 whitespace-normal">
                      {caseStudies[currentCase].context}
                    </p>
                    <p className="font-semibold text-gray-900 whitespace-normal">
                      {caseStudies[currentCase].question}
                    </p>
                  </div>
                </div>
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
                        <span className="ml-3 text-lg text-gray-700 whitespace-normal">{option}</span>
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
                  {showExplanation ? t('answerChecked') : t('checkAnswer')}
                </button>

                {showExplanation && (
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3">{t('caseStudies.explanation')}</h4>
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
            <h2 className="text-2xl font-bold mb-8">{t('aiHelp.title')}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t('aiHelp.chooseAssistant')}</h3>
                <p className="text-gray-700 mb-6">
                  {t('aiHelp.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* ChatGPT Link */}
                <a 
                  href={`https://chat.openai.com/?q=${encodeURIComponent(
                    "Ik ben student fysiotherapie en wil graag meer leren over bindweefselherstel. Jij bent een ervaren docent fysiotherapie met expertise in weefselherstel en regeneratie.\n\n" +
                    "Begeleid me alsjeblieft op een Socratische manier door:\n" +
                    "1. Vragen te stellen die me uitdagen dieper na te denken\n" +
                    "2. Me zelf verbanden te laten leggen tussen concepten\n" +
                    "3. Alleen hints te geven als ik vastloop\n" +
                    "4. Door te vragen bij oppervlakkige antwoorden\n" +
                    "5. Me uit te dagen met praktijkvoorbeelden\n\n" +
                    "Na elke 10-15 minuten gesprek:\n" +
                    "- Vat samen wat we besproken hebben\n" +
                    "- Test mijn begrip met 2-3 multiple choice vragen\n" +
                    "- Stel een open vraag die verschillende concepten verbindt\n\n" +
                    "Begin met een open vraag over wat ik al weet van bindweefselherstel."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-[#74AA9C] text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold mb-2">ChatGPT</h4>
                  <p className="mb-4">Direct starten met vooraf ingestelde prompt</p>
                  <div className="text-sm opacity-75">
                    Klik om ChatGPT te openen met een gespecialiseerde prompt voor bindweefselherstel
                  </div>
                </a>

                {/* Claude Link */}
                <div className="block p-6 bg-[#6B4F9E] text-white rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Claude</h4>
                  <p className="mb-4">Kopieer de prompt en start Claude</p>
                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "Ik ben student fysiotherapie en wil graag meer leren over bindweefselherstel. Jij bent een ervaren docent fysiotherapie met expertise in weefselherstel en regeneratie.\n\n" +
                          "Begeleid me alsjeblieft op een Socratische manier door:\n" +
                          "1. Vragen te stellen die me uitdagen dieper na te denken\n" +
                          "2. Me zelf verbanden te laten leggen tussen concepten\n" +
                          "3. Alleen hints te geven als ik vastloop\n" +
                          "4. Door te vragen bij oppervlakkige antwoorden\n" +
                          "5. Me uit te dagen met praktijkvoorbeelden\n\n" +
                          "Na elke 10-15 minuten gesprek:\n" +
                          "- Vat samen wat we besproken hebben\n" +
                          "- Test mijn begrip met 2-3 multiple choice vragen\n" +
                          "- Stel een open vraag die verschillende concepten verbindt\n\n" +
                          "Begin met een open vraag over wat ik al weet van bindweefselherstel."
                        );
                        alert('Prompt gekopieerd! Plak deze in Claude na het openen van de link.');
                      }}
                      className="flex items-center justify-center space-x-2 bg-white text-[#6B4F9E] px-4 py-2 rounded hover:bg-opacity-90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      <span>Kopieer Prompt</span>
                    </button>
                    <a 
                      href="https://claude.ai/chats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-white/20 px-4 py-2 rounded hover:bg-white/30"
                    >
                      <span>Open Claude</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Gemini Link */}
                <div className="block p-6 bg-[#1A73E8] text-white rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Gemini</h4>
                  <p className="mb-4">Kopieer de prompt en start Gemini</p>
                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "Ik ben student fysiotherapie en wil graag meer leren over bindweefselherstel. Jij bent een ervaren docent fysiotherapie met expertise in weefselherstel en regeneratie.\n\n" +
                          "Begeleid me alsjeblieft op een Socratische manier door:\n" +
                          "1. Vragen te stellen die me uitdagen dieper na te denken\n" +
                          "2. Me zelf verbanden te laten leggen tussen concepten\n" +
                          "3. Alleen hints te geven als ik vastloop\n" +
                          "4. Door te vragen bij oppervlakkige antwoorden\n" +
                          "5. Me uit te dagen met praktijkvoorbeelden\n\n" +
                          "Na elke 10-15 minuten gesprek:\n" +
                          "- Vat samen wat we besproken hebben\n" +
                          "- Test mijn begrip met 2-3 multiple choice vragen\n" +
                          "- Stel een open vraag die verschillende concepten verbindt\n\n" +
                          "Begin met een open vraag over wat ik al weet van bindweefselherstel."
                        );
                        alert('Prompt gekopieerd! Plak deze in Gemini na het openen van de link.');
                      }}
                      className="flex items-center justify-center space-x-2 bg-white text-[#1A73E8] px-4 py-2 rounded hover:bg-opacity-90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      <span>Kopieer Prompt</span>
                    </button>
                    <a 
                      href="https://gemini.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-white/20 px-4 py-2 rounded hover:bg-white/30"
                    >
                      <span>Open Gemini</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Instructies voor Claude en Gemini:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Klik op de "Kopieer Prompt" knop om de gespecialiseerde prompt te kopiëren</li>
                  <li>Klik op de "Open" knop om de chatbot in een nieuw tabblad te openen</li>
                  <li>Plak de gekopieerde prompt in het chatvenster</li>
                  <li>Start je leergesprek met de AI-docent</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 