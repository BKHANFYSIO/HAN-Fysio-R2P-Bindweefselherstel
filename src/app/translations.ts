export type Language = 'NL' | 'EN' | 'DE';

export const translations = {
  NL: {
    // Navigation
    home: 'Home',
    about: 'Over Ons',
    contact: 'Contact',
    
    // Homepage
    homepage: {
      title: 'Return-2-Performance',
      subtitle: 'Verdiep je kennis in het herstelproces van bindweefsel en de factoren die hierbij een rol spelen',
      moduleInfo: 'Een module van HAN Fysiotherapie',
      topicsTitle: 'Beschikbare Onderwerpen',
      comingSoon: 'Binnenkort beschikbaar'
    },

    // Common
    backToOverview: '← Terug naar overzicht',
    next: 'Volgende →',
    previous: '← Vorige',
    checkAnswer: 'Controleer Antwoord',
    checking: 'Bezig met controleren...',
    answerChecked: 'Antwoord gecontroleerd',
    
    // Levels
    levels: {
      info: 'Informatie & Bronnen',
      practice: 'Begrippen Oefenen',
      test: 'Inzicht Toetsen',
      cases: 'Praktijkcasussen',
      aiHelp: 'AI Leerhulp'
    },

    // Flashcards
    flashcards: {
      waitMessage: 'Wacht nog {seconds} seconden voordat je de kaart omdraait...',
      warningMessage: 'Probeer eerst zelf het antwoord te herinneren! Dit helpt je om de informatie beter te onthouden.',
      learningTip: 'Het aanleggen van nieuwe verbindingen in je geheugen kost wat meer moeite, maar leidt tot beter en langduriger leren.'
    },

    // Case Studies
    caseStudies: {
      title: 'Praktijkcasus',
      case: 'Casus',
      explanation: 'Uitleg:',
      selectAnswer: 'Selecteer eerst een antwoord'
    },

    // AI Help
    aiHelp: {
      title: 'AI Leerhulp',
      chooseAssistant: 'Kies je AI Assistent',
      description: 'Kies een van de onderstaande AI assistenten om meer te leren over bindweefselherstel. De assistenten zullen je helpen door middel van de Socratische methode - ze stellen vragen die je helpen zelf tot inzichten te komen.',
      startChatGPT: 'Start een gesprek met ChatGPT over bindweefselherstel',
      startClaude: 'Start een gesprek met Claude over bindweefselherstel',
      presetPrompt: 'Vooraf ingestelde prompt voor optimaal leereffect',
      suggestedTopics: 'Voorgestelde Gespreksstarters:'
    }
  },
  EN: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    
    // Homepage
    homepage: {
      title: 'Return-2-Performance',
      subtitle: 'Deepen your knowledge of connective tissue repair and the factors involved',
      moduleInfo: 'A module by HAN Physiotherapy',
      topicsTitle: 'Available Topics',
      comingSoon: 'Coming Soon'
    },

    // Common
    backToOverview: '← Back to overview',
    next: 'Next →',
    previous: '← Previous',
    checkAnswer: 'Check Answer',
    checking: 'Checking...',
    answerChecked: 'Answer checked',
    
    // Levels
    levels: {
      info: 'Information & Sources',
      practice: 'Practice Concepts',
      test: 'Test Understanding',
      cases: 'Case Studies',
      aiHelp: 'AI Help'
    },

    // Flashcards
    flashcards: {
      waitMessage: 'Wait {seconds} seconds before flipping the card...',
      warningMessage: 'Try to remember the answer yourself first! This helps you to retain the information better.',
      learningTip: 'Creating new connections in your memory takes more effort, but leads to better and longer-lasting learning.'
    },

    // Case Studies
    caseStudies: {
      title: 'Case Study',
      case: 'Case',
      explanation: 'Explanation:',
      selectAnswer: 'Please select an answer first'
    },

    // AI Help
    aiHelp: {
      title: 'AI Learning Assistant',
      chooseAssistant: 'Choose your AI Assistant',
      description: 'Choose one of the AI assistants below to learn more about connective tissue repair. The assistants will help you through the Socratic method - asking questions that help you reach insights yourself.',
      startChatGPT: 'Start a conversation with ChatGPT about connective tissue repair',
      startClaude: 'Start a conversation with Claude about connective tissue repair',
      presetPrompt: 'Preset prompt for optimal learning effect',
      suggestedTopics: 'Suggested Conversation Starters:'
    }
  },
  DE: {
    // Navigation
    home: 'Startseite',
    about: 'Über Uns',
    contact: 'Kontakt',
    
    // Homepage
    homepage: {
      title: 'Return-2-Performance',
      subtitle: 'Vertiefen Sie Ihr Wissen über Bindegewebsheilung und die beteiligten Faktoren',
      moduleInfo: 'Ein Modul der HAN Physiotherapie',
      topicsTitle: 'Verfügbare Themen',
      comingSoon: 'Demnächst verfügbar'
    },

    // Common
    backToOverview: '← Zurück zur Übersicht',
    next: 'Weiter →',
    previous: '← Zurück',
    checkAnswer: 'Antwort überprüfen',
    checking: 'Überprüfung läuft...',
    answerChecked: 'Antwort überprüft',
    
    // Levels
    levels: {
      info: 'Informationen & Quellen',
      practice: 'Konzepte üben',
      test: 'Verständnis testen',
      cases: 'Fallstudien',
      aiHelp: 'KI-Hilfe'
    },

    // Flashcards
    flashcards: {
      waitMessage: 'Warte noch {seconds} Sekunden, bevor du die Karte umdrehst...',
      warningMessage: 'Versuche zuerst selbst, dich an die Antwort zu erinnern! Das hilft dir, die Information besser zu behalten.',
      learningTip: 'Neue Verbindungen im Gedächtnis aufzubauen kostet mehr Mühe, führt aber zu besserem und längerem Lernen.'
    },

    // Case Studies
    caseStudies: {
      title: 'Fallstudie',
      case: 'Fall',
      explanation: 'Erklärung:',
      selectAnswer: 'Bitte wähle zuerst eine Antwort aus'
    },

    // AI Help
    aiHelp: {
      title: 'KI-Lernhilfe',
      chooseAssistant: 'Wähle deinen KI-Assistenten',
      description: 'Wähle einen der untenstehenden KI-Assistenten, um mehr über Bindegewebsheilung zu lernen. Die Assistenten helfen dir durch die sokratische Methode - sie stellen Fragen, die dir helfen, selbst zu Erkenntnissen zu kommen.',
      startChatGPT: 'Starte ein Gespräch mit ChatGPT über Bindegewebsheilung',
      startClaude: 'Starte ein Gespräch mit Claude über Bindegewebsheilung',
      presetPrompt: 'Voreingestellter Prompt für optimalen Lerneffekt',
      suggestedTopics: 'Vorgeschlagene Gesprächsthemen:'
    }
  }
}; 