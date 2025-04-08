export type Language = 'NL' | 'EN' | 'DE';

export const translations = {
  NL: {
    // Navigation
    home: 'Home',
    topicsNav: 'Onderwerpen',
    availableTopics: 'Beschikbare Onderwerpen',
    backToLearningPlatform: '← Keer terug naar HAN Fysiotherapie Leerplatform',

    // Topics
    topics: {
      Bindweefselherstel: 'Bindweefselherstel',
      BindweefselherstelDescription: 'Leer over het herstelproces van bindweefsel en de factoren die hierbij een rol spelen.',
      'Trainingsleer Principes': 'Trainingsleer Principes',
      'Trainingsleer PrincipesDescription': 'Ontdek de fundamentele principes van effectieve training en periodisering.',
      'Anatomie & Fysiologie': 'Anatomie & Fysiologie',
      'Anatomie & FysiologieDescription': 'Verdiep je in de structuur en werking van het menselijk lichaam.',
      Biomechanica: 'Biomechanica',
      BiomechanicaDescription: 'Begrijp de mechanische principes van menselijke beweging.',
    },
    
    // Content Pages
    content: {
      basicKnowledge: 'Basiskennis Bindweefselherstel',
      introduction: 'Introductie',
      introText1: 'Bindweefselherstel is een complex en dynamisch proces dat essentieel is voor het herstel van blessures en de adaptatie van het lichaam aan belasting. Voor fysiotherapeuten is een goed begrip van dit proces cruciaal voor effectieve behandeling.',
      introText2: 'Het bindweefsel in ons lichaam bestaat voornamelijk uit collageen, elastine en proteoglycanen, geproduceerd door fibroblasten. Deze componenten zorgen samen voor de structurele integriteit en elasticiteit van weefsels zoals pezen, ligamenten en fascie.',
      phases: 'Fasen van Bindweefselherstel',
    },

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
      title: 'Begrippen Oefenen',
      waitMessage: 'Wacht nog {seconds} seconden voordat je de kaart omdraait...',
      warningMessage: 'Probeer eerst zelf het antwoord te herinneren! Dit helpt je om de informatie beter te onthouden.',
      learningTip: 'Het aanleggen van nieuwe verbindingen in je geheugen kost wat meer moeite, maar leidt tot beter en langduriger leren.',
      cards: {
        collagen: {
          front: 'Wat is collageen?',
          back: 'Een structureel eiwit dat de belangrijkste component is van bindweefsel en zorgt voor sterkte en elasticiteit'
        },
        fibroblasts: {
          front: 'Fibroblasten',
          back: 'Cellen die verantwoordelijk zijn voor de productie van collageen en andere extracellulaire matrix componenten'
        },
        // Add all other flashcard translations here
      }
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
    },

    // Sections
    sections: {
      info: 'Informatie & Bronnen',
      practice: 'Begrippen Oefenen',
      test: 'Inzicht Toetsen',
      cases: 'Praktijkcasussen',
      aiHelp: 'AI Leerhulp'
    },

    // Questions for Test Understanding
    questions: {
      title: "Uitleg Oefening",
      answerPlaceholder: "Type je uitleg hier...",
      list: [
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
        }
      ]
    },

    // Detailed Content Sections
    contentSections: {
      phases: {
        inflammatory: {
          title: "Inflammatiefase (0-5 dagen)",
          description: "De acute ontstekingsreactie waarbij het beschadigde weefsel wordt opgeruimd en ontstekingscellen worden aangetrokken.",
          points: [
            "Verhoogde doorbloeding en vaatpermeabiliteit",
            "Infiltratie van ontstekingscellen (neutrofielen, macrofagen)",
            "Opruiming van beschadigd weefsel",
            "Vrijkomen van groeifactoren en cytokinen"
          ],
          clinical: "Klinische kenmerken: roodheid, warmte, zwelling, pijn en functiebeperking"
        },
        proliferative: {
          title: "Proliferatiefase (5-21 dagen)",
          description: "Vorming van nieuw bindweefsel door fibroblasten die collageen produceren.",
          points: [
            "Activatie en proliferatie van fibroblasten",
            "Productie van collageen type III (voorlopig collageen)",
            "Vorming van nieuwe bloedvaten (angiogenese)",
            "Begin van matrix organisatie"
          ],
          clinical: "In deze fase is gecontroleerde mechanische belasting essentieel voor optimale weefselorganisatie"
        },
        remodeling: {
          title: "Remodelleringsfase (21 dagen - 1 jaar)",
          description: "Reorganisatie en versterking van het nieuwe bindweefsel onder invloed van mechanische belasting.",
          points: [
            "Omzetting van collageen type III naar type I",
            "Vorming van crosslinks tussen collageenvezels",
            "Uitlijning van vezels in de belastingsrichting",
            "Optimalisatie van weefselsterkte"
          ],
          clinical: "Progressieve belasting is cruciaal voor optimale weefselsterkte en functionaliteit"
        }
      },
      mechanotransduction: {
        title: "Mechanotransductie en Belasting",
        description: "Mechanotransductie speelt een cruciale rol bij bindweefselherstel. Dit is het proces waarbij mechanische krachten worden omgezet in cellulaire responsen:",
        points: [
          {
            title: "Cellulaire respons",
            description: "Fibroblasten reageren op mechanische prikkels door aanpassing van hun metabolisme en productie van matrix componenten"
          },
          {
            title: "Optimale belasting",
            description: "Te weinig belasting leidt tot atrofie, terwijl overbelasting kan resulteren in weefselschade"
          },
          {
            title: "Progressieve opbouw",
            description: "Geleidelijke toename van belasting is essentieel voor optimaal herstel en adaptatie"
          }
        ]
      },
      clinicalImplications: {
        title: "Klinische Implicaties",
        description: "Voor optimaal herstel moet de behandeling worden afgestemd op de fase van weefselherstel:",
        phases: [
          {
            title: "Acute fase",
            description: "Bescherming en ontstekingsmodulatie (PRICE-principe)"
          },
          {
            title: "Subacute fase",
            description: "Gecontroleerde mobilisatie en progressieve belasting"
          },
          {
            title: "Remodellering",
            description: "Functionele training en sport-specifieke oefeningen"
          }
        ],
        note: "Het is essentieel om de belasting aan te passen aan de individuele patient en de specifieke eigenschappen van het aangedane weefsel."
      },
      recommendedSources: {
        title: "Aanbevolen Bronnen",
        inflammatoryPhase: {
          title: "De Ontstekingsfase",
          link: "De Inflammatoire Fase van Weefselherstel (0-5 dagen)"
        },
        proliferativePhase: {
          title: "De Proliferatiefase",
          link: "De Proliferatiefase: Opbouw van Nieuw Weefsel (5-21 dagen)"
        },
        remodelingPhase: {
          title: "De Remodelleringsfase",
          link: "De Remodelleringsfase: Versterking en Reorganisatie (21+ dagen)"
        }
      }
    }
  },
  EN: {
    // Navigation
    home: 'Home',
    topicsNav: 'Topics',
    availableTopics: 'Available Topics',
    backToLearningPlatform: '← Return to HAN Physiotherapy Learning Platform',

    // Topics
    topics: {
      Bindweefselherstel: 'Connective Tissue Repair',
      BindweefselherstelDescription: 'Learn about the healing process of connective tissue and the factors involved.',
      'Trainingsleer Principes': 'Training Principles',
      'Trainingsleer PrincipesDescription': 'Discover the fundamental principles of effective training and periodization.',
      'Anatomie & Fysiologie': 'Anatomy & Physiology',
      'Anatomie & FysiologieDescription': 'Delve into the structure and function of the human body.',
      Biomechanica: 'Biomechanics',
      BiomechanicaDescription: 'Understand the mechanical principles of human movement.',
    },

    // Content Pages
    content: {
      basicKnowledge: 'Basic Knowledge of Connective Tissue Repair',
      introduction: 'Introduction',
      introText1: 'Connective tissue repair is a complex and dynamic process essential for injury recovery and the body\'s adaptation to stress. For physiotherapists, a good understanding of this process is crucial for effective treatment.',
      introText2: 'The connective tissue in our body consists mainly of collagen, elastin, and proteoglycans, produced by fibroblasts. These components together provide structural integrity and elasticity to tissues such as tendons, ligaments, and fascia.',
      phases: 'Phases of Connective Tissue Repair',
    },

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
      title: 'Practice Concepts',
      waitMessage: 'Wait {seconds} seconds before flipping the card...',
      warningMessage: 'Try to remember the answer yourself first! This helps you to retain the information better.',
      learningTip: 'Creating new connections in your memory takes more effort, but leads to better and longer-lasting learning.',
      cards: {
        collagen: {
          front: 'What is collagen?',
          back: 'A structural protein that is the main component of connective tissue and provides strength and elasticity'
        },
        fibroblasts: {
          front: 'Fibroblasts',
          back: 'Cells responsible for the production of collagen and other extracellular matrix components'
        },
        // Add all other flashcard translations here
      }
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
    },

    // Sections
    sections: {
      info: 'Information & Sources',
      practice: 'Practice Concepts',
      test: 'Test Understanding',
      cases: 'Case Studies',
      aiHelp: 'AI Help'
    },

    // Questions for Test Understanding
    questions: {
      title: "Explanation Exercise",
      answerPlaceholder: "Type your explanation here...",
      list: [
        {
          title: "1. Mechanotransduction and Connective Tissue Repair",
          description: "Describe the mechanism and relevance for physiotherapy practice. Address the concept, role in recovery, practical application, and relationship with loading."
        },
        {
          title: "2. Inflammatory Phase",
          description: "Describe the cellular processes during the inflammatory phase and explain why this phase is essential for optimal tissue repair."
        },
        {
          title: "3. Collagen Type I vs Type III",
          description: "Compare the properties and functions of collagen type I and III. Explain why the conversion from type III to type I is important during the healing process."
        },
        {
          title: "4. Loading and Adaptation",
          description: "Explain how progressive loading affects connective tissue and describe the principles of tissue adaptation in relation to training."
        },
        {
          title: "5. Matrix Metalloproteinases (MMPs)",
          description: "Describe the role of MMPs in connective tissue repair and explain how these enzymes contribute to tissue remodeling."
        }
      ]
    },

    // Detailed Content Sections
    contentSections: {
      phases: {
        inflammatory: {
          title: "Inflammatory Phase (0-5 days)",
          description: "The acute inflammatory response where damaged tissue is cleared and inflammatory cells are attracted.",
          points: [
            "Increased blood flow and vascular permeability",
            "Infiltration of inflammatory cells (neutrophils, macrophages)",
            "Clearance of damaged tissue",
            "Release of growth factors and cytokines"
          ],
          clinical: "Clinical characteristics: redness, warmth, swelling, pain, and functional limitation"
        },
        proliferative: {
          title: "Proliferative Phase (5-21 days)",
          description: "Formation of new connective tissue by fibroblasts producing collagen.",
          points: [
            "Activation and proliferation of fibroblasts",
            "Production of type III collagen (provisional collagen)",
            "Formation of new blood vessels (angiogenesis)",
            "Beginning of matrix organization"
          ],
          clinical: "In this phase, controlled mechanical loading is essential for optimal tissue organization"
        },
        remodeling: {
          title: "Remodeling Phase (21 days - 1 year)",
          description: "Reorganization and strengthening of the new connective tissue under the influence of mechanical loading.",
          points: [
            "Conversion of type III collagen to type I",
            "Formation of crosslinks between collagen fibers",
            "Alignment of fibers in the direction of loading",
            "Optimization of tissue strength"
          ],
          clinical: "Progressive loading is crucial for optimal tissue strength and functionality"
        }
      },
      mechanotransduction: {
        title: "Mechanotransduction and Loading",
        description: "Mechanotransduction plays a crucial role in connective tissue repair. This is the process where mechanical forces are converted into cellular responses:",
        points: [
          {
            title: "Cellular response",
            description: "Fibroblasts respond to mechanical stimuli by adapting their metabolism and production of matrix components"
          },
          {
            title: "Optimal loading",
            description: "Too little loading leads to atrophy, while overloading can result in tissue damage"
          },
          {
            title: "Progressive build-up",
            description: "Gradual increase in loading is essential for optimal recovery and adaptation"
          }
        ]
      },
      clinicalImplications: {
        title: "Clinical Implications",
        description: "For optimal recovery, treatment must be aligned with the tissue healing phase:",
        phases: [
          {
            title: "Acute phase",
            description: "Protection and inflammation modulation (PRICE principle)"
          },
          {
            title: "Subacute phase",
            description: "Controlled mobilization and progressive loading"
          },
          {
            title: "Remodeling",
            description: "Functional training and sport-specific exercises"
          }
        ],
        note: "It is essential to adjust the loading to the individual patient and the specific characteristics of the affected tissue."
      },
      recommendedSources: {
        title: "Recommended Sources",
        inflammatoryPhase: {
          title: "The Inflammatory Phase",
          link: "The Inflammatory Phase of Tissue Repair (0-5 days)"
        },
        proliferativePhase: {
          title: "The Proliferative Phase",
          link: "The Proliferative Phase: Building New Tissue (5-21 days)"
        },
        remodelingPhase: {
          title: "The Remodeling Phase",
          link: "The Remodeling Phase: Strengthening and Reorganization (21+ days)"
        }
      }
    }
  },
  DE: {
    // Navigation
    home: 'Startseite',
    topicsNav: 'Themen',
    availableTopics: 'Verfügbare Themen',
    backToLearningPlatform: '← Zurück zur HAN Physiotherapie Lernplattform',

    // Topics
    topics: {
      Bindweefselherstel: 'Bindegewebsheilung',
      BindweefselherstelDescription: 'Lernen Sie über den Heilungsprozess von Bindegewebe und die beteiligten Faktoren.',
      'Trainingsleer Principes': 'Trainingsprinzipien',
      'Trainingsleer PrincipesDescription': 'Entdecken Sie die grundlegenden Prinzipien des effektiven Trainings und der Periodisierung.',
      'Anatomie & Fysiologie': 'Anatomie & Physiologie',
      'Anatomie & FysiologieDescription': 'Vertiefen Sie sich in den Aufbau und die Funktion des menschlichen Körpers.',
      Biomechanica: 'Biomechanik',
      BiomechanicaDescription: 'Verstehen Sie die mechanischen Prinzipien der menschlichen Bewegung.',
    },

    // Content Pages
    content: {
      basicKnowledge: 'Grundlagenwissen der Bindegewebsheilung',
      introduction: 'Einführung',
      introText1: 'Die Bindegewebsheilung ist ein komplexer und dynamischer Prozess, der für die Verletzungsheilung und die Anpassung des Körpers an Belastungen essentiell ist. Für Physiotherapeuten ist ein gutes Verständnis dieses Prozesses entscheidend für eine effektive Behandlung.',
      introText2: 'Das Bindegewebe in unserem Körper besteht hauptsächlich aus Kollagen, Elastin und Proteoglykanen, die von Fibroblasten produziert werden. Diese Komponenten sorgen gemeinsam für die strukturelle Integrität und Elastizität von Geweben wie Sehnen, Bändern und Faszien.',
      phases: 'Phasen der Bindegewebsheilung',
    },

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
      title: 'Konzepte üben',
      waitMessage: 'Warten Sie noch {seconds} Sekunden, bevor Sie die Karte umdrehen...',
      warningMessage: 'Versuchen Sie zuerst selbst, sich an die Antwort zu erinnern! Dies hilft Ihnen, die Information besser zu behalten.',
      learningTip: 'Neue Verbindungen im Gedächtnis aufzubauen kostet mehr Mühe, führt aber zu besserem und längerem Lernen.',
      cards: {
        collagen: {
          front: 'Was ist Kollagen?',
          back: 'Ein Strukturprotein, das der Hauptbestandteil des Bindegewebes ist und für Festigkeit und Elastizität sorgt'
        },
        fibroblasts: {
          front: 'Fibroblasten',
          back: 'Zellen, die für die Produktion von Kollagen und anderen extrazellulären Matrixkomponenten verantwortlich sind'
        },
        // Add all other flashcard translations here
      }
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
      title: 'KI-Lernassistent',
      chooseAssistant: 'Wähle deinen KI-Assistenten',
      description: 'Wähle einen der KI-Assistenten unten, um mehr über Bindegewebsheilung zu lernen. Die Assistenten helfen dir durch die sokratische Methode - sie stellen Fragen, die dir helfen, selbst zu Erkenntnissen zu kommen.',
      startChatGPT: 'Starte ein Gespräch mit ChatGPT über Bindegewebsheilung',
      startClaude: 'Starte ein Gespräch mit Claude über Bindegewebsheilung',
      presetPrompt: 'Voreingestellter Prompt für optimalen Lerneffekt',
      suggestedTopics: 'Vorgeschlagene Gesprächsthemen:'
    },

    // Sections
    sections: {
      info: 'Informationen & Quellen',
      practice: 'Konzepte üben',
      test: 'Verständnis testen',
      cases: 'Fallstudien',
      aiHelp: 'KI-Hilfe'
    },

    // Questions for Test Understanding
    questions: {
      title: "Erklärungsübung",
      answerPlaceholder: "Geben Sie Ihre Erklärung hier ein...",
      list: [
        {
          title: "1. Mechanotransduktion und Bindegewebsheilung",
          description: "Beschreiben Sie den Mechanismus und die Relevanz für die physiotherapeutische Praxis. Gehen Sie auf das Konzept, die Rolle bei der Heilung, praktische Anwendung und die Beziehung zur Belastung ein."
        },
        {
          title: "2. Entzündungsphase",
          description: "Beschreiben Sie die zellulären Prozesse während der Entzündungsphase und erklären Sie, warum diese Phase für die optimale Gewebeheilung essentiell ist."
        },
        {
          title: "3. Kollagen Typ I vs Typ III",
          description: "Vergleichen Sie die Eigenschaften und Funktionen von Kollagen Typ I und III. Erklären Sie, warum die Umwandlung von Typ III zu Typ I während des Heilungsprozesses wichtig ist."
        },
        {
          title: "4. Belastung und Adaptation",
          description: "Erklären Sie, wie progressive Belastung das Bindegewebe beeinflusst und beschreiben Sie die Prinzipien der Gewebeadaptation in Bezug auf Training."
        },
        {
          title: "5. Matrix-Metalloproteinasen (MMPs)",
          description: "Beschreiben Sie die Rolle von MMPs bei der Bindegewebsheilung und erklären Sie, wie diese Enzyme zur Gewebeumbildung beitragen."
        }
      ]
    },

    // Detailed Content Sections
    contentSections: {
      phases: {
        inflammatory: {
          title: "Entzündungsphase (0-5 Tage)",
          description: "Die akute Entzündungsreaktion, bei der geschädigtes Gewebe beseitigt und Entzündungszellen angelockt werden.",
          points: [
            "Erhöhte Durchblutung und Gefäßpermeabilität",
            "Infiltration von Entzündungszellen (Neutrophile, Makrophagen)",
            "Beseitigung von geschädigtem Gewebe",
            "Freisetzung von Wachstumsfaktoren und Zytokinen"
          ],
          clinical: "Klinische Merkmale: Rötung, Wärme, Schwellung, Schmerz und Funktionseinschränkung"
        },
        proliferative: {
          title: "Proliferationsphase (5-21 Tage)",
          description: "Bildung von neuem Bindegewebe durch Fibroblasten, die Kollagen produzieren.",
          points: [
            "Aktivierung und Proliferation von Fibroblasten",
            "Produktion von Kollagen Typ III (vorläufiges Kollagen)",
            "Bildung neuer Blutgefäße (Angiogenese)",
            "Beginn der Matrixorganisation"
          ],
          clinical: "In dieser Phase ist kontrollierte mechanische Belastung essentiell für die optimale Gewebeorganisation"
        },
        remodeling: {
          title: "Umbauphase (21 Tage - 1 Jahr)",
          description: "Reorganisation und Stärkung des neuen Bindegewebes unter dem Einfluss mechanischer Belastung.",
          points: [
            "Umwandlung von Kollagen Typ III zu Typ I",
            "Bildung von Quervernetzungen zwischen Kollagenfasern",
            "Ausrichtung der Fasern in Belastungsrichtung",
            "Optimierung der Gewebefestigkeit"
          ],
          clinical: "Progressive Belastung ist entscheidend für optimale Gewebefestigkeit und Funktionalität"
        }
      },
      mechanotransduction: {
        title: "Mechanotransduktion und Belastung",
        description: "Mechanotransduktion spielt eine entscheidende Rolle bei der Bindegewebsheilung. Dies ist der Prozess, bei dem mechanische Kräfte in zelluläre Antworten umgewandelt werden:",
        points: [
          {
            title: "Zelluläre Antwort",
            description: "Fibroblasten reagieren auf mechanische Reize durch Anpassung ihres Stoffwechsels und der Produktion von Matrixkomponenten"
          },
          {
            title: "Optimale Belastung",
            description: "Zu wenig Belastung führt zu Atrophie, während Überbelastung zu Gewebeschäden führen kann"
          },
          {
            title: "Progressive Steigerung",
            description: "Graduelle Zunahme der Belastung ist essentiell für optimale Heilung und Adaptation"
          }
        ]
      },
      clinicalImplications: {
        title: "Klinische Implikationen",
        description: "Für eine optimale Heilung muss die Behandlung auf die Phase der Gewebeheilung abgestimmt werden:",
        phases: [
          {
            title: "Akutphase",
            description: "Schutz und Entzündungsmodulation (PRICE-Prinzip)"
          },
          {
            title: "Subakute Phase",
            description: "Kontrollierte Mobilisation und progressive Belastung"
          },
          {
            title: "Umbauphase",
            description: "Funktionelles Training und sportspezifische Übungen"
          }
        ],
        note: "Es ist wichtig, die Belastung an den individuellen Patienten und die spezifischen Eigenschaften des betroffenen Gewebes anzupassen."
      },
      recommendedSources: {
        title: "Empfohlene Quellen",
        inflammatoryPhase: {
          title: "Die Entzündungsphase",
          link: "Die Entzündungsphase der Gewebeheilung (0-5 Tage)"
        },
        proliferativePhase: {
          title: "Die Proliferationsphase",
          link: "Die Proliferationsphase: Aufbau von neuem Gewebe (5-21 Tage)"
        },
        remodelingPhase: {
          title: "Die Umbauphase",
          link: "Die Umbauphase: Stärkung und Reorganisation (21+ Tage)"
        }
      }
    }
  }
}; 