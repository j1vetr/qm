export type Language = 'en' | 'de' | 'fr';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      about: "About",
      quote: "Get Quote",
    },
    hero: {
      subtitle: "Switzerland's Premium Relocation",
      title_moving: "MOVING",
      title_forward: "FORWARD",
      description: "Experience the next generation of logistics. From Zürich to Geneva, we move your world with Swiss precision.",
      start_moving: "START MOVING",
      our_services: "OUR SERVICES",
    },
    home: {
      standard_title: "The QuickMove Standard",
      reimagined: "Relocation Reimagined",
      reimagined_desc: "We've stripped away the inefficiencies of traditional moving. No hidden fees, no vague timelines, no stress. Just pure, Swiss-engineered logistics delivered with white-glove precision.",
      discover_method: "Discover Our Method",
      card_timing_title: "Precision Timing",
      card_timing_desc: "GPS-tracked fleet ensures we arrive exactly when we say we will.",
      card_security_title: "Total Security",
      card_security_desc: "Full value insurance coverage and vetted personnel for peace of mind.",
      card_excellence_title: "Swiss Excellence",
      card_excellence_desc: "Our white-glove service isn't an upgrade—it's our standard. We handle your belongings with the care of a curator.",
      map_subtitle: "Network Coverage",
      map_title: "We Cover Every Canton",
      map_desc: "Our logistics network spans the entire nation. From the busy streets of Zürich to the quiet valleys of Ticino, we are there.",
      hover_city: "Hover over a city on the map to view details.",
      daily_routes: "Daily routes available",
      map_stats: {
        moves: "Moves",
        cantons: "Cantons",
        satisfaction: "Satisfaction",
        quote_time: "Quote Time"
      },
      map_labels: {
        active_moves: "Active Moves",
        fully_insured: "100% Insured",
        express_delivery: "Express Delivery",
        same_day: "Same day service",
        pro_packing: "Professional Packing",
        special_care: "Special protection",
        premium_service: "Premium Service",
        vip_moving: "VIP moving",
        main_hub: "Main Hub",
        service_point: "Service Point",
        active: "Active",
        all_switzerland: "All Switzerland Service",
        active_jobs: "active jobs"
      },
      testimonials_title: "Testimonials",
      trusted_by: "Trusted by Switzerland",
      testimonials_desc: "Don't just take our word for it. Here is what our clients have to say about their relocation experience.",
      ready_title: "Ready to Move?",
      get_quote: "GET YOUR QUOTE",
    },
    services: {
      subtitle: "World Class Standards",
      title: "Our Services",
      description: "We offer a comprehensive suite of relocation services designed for the modern individual who refuses to compromise on quality.",
      cta_title: "Ready for a Seamless Move?",
      cta_desc: "Stop stressing about logistics. Let us handle the heavy lifting while you focus on your new beginning.",
      cta_button: "GET YOUR FREE QUOTE",
      items: {
        packing: {
          title: "Premium Packing",
          desc: "We don't just throw things in boxes. We architect the safety of your items using premium materials and specialized techniques for fragile items, art, and electronics.",
          features: ["Custom crating for art", "Anti-static electronic wrapping", "Wardrobe boxes provided"]
        },
        transport: {
          title: "Secure Transport",
          desc: "Our fleet represents the pinnacle of logistics technology. Air-ride suspension, GPS tracking, and climate control ensure your belongings travel in first-class comfort.",
          features: ["Real-time GPS Tracking", "Air-ride suspension trucks", "Climate controlled cargo"]
        },
        insurance: {
          title: "Insurance & Safety",
          desc: "Peace of mind is part of the package. We offer comprehensive insurance coverage for every step of the journey, backed by Swiss reliability.",
          features: ["Full value protection", "Zero-deductible options", "Certified handling staff"]
        },
        express: {
          title: "Express Relocation",
          desc: "For those who value time above all else. Our express service guarantees 24-hour relocation within Switzerland for eligible moves.",
          features: ["Priority scheduling", "Dedicated express team", "Overnight transport options"]
        },
        whiteglove: {
          title: "White Glove Service",
          desc: "Sit back and relax. Our white-glove service includes full unpacking, furniture assembly, and even home organization so you walk into a ready home.",
          features: ["Furniture assembly/disassembly", "Home organization", "Debris removal"]
        },
        storage: {
          title: "Storage Solutions",
          desc: "Need time between homes? Our high-security storage facilities offer a temporary sanctuary for your possessions with 24/7 surveillance.",
          features: ["Climate-controlled units", "24/7 Video surveillance", "Digital inventory management"]
        },
        cleaning: {
          title: "Professional Cleaning",
          desc: "We use professional industrial equipment for deep cleaning, floor polishing, and restoration of your old or new property.",
          features: ["Home & Office Cleaning", "Floor Polishing & Waxing", "Handover Guarantee"]
        },
        disposal: {
          title: "Eco-Friendly Disposal",
          desc: "Don't worry about the trash. We handle the responsible disposal and recycling of unwanted items, furniture, and renovation debris.",
          features: ["Furniture Disposal", "Recycling Services", "Debris Removal"]
        },
        assembly: {
          title: "Furniture Assembly",
          desc: "Professional disassembly and reassembly of all furniture types, from complex modular systems to antiques, ensuring structural integrity.",
          features: ["IKEA & Designer Assembly", "Wall Mounting Service", "Complex Systems Setup"]
        }
      }
    },
    process: {
      subtitle: "The Methodology",
      title: "The Process",
      description: "Precision engineering applied to moving. We've broken down relocation into a science to ensure zero errors.",
      steps: [
        {
          phase: "Phase 01",
          title: "Consultation & Assessment",
          desc: "We begin with a thorough digital or in-person survey of your home. Our experts analyze your inventory, identify special requirements, and discuss your timeline constraints."
        },
        {
          phase: "Phase 02",
          title: "Strategic Planning",
          desc: "A dedicated move coordinator creates your master plan. This includes route optimization, packing material calculation, and scheduling of specialist teams for items like pianos or art."
        },
        {
          phase: "Phase 03",
          title: "The Pack",
          desc: "Our team arrives with premium materials. We label, catalog, and pack every item with precision. Wardrobes are transferred to garment boxes; electronics are anti-static wrapped."
        },
        {
          phase: "Phase 04",
          title: "Transport",
          desc: "Your belongings are loaded into our air-ride suspension fleet. You receive a tracking link to monitor the journey in real-time as we move across the Swiss landscape."
        },
        {
          phase: "Phase 05",
          title: "Arrival & Setup",
          desc: "We don't just drop boxes. We reassemble furniture, place boxes in correct rooms, and can provide unpacking services to get your new home livable immediately."
        }
      ]
    },
    about: {
      subtitle: "Who We Are",
      title_line1: "Swiss Precision",
      title_line2: "Global Vision",
      p1: "Founded in 2024, QuickMove was born from a frustration with the archaic moving industry. We saw a world where logistics were opaque, service was inconsistent, and technology was non-existent.",
      p2: "We decided to change that. By combining Swiss efficiency with modern tracking technology and a white-glove service ethos, we created a moving experience that feels less like a chore and more like an upgrade.",
      p3: "Today, we operate across all 26 cantons, serving clients who demand excellence, discretion, and speed.",
      stat_satisfaction: "Satisfaction Rate",
      mission: { title: "Mission", text: "To redefine relocation through technology and service excellence." },
      vision: { title: "Vision", text: "A world where moving is seamless, instant, and stress-free." },
      values: { title: "Values", text: "Precision, Discretion, Reliability, and Innovation." }
    },
    contact: {
      subtitle: "Start Your Journey",
      title: "Request Proposal",
      description: "This isn't just a form. It's the beginning of a meticulously planned operation. The more details you provide, the more precise our logistical planning will be.",
      steps_nav: ["01. Logistics", "02. Property", "03. Services", "04. Personal"],
      buttons: {
        continue_property: "Continue to Property",
        continue_services: "Continue to Services",
        final_details: "Final Details",
        back: "Back",
        submit: "Submit Request",
        processing: "Processing..."
      },
      step1: {
        title: "The Route",
        desc: "Defining the trajectory of your move.",
        move_type: "Move Type",
        private: "Private",
        business: "Business",
        origin: "Origin",
        destination: "Destination",
        zip: "ZIP",
        city: "City",
        date: "Desired Date",
        pick_date: "Pick a date",
        flexibility: "Flexibility",
        flex_fixed: "Fixed Date (Strict)",
        flex_3days: "+/- 3 Days",
        flex_week: "+/- 1 Week"
      },
      step2: {
        title: "Property Scope",
        desc: "Volume and access assessment.",
        surface: "Surface (m²)",
        rooms: "Rooms",
        people: "People",
        origin_access: "Origin Access",
        dest_access: "Destination Access",
        floor: "Floor",
        elevator: "Elevator",
        lift_yes_large: "Yes, Large",
        lift_yes_small: "Yes, Small",
        lift_no: "No Elevator",
        lift_needed: "External Lift Needed",
        parking: "Parking Distance",
        parking_driveway: "Driveway / Private",
        parking_street: "Street (< 20m)",
        parking_far: "Street (> 20m)",
        parking_permit: "Permit Required"
      },
      step3: {
        title: "Premium Services",
        desc: "Customize your white-glove experience.",
        packing_handling: "Packing & Handling",
        pack_self: "Self Pack",
        pack_self_sub: "Standard",
        pack_self_desc: "You pack everything. We transport boxes and furniture.",
        pack_fragile: "Fragile Only",
        pack_fragile_sub: "Upgrade",
        pack_fragile_desc: "We pack glassware, art, and electronics. You pack clothes/books.",
        pack_full: "Full Service",
        pack_full_sub: "Recommended",
        pack_full_desc: "We bring materials and pack absolutely everything.",
        pack_vip: "VIP White Glove",
        pack_vip_sub: "Premium",
        pack_vip_desc: "Full pack + Unpack + Organization service.",
        addons: "Add-ons",
        disassembly: "Furniture Disassembly",
        disassembly_desc: "Beds, Wardrobes, Tables",
        assembly: "Furniture Assembly",
        assembly_desc: "Re-assembly at destination",
        cleaning: "Final Cleaning",
        cleaning_desc: "With handover guarantee",
        storage: "Temporary Storage",
        storage_desc: "Secure, climate-controlled",
        insurance: "Insurance Value",
        ins_standard: "Standard Coverage",
        ins_medium: "Enhanced Coverage",
        ins_high: "Premium Coverage"
      },
      step4: {
        title: "Personal Details",
        desc: "Where should we send your quote?",
        salutation: "Title",
        mr: "Mr.",
        ms: "Ms.",
        mx: "Mx.",
        firstname: "First Name",
        lastname: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        preferred_contact: "Preferred Contact Method",
        contact_email: "Email me the quote",
        contact_phone: "Call me to discuss details",
        contact_whatsapp: "Send via WhatsApp",
        remarks: "Additional Remarks / Special Items",
        remarks_placeholder: "E.g., Piano, Heavy Safe, Artwork, Narrow Staircase..."
      }
    },
    footer: {
      tagline: "Relocation Reimagined.",
      address: "Bahnhofstrasse 1, 8001 Zürich",
      copyright: "© 2026 QuickMove All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    privacy: {
      title: "Privacy",
      title_span: "Policy",
      last_updated: "Last updated: January 1, 2025",
      intro: {
        title: "1. Introduction",
        text: "At QuickMove AG (\"we\", \"our\", or \"us\"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our relocation services and tell you about your privacy rights and how the law protects you."
      },
      data: {
        title: "2. Data We Collect",
        text: "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:",
        items: [
          { title: "Identity Data:", text: "includes first name, last name, username or similar identifier, title." },
          { title: "Contact Data:", text: "includes billing address, delivery address, email address and telephone numbers." },
          { title: "Relocation Data:", text: "includes inventory lists, floor plans, photos of items to be moved, and specific access details for properties." },
          { title: "Financial Data:", text: "includes bank account and payment card details." }
        ]
      },
      usage: {
        title: "3. How We Use Your Data",
        text: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
        items: [
          "To perform the contract we are about to enter into or have entered into with you (providing moving services).",
          "To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.",
          "To coordinate with third-party partners (e.g., external lift operators, customs agents) necessary for your move."
        ]
      },
      security: {
        title: "4. Data Security",
        text: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
      },
      contact: {
        title: "5. Contact Details",
        text: "If you have any questions about this privacy policy or our privacy practices, please contact us at:",
        address: "QuickMove AG, Bahnhofstrasse 1, 8001 Zürich, Switzerland",
        email: "Email: privacy@quickmove.ch"
      }
    },
    terms: {
      title: "Terms of",
      title_span: "Service",
      effective_date: "Effective Date: January 1, 2025",
      agreement: {
        title: "1. Agreement to Terms",
        text: "These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\"you\") and QuickMove AG (\"we,\" \"us\" or \"our\"), concerning your access to and use of our relocation services."
      },
      services: {
        title: "2. Services",
        text1: "QuickMove AG provides premium relocation, packing, transport, and storage services. The specific scope of services for your move will be detailed in your personalized Quote/Proposal.",
        text2: "We reserve the right to refuse service if the conditions at the origin or destination are unsafe for our staff or if the inventory significantly differs from what was declared."
      },
      obligations: {
        title: "3. Customer Obligations",
        text: "You agree to:",
        items: [
          "Provide accurate information regarding the volume of goods and access conditions (elevator availability, parking distance, etc.).",
          "Secure necessary parking permits unless explicitly included in our service package.",
          "Ensure all personal valuables (jewelry, cash, important documents) are removed or secured prior to our arrival.",
          "Be present or have an authorized representative present during the loading and unloading process."
        ]
      },
      liability: {
        title: "4. Insurance & Liability",
        standard_title: "Standard Liability:",
        standard_text: "Our liability for loss or damage is limited by Swiss law and industry standards unless enhanced coverage is purchased.",
        premium_title: "Premium Coverage:",
        premium_text: "We offer full-value protection plans. Claims for damage must be reported within 3 days of delivery. We are not liable for the contents of boxes packed by the owner (PBO) unless there is visible external damage to the box caused by our handling."
      },
      cancellation: {
        title: "5. Cancellation Policy",
        text: "Cancellations made more than 14 days before the scheduled move date are fully refundable. Cancellations within 7-14 days are subject to a 50% fee. Cancellations within 7 days are non-refundable."
      },
      law: {
        title: "6. Governing Law",
        text: "These Terms shall be governed by and defined following the laws of Switzerland. QuickMove AG and yourself irrevocably consent that the courts of Zürich shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms."
      }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      process: "Ablauf",
      about: "Über uns",
      quote: "Angebot",
    },
    hero: {
      subtitle: "Der Premium-Umzugsservice der Schweiz",
      title_moving: "UMZUG",
      title_forward: "VORWÄRTS",
      description: "Erleben Sie die nächste Generation der Logistik. Von Zürich bis Genf bewegen wir Ihre Welt mit Schweizer Präzision.",
      start_moving: "JETZT STARTEN",
      our_services: "UNSERE SERVICES",
    },
    home: {
      standard_title: "Der QuickMove Standard",
      reimagined: "Umzug Neu Gedacht",
      reimagined_desc: "Wir haben die Ineffizienzen traditioneller Umzüge beseitigt. Keine versteckten Gebühren, keine vagen Zeitpläne, kein Stress. Einfach reine, schweizerisch konstruierte Logistik mit Präzision.",
      discover_method: "Entdecken Sie unsere Methode",
      card_timing_title: "Präzises Timing",
      card_timing_desc: "GPS-getrackte Flotte stellt sicher, dass wir genau dann ankommen, wenn wir es sagen.",
      card_security_title: "Totale Sicherheit",
      card_security_desc: "Vollwertversicherung und geprüftes Personal für Ihren Seelenfrieden.",
      card_excellence_title: "Schweizer Exzellenz",
      card_excellence_desc: "Unser White-Glove-Service ist kein Upgrade – es ist unser Standard. Wir behandeln Ihr Eigentum mit der Sorgfalt eines Kurators.",
      map_subtitle: "Netzwerkabdeckung",
      map_title: "Wir decken jeden Kanton ab",
      map_desc: "Unser Logistiknetzwerk umspannt die ganze Nation. Von den belebten Straßen Zürichs bis zu den ruhigen Tälern des Tessins sind wir da.",
      hover_city: "Fahren Sie über eine Stadt auf der Karte für Details.",
      daily_routes: "Tägliche Routen verfügbar",
      map_stats: {
        moves: "Umzüge",
        cantons: "Kantone",
        satisfaction: "Zufriedenheit",
        quote_time: "Angebotszeit"
      },
      map_labels: {
        active_moves: "Aktive Umzüge",
        fully_insured: "100% Versichert",
        express_delivery: "Express Lieferung",
        same_day: "Taggleicher Service",
        pro_packing: "Professionelle Verpackung",
        special_care: "Spezieller Schutz",
        premium_service: "Premium Service",
        vip_moving: "VIP Umzug",
        main_hub: "Hauptzentrum",
        service_point: "Servicepunkt",
        active: "Aktiv",
        all_switzerland: "Service in der ganzen Schweiz",
        active_jobs: "aktive Aufträge"
      },
      testimonials_title: "Referenzen",
      trusted_by: "Vertraut von der Schweiz",
      testimonials_desc: "Verlassen Sie sich nicht nur auf unser Wort. Hier ist, was unsere Kunden über ihre Umzugserfahrung sagen.",
      ready_title: "Bereit für den Umzug?",
      get_quote: "ANGEBOT ANFORDERN",
    },
    services: {
      subtitle: "Weltklasse Standards",
      title: "Unsere Leistungen",
      description: "Wir bieten eine umfassende Palette an Umzugsdienstleistungen für den modernen Menschen, der keine Kompromisse bei der Qualität eingeht.",
      cta_title: "Bereit für einen nahtlosen Umzug?",
      cta_desc: "Hören Sie auf, sich über Logistik zu stressen. Lassen Sie uns das Schwere heben, während Sie sich auf Ihren Neuanfang konzentrieren.",
      cta_button: "KOSTENLOSES ANGEBOT",
      items: {
        packing: {
          title: "Premium Verpackung",
          desc: "Wir werfen Dinge nicht einfach in Kisten. Wir planen die Sicherheit Ihrer Gegenstände mit hochwertigen Materialien und speziellen Techniken für Zerbrechliches, Kunst und Elektronik.",
          features: ["Spezialkisten für Kunst", "Antistatische Elektronikverpackung", "Kleiderboxen inklusive"]
        },
        transport: {
          title: "Sicherer Transport",
          desc: "Unsere Flotte repräsentiert die Spitze der Logistiktechnologie. Luftfederung, GPS-Tracking und Klimakontrolle sorgen dafür, dass Ihr Eigentum erstklassig reist.",
          features: ["Echtzeit-GPS-Tracking", "LKWs mit Luftfederung", "Klimatisierte Fracht"]
        },
        insurance: {
          title: "Versicherung & Sicherheit",
          desc: "Seelenfrieden ist Teil des Pakets. Wir bieten umfassenden Versicherungsschutz für jeden Schritt der Reise, unterstützt durch Schweizer Zuverlässigkeit.",
          features: ["Vollwertschutz", "Optionen ohne Selbstbehalt", "Zertifiziertes Personal"]
        },
        express: {
          title: "Express Umzug",
          desc: "Für diejenigen, die Zeit über alles schätzen. Unser Express-Service garantiert einen 24-Stunden-Umzug innerhalb der Schweiz für berechtigte Umzüge.",
          features: ["Priorisierte Planung", "Dediziertes Express-Team", "Über-Nacht-Transport"]
        },
        whiteglove: {
          title: "White Glove Service",
          desc: "Lehnen Sie sich zurück. Unser White-Glove-Service umfasst vollständiges Auspacken, Möbelmontage und sogar Heimorganisation, sodass Sie in ein fertiges Zuhause kommen.",
          features: ["Möbelmontage/-demontage", "Heimorganisation", "Entsorgung von Verpackungsmaterial"]
        },
        storage: {
          title: "Lagerlösungen",
          desc: "Brauchen Sie Zeit zwischen den Wohnungen? Unsere Hochsicherheitslager bieten einen vorübergehenden Zufluchtsort für Ihren Besitz mit 24/7-Überwachung.",
          features: ["Klimatisierte Einheiten", "24/7 Videoüberwachung", "Digitales Inventarmanagement"]
        },
        cleaning: {
          title: "Professionelle Reinigung",
          desc: "Wir verwenden professionelle Industrieausrüstung für Tiefenreinigung, Bodenpolieren und Restaurierung Ihrer alten oder neuen Immobilie.",
          features: ["Haus- & Büroreinigung", "Bodenpolieren & Wachsen", "Übergabegarantie"]
        },
        disposal: {
          title: "Umweltfreundliche Entsorgung",
          desc: "Machen Sie sich keine Sorgen um den Müll. Wir kümmern uns um die verantwortungsvolle Entsorgung und das Recycling von unerwünschten Gegenständen, Möbeln und Renovierungsschutt.",
          features: ["Möbelentsorgung", "Recycling-Service", "Schuttentfernung"]
        },
        assembly: {
          title: "Möbelmontage",
          desc: "Professionelle Demontage und Wiedermontage aller Möbelarten, von komplexen Modulsystemen bis zu Antiquitäten, unter Gewährleistung der strukturellen Integrität.",
          features: ["IKEA & Designer Montage", "Wandmontage-Service", "Aufbau komplexer Systeme"]
        }
      }
    },
    process: {
      subtitle: "Die Methodik",
      title: "Der Prozess",
      description: "Präzisionstechnik angewandt auf Umzüge. Wir haben den Umzug zu einer Wissenschaft gemacht, um null Fehler zu garantieren.",
      steps: [
        {
          phase: "Phase 01",
          title: "Beratung & Bewertung",
          desc: "Wir beginnen mit einer gründlichen digitalen oder persönlichen Bestandsaufnahme Ihres Zuhauses. Unsere Experten analysieren Ihr Inventar, identifizieren spezielle Anforderungen und besprechen Ihren Zeitplan."
        },
        {
          phase: "Phase 02",
          title: "Strategische Planung",
          desc: "Ein dedizierter Umzugskoordinator erstellt Ihren Masterplan. Dies umfasst Routenoptimierung, Berechnung des Verpackungsmaterials und Planung von Spezialteams für Klaviere oder Kunst."
        },
        {
          phase: "Phase 03",
          title: "Das Verpacken",
          desc: "Unser Team kommt mit Premium-Materialien an. Wir etikettieren, katalogisieren und verpacken jeden Gegenstand mit Präzision. Garderoben kommen in Kleiderboxen; Elektronik wird antistatisch verpackt."
        },
        {
          phase: "Phase 04",
          title: "Transport",
          desc: "Ihr Eigentum wird in unsere luftgefederte Flotte geladen. Sie erhalten einen Tracking-Link, um die Reise in Echtzeit zu verfolgen, während wir uns durch die Schweizer Landschaft bewegen."
        },
        {
          phase: "Phase 05",
          title: "Ankunft & Aufbau",
          desc: "Wir stellen nicht einfach Kisten ab. Wir montieren Möbel, platzieren Kisten in den richtigen Räumen und bieten Auspackservices an, damit Ihr neues Zuhause sofort bewohnbar ist."
        }
      ]
    },
    about: {
      subtitle: "Wer wir sind",
      title_line1: "Schweizer Präzision",
      title_line2: "Globale Vision",
      p1: "Gegründet 2024, entstand QuickMove aus der Frustration über die archaische Umzugsbranche. Wir sahen eine Welt, in der Logistik undurchsichtig, Service inkonsistent und Technologie nicht existent war.",
      p2: "Wir beschlossen, das zu ändern. Durch die Kombination von Schweizer Effizienz mit moderner Tracking-Technologie und einem White-Glove-Service-Ethos haben wir ein Umzugserlebnis geschaffen, das sich weniger wie eine Pflicht und mehr wie ein Upgrade anfühlt.",
      p3: "Heute sind wir in allen 26 Kantonen tätig und bedienen Kunden, die Exzellenz, Diskretion und Geschwindigkeit verlangen.",
      stat_satisfaction: "Zufriedenheitsrate",
      mission: { title: "Mission", text: "Neudefinition von Umzügen durch Technologie und Serviceexzellenz." },
      vision: { title: "Vision", text: "Eine Welt, in der Umziehen nahtlos, sofort und stressfrei ist." },
      values: { title: "Werte", text: "Präzision, Diskretion, Zuverlässigkeit und Innovation." }
    },
    contact: {
      subtitle: "Beginnen Sie Ihre Reise",
      title: "Angebot anfordern",
      description: "Dies ist nicht nur ein Formular. Es ist der Beginn einer minutiös geplanten Operation. Je mehr Details Sie angeben, desto präziser wird unsere logistische Planung.",
      steps_nav: ["01. Logistik", "02. Objekt", "03. Services", "04. Persönlich"],
      buttons: {
        continue_property: "Weiter zum Objekt",
        continue_services: "Weiter zu Services",
        final_details: "Letzte Details",
        back: "Zurück",
        submit: "Anfrage senden",
        processing: "Verarbeite..."
      },
      step1: {
        title: "Die Route",
        desc: "Definition der Umzugsstrecke.",
        move_type: "Umzugstyp",
        private: "Privat",
        business: "Geschäftlich",
        origin: "Startort",
        destination: "Zielort",
        zip: "PLZ",
        city: "Stadt",
        date: "Wunschdatum",
        pick_date: "Datum wählen",
        flexibility: "Flexibilität",
        flex_fixed: "Fixes Datum",
        flex_3days: "+/- 3 Tage",
        flex_week: "+/- 1 Woche"
      },
      step2: {
        title: "Objektumfang",
        desc: "Volumen- und Zugangsbewertung.",
        surface: "Fläche (m²)",
        rooms: "Zimmer",
        people: "Personen",
        origin_access: "Zugang Startort",
        dest_access: "Zugang Zielort",
        floor: "Etage",
        elevator: "Aufzug",
        lift_yes_large: "Ja, Groß",
        lift_yes_small: "Ja, Klein",
        lift_no: "Kein Aufzug",
        lift_needed: "Außenlift nötig",
        parking: "Parkdistanz",
        parking_driveway: "Einfahrt / Privat",
        parking_street: "Straße (< 20m)",
        parking_far: "Straße (> 20m)",
        parking_permit: "Bewilligung nötig"
      },
      step3: {
        title: "Premium Services",
        desc: "Passen Sie Ihr Erlebnis an.",
        packing_handling: "Verpackung & Handling",
        pack_self: "Selbstpacken",
        pack_self_sub: "Standard",
        pack_self_desc: "Sie packen alles. Wir transportieren Kisten und Möbel.",
        pack_fragile: "Nur Zerbrechliches",
        pack_fragile_sub: "Upgrade",
        pack_fragile_desc: "Wir packen Glas, Kunst, Elektronik. Sie Kleidung/Bücher.",
        pack_full: "Vollservice",
        pack_full_sub: "Empfohlen",
        pack_full_desc: "Wir bringen Material und packen absolut alles.",
        pack_vip: "VIP White Glove",
        pack_vip_sub: "Premium",
        pack_vip_desc: "Packen + Auspacken + Organisationsservice.",
        addons: "Zusatzleistungen",
        disassembly: "Möbeldemontage",
        disassembly_desc: "Betten, Schränke, Tische",
        assembly: "Möbelmontage",
        assembly_desc: "Wiederaufbau am Zielort",
        cleaning: "Endreinigung",
        cleaning_desc: "Mit Abnahmegarantie",
        storage: "Zwischenlagerung",
        storage_desc: "Sicher, klimatisiert",
        insurance: "Versicherungswert",
        ins_standard: "Standarddeckung",
        ins_medium: "Erweiterte Deckung",
        ins_high: "Premiumdeckung"
      },
      step4: {
        title: "Persönliche Details",
        desc: "Wohin sollen wir das Angebot senden?",
        salutation: "Anrede",
        mr: "Herr",
        ms: "Frau",
        mx: "Div.",
        firstname: "Vorname",
        lastname: "Nachname",
        email: "E-Mail Adresse",
        phone: "Telefonnummer",
        preferred_contact: "Bevorzugte Kontaktmethode",
        contact_email: "Angebot per E-Mail",
        contact_phone: "Rückruf für Details",
        contact_whatsapp: "Senden via WhatsApp",
        remarks: "Bemerkungen / Spezielles",
        remarks_placeholder: "z.B. Klavier, Schwerer Tresor, Kunstwerke, Enges Treppenhaus..."
      }
    },
    footer: {
      tagline: "Umzug Neu Gedacht.",
      address: "Bahnhofstrasse 1, 8001 Zürich",
      copyright: "© 2026 QuickMove All Rights Reserved.",
      privacy: "Datenschutzerklärung",
      terms: "AGB"
    },
    privacy: {
      title: "Datenschutz",
      title_span: "erklärung",
      last_updated: "Zuletzt aktualisiert: 1. Januar 2025",
      intro: {
        title: "1. Einführung",
        text: "Bei QuickMove AG (\"wir\", \"uns\" oder \"unser\") respektieren wir Ihre Privatsphäre und verpflichten uns zum Schutz Ihrer persönlichen Daten. Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre persönlichen Daten verarbeiten, wenn Sie unsere Website besuchen oder unsere Umzugsdienstleistungen nutzen, und klärt Sie über Ihre Datenschutzrechte und den gesetzlichen Schutz auf."
      },
      data: {
        title: "2. Daten, die wir sammeln",
        text: "Wir können verschiedene Arten von persönlichen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben:",
        items: [
          { title: "Identitätsdaten:", text: "beinhalten Vorname, Nachname, Benutzername oder ähnliche Kennungen, Titel." },
          { title: "Kontaktdaten:", text: "beinhalten Rechnungsadresse, Lieferadresse, E-Mail-Adresse und Telefonnummern." },
          { title: "Umzugsdaten:", text: "beinhalten Inventarlisten, Grundrisse, Fotos der zu transportierenden Gegenstände und spezifische Zugangsinformationen für Immobilien." },
          { title: "Finanzdaten:", text: "beinhalten Bankkonto- und Zahlungskartendaten." }
        ]
      },
      usage: {
        title: "3. Wie wir Ihre Daten verwenden",
        text: "Wir werden Ihre persönlichen Daten nur verwenden, wenn das Gesetz es uns erlaubt. Am häufigsten verwenden wir Ihre persönlichen Daten in den folgenden Umständen:",
        items: [
          "Um den Vertrag zu erfüllen, den wir mit Ihnen eingehen werden oder eingegangen sind (Bereitstellung von Umzugsdienstleistungen).",
          "Um unsere Beziehung zu Ihnen zu verwalten, was die Benachrichtigung über Änderungen unserer Bedingungen oder Datenschutzrichtlinien beinhaltet.",
          "Um uns mit Drittpartnern (z. B. externen Liftbetreibern, Zollagenten) zu koordinieren, die für Ihren Umzug notwendig sind."
        ]
      },
      security: {
        title: "4. Datensicherheit",
        text: "Wir haben angemessene Sicherheitsvorkehrungen getroffen, um zu verhindern, dass Ihre persönlichen Daten versehentlich verloren gehen, verwendet oder auf unbefugte Weise abgerufen, verändert oder offengelegt werden. Darüber hinaus beschränken wir den Zugriff auf Ihre persönlichen Daten auf Mitarbeiter, Vertreter, Auftragnehmer und andere Dritte, die dies aus geschäftlichen Gründen wissen müssen."
      },
      contact: {
        title: "5. Kontaktdaten",
        text: "Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:",
        address: "QuickMove AG, Bahnhofstrasse 1, 8001 Zürich, Schweiz",
        email: "E-Mail: privacy@quickmove.ch"
      }
    },
    terms: {
      title: "Allgemeine",
      title_span: "Geschäftsbedingungen",
      effective_date: "Gültig ab: 1. Januar 2025",
      agreement: {
        title: "1. Zustimmung zu den Bedingungen",
        text: "Diese Nutzungsbedingungen stellen eine rechtsverbindliche Vereinbarung zwischen Ihnen, ob persönlich oder im Namen einer juristischen Person (\"Sie\") und der QuickMove AG (\"wir\", \"uns\" oder \"unser\") dar, die Ihren Zugang zu und Ihre Nutzung unserer Umzugsdienstleistungen betrifft."
      },
      services: {
        title: "2. Dienstleistungen",
        text1: "QuickMove AG bietet Premium-Umzugs-, Verpackungs-, Transport- und Lagerdienstleistungen an. Der spezifische Umfang der Dienstleistungen für Ihren Umzug wird in Ihrem persönlichen Angebot/Vorschlag detailliert beschrieben.",
        text2: "Wir behalten uns das Recht vor, den Service zu verweigern, wenn die Bedingungen am Start- oder Zielort für unser Personal unsicher sind oder wenn das Inventar erheblich von dem abweicht, was deklariert wurde."
      },
      obligations: {
        title: "3. Kundenpflichten",
        text: "Sie stimmen zu:",
        items: [
          "Genaue Informationen bezüglich des Volumens der Waren und der Zugangsbedingungen (Verfügbarkeit von Aufzügen, Parkdistanz usw.) bereitzustellen.",
          "Notwendige Parkgenehmigungen zu sichern, sofern nicht ausdrücklich in unserem Servicepaket enthalten.",
          "Sicherzustellen, dass alle persönlichen Wertsachen (Schmuck, Bargeld, wichtige Dokumente) vor unserer Ankunft entfernt oder gesichert sind.",
          "Während des Be- und Entladevorgangs anwesend zu sein oder einen bevollmächtigten Vertreter anwesend zu haben."
        ]
      },
      liability: {
        title: "4. Versicherung & Haftung",
        standard_title: "Standardhaftung:",
        standard_text: "Unsere Haftung für Verlust oder Beschädigung ist durch Schweizer Recht und Industriestandards begrenzt, sofern keine erweiterte Deckung erworben wird.",
        premium_title: "Premium-Deckung:",
        premium_text: "Wir bieten Vollwertschutzpläne an. Schadensansprüche müssen innerhalb von 3 Tagen nach Lieferung gemeldet werden. Wir haften nicht für den Inhalt von Kartons, die vom Eigentümer gepackt wurden (PBO), es sei denn, es liegt ein sichtbarer äußerer Schaden am Karton vor, der durch unsere Handhabung verursacht wurde."
      },
      cancellation: {
        title: "5. Stornierungsbedingungen",
        text: "Stornierungen, die mehr als 14 Tage vor dem geplanten Umzugsdatum erfolgen, sind vollständig erstattungsfähig. Stornierungen innerhalb von 7-14 Tagen unterliegen einer Gebühr von 50%. Stornierungen innerhalb von 7 Tagen sind nicht erstattungsfähig."
      },
      law: {
        title: "6. Anwendbares Recht",
        text: "Diese Bedingungen unterliegen den Gesetzen der Schweiz und werden nach diesen ausgelegt. QuickMove AG und Sie stimmen unwiderruflich zu, dass die Gerichte von Zürich die ausschließliche Zuständigkeit für die Beilegung von Streitigkeiten haben, die im Zusammenhang mit diesen Bedingungen entstehen können."
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      process: "Processus",
      about: "À propos",
      quote: "Devis",
    },
    hero: {
      subtitle: "Déménagement Premium en Suisse",
      title_moving: "ALLER DE",
      title_forward: "L'AVANT",
      description: "Découvrez la nouvelle génération de logistique. De Zurich à Genève, nous déplaçons votre monde avec une précision suisse.",
      start_moving: "COMMENCER",
      our_services: "NOS SERVICES",
    },
    home: {
      standard_title: "Le Standard QuickMove",
      reimagined: "Déménagement Réinventé",
      reimagined_desc: "Nous avons éliminé les inefficacités des déménagements traditionnels. Pas de frais cachés, pas de délais vagues, pas de stress. Juste une logistique pure, conçue en Suisse, livrée avec une précision de gant blanc.",
      discover_method: "Découvrir Notre Méthode",
      card_timing_title: "Timing Précis",
      card_timing_desc: "Une flotte suivie par GPS garantit que nous arrivons exactement quand nous le disons.",
      card_security_title: "Sécurité Totale",
      card_security_desc: "Assurance valeur totale et personnel vérifié pour votre tranquillité d'esprit.",
      card_excellence_title: "Excellence Suisse",
      card_excellence_desc: "Notre service gant blanc n'est pas une option, c'est notre standard. Nous traitons vos biens avec le soin d'un conservateur.",
      map_subtitle: "Couverture Réseau",
      map_title: "Nous Couvrons Chaque Canton",
      map_desc: "Notre réseau logistique couvre toute la nation. Des rues animées de Zurich aux vallées calmes du Tessin, nous sommes là.",
      hover_city: "Survolez une ville sur la carte pour voir les détails.",
      daily_routes: "Itinéraires quotidiens disponibles",
      map_stats: {
        moves: "Déménagements",
        cantons: "Cantons",
        satisfaction: "Satisfaction",
        quote_time: "Délai de Devis"
      },
      map_labels: {
        active_moves: "Déménagements Actifs",
        fully_insured: "100% Assuré",
        express_delivery: "Livraison Express",
        same_day: "Service le jour même",
        pro_packing: "Emballage Professionnel",
        special_care: "Protection spéciale",
        premium_service: "Service Premium",
        vip_moving: "Déménagement VIP",
        main_hub: "Centre Principal",
        service_point: "Point de Service",
        active: "Actif",
        all_switzerland: "Service dans toute la Suisse",
        active_jobs: "travaux actifs"
      },
      testimonials_title: "Témoignages",
      trusted_by: "La Suisse nous fait confiance",
      testimonials_desc: "Ne nous croyez pas sur parole. Voici ce que nos clients disent de leur expérience de déménagement.",
      ready_title: "Prêt à Déménager ?",
      get_quote: "OBTENIR VOTRE DEVIS",
    },
    services: {
      subtitle: "Standards de Classe Mondiale",
      title: "Nos Services",
      description: "Nous offrons une suite complète de services de déménagement conçus pour l'individu moderne qui refuse de compromettre la qualité.",
      cta_title: "Prêt pour un déménagement sans accroc ?",
      cta_desc: "Arrêtez de stresser pour la logistique. Laissez-nous faire le gros du travail pendant que vous vous concentrez sur votre nouveau départ.",
      cta_button: "DEVIS GRATUIT",
      items: {
        packing: {
          title: "Emballage Premium",
          desc: "Nous ne jetons pas simplement les choses dans des cartons. Nous architecturons la sécurité de vos objets en utilisant des matériaux de qualité et des techniques spécialisées.",
          features: ["Caisses sur mesure pour l'art", "Emballage antistatique", "Penderies fournies"]
        },
        transport: {
          title: "Transport Sécurisé",
          desc: "Notre flotte représente le summum de la technologie logistique. Suspension pneumatique, suivi GPS et contrôle climatique assurent un voyage en première classe.",
          features: ["Suivi GPS temps réel", "Camions à suspension pneumatique", "Fret climatisé"]
        },
        insurance: {
          title: "Assurance & Sécurité",
          desc: "La tranquillité d'esprit fait partie du forfait. Nous offrons une couverture d'assurance complète pour chaque étape du voyage.",
          features: ["Protection valeur totale", "Options sans franchise", "Personnel certifié"]
        },
        express: {
          title: "Déménagement Express",
          desc: "Pour ceux qui valorisent le temps par-dessus tout. Notre service express garantit un déménagement en 24 heures en Suisse.",
          features: ["Planification prioritaire", "Équipe express dédiée", "Transport de nuit"]
        },
        whiteglove: {
          title: "Service Gant Blanc",
          desc: "Détendez-vous. Notre service gant blanc comprend le déballage complet, le montage des meubles et même l'organisation de la maison.",
          features: ["Montage/démontage meubles", "Organisation domicile", "Enlèvement des débris"]
        },
        storage: {
          title: "Solutions de Stockage",
          desc: "Besoin de temps entre deux logements ? Nos installations de stockage haute sécurité offrent un sanctuaire temporaire pour vos biens.",
          features: ["Unités climatisées", "Surveillance vidéo 24/7", "Gestion d'inventaire numérique"]
        },
        cleaning: {
          title: "Nettoyage Professionnel",
          desc: "Nous utilisons des équipements industriels professionnels pour le nettoyage en profondeur, le polissage des sols et la restauration de votre ancienne ou nouvelle propriété.",
          features: ["Nettoyage Domicile & Bureau", "Polissage & Cirage Sols", "Garantie de Remise"]
        },
        disposal: {
          title: "Élimination Écologique",
          desc: "Ne vous inquiétez pas pour les déchets. Nous gérons l'élimination responsable et le recyclage des objets indésirables, des meubles et des débris de rénovation.",
          features: ["Élimination Meubles", "Services Recyclage", "Enlèvement Débris"]
        },
        assembly: {
          title: "Montage de Meubles",
          desc: "Démontage et remontage professionnel de tous types de meubles, des systèmes modulaires complexes aux antiquités, garantissant l'intégrité structurelle.",
          features: ["Montage IKEA & Designer", "Service de fixation murale", "Installation de systèmes complexes"]
        }
      }
    },
    process: {
      subtitle: "La Méthodologie",
      title: "Le Processus",
      description: "L'ingénierie de précision appliquée au déménagement. Nous avons transformé le déménagement en une science pour garantir zéro erreur.",
      steps: [
        {
          phase: "Phase 01",
          title: "Consultation & Évaluation",
          desc: "Nous commençons par une évaluation approfondie de votre domicile. Nos experts analysent votre inventaire et identifient les besoins spéciaux."
        },
        {
          phase: "Phase 02",
          title: "Planification Stratégique",
          desc: "Un coordinateur dédié crée votre plan directeur. Cela inclut l'optimisation de l'itinéraire et la planification des équipes spécialisées."
        },
        {
          phase: "Phase 03",
          title: "L'Emballage",
          desc: "Notre équipe arrive avec des matériaux premium. Nous étiquetons, cataloguons et emballons chaque article avec précision."
        },
        {
          phase: "Phase 04",
          title: "Transport",
          desc: "Vos biens sont chargés dans notre flotte à suspension pneumatique. Vous recevez un lien de suivi pour surveiller le voyage en temps réel."
        },
        {
          phase: "Phase 05",
          title: "Arrivée & Installation",
          desc: "Nous ne faisons pas que déposer des cartons. Nous remontons les meubles, plaçons les cartons et pouvons fournir des services de déballage."
        }
      ]
    },
    about: {
      subtitle: "Qui Sommes-Nous",
      title_line1: "Précision Suisse",
      title_line2: "Vision Globale",
      p1: "Fondé en 2024, QuickMove est né d'une frustration face à l'industrie du déménagement archaïque. Nous avons vu un monde où la logistique était opaque.",
      p2: "Nous avons décidé de changer cela. En combinant l'efficacité suisse avec la technologie moderne, nous avons créé une expérience de déménagement supérieure.",
      p3: "Aujourd'hui, nous opérons dans les 26 cantons, servant des clients qui exigent excellence, discrétion et rapidité.",
      stat_satisfaction: "Taux de Satisfaction",
      mission: { title: "Mission", text: "Redéfinir le déménagement par la technologie et l'excellence du service." },
      vision: { title: "Vision", text: "Un monde où déménager est fluide, instantané et sans stress." },
      values: { title: "Valeurs", text: "Précision, Discrétion, Fiabilité et Innovation." }
    },
    contact: {
      subtitle: "Commencez Votre Voyage",
      title: "Demander une Offre",
      description: "Ce n'est pas juste un formulaire. C'est le début d'une opération minutieusement planifiée. Plus vous fournissez de détails, plus notre planification sera précise.",
      steps_nav: ["01. Logistique", "02. Propriété", "03. Services", "04. Personnel"],
      buttons: {
        continue_property: "Continuer vers Propriété",
        continue_services: "Continuer vers Services",
        final_details: "Derniers Détails",
        back: "Retour",
        submit: "Envoyer la Demande",
        processing: "Traitement..."
      },
      step1: {
        title: "La Route",
        desc: "Définir la trajectoire de votre déménagement.",
        move_type: "Type de Déménagement",
        private: "Privé",
        business: "Entreprise",
        origin: "Origine",
        destination: "Destination",
        zip: "NPA",
        city: "Ville",
        date: "Date Souhaitée",
        pick_date: "Choisir une date",
        flexibility: "Flexibilité",
        flex_fixed: "Date Fixe",
        flex_3days: "+/- 3 Jours",
        flex_week: "+/- 1 Semaine"
      },
      step2: {
        title: "Portée de la Propriété",
        desc: "Évaluation du volume et de l'accès.",
        surface: "Surface (m²)",
        rooms: "Pièces",
        people: "Personnes",
        origin_access: "Accès Origine",
        dest_access: "Accès Destination",
        floor: "Étage",
        elevator: "Ascenseur",
        lift_yes_large: "Oui, Grand",
        lift_yes_small: "Oui, Petit",
        lift_no: "Pas d'Ascenseur",
        lift_needed: "Monte-meuble requis",
        parking: "Distance Parking",
        parking_driveway: "Allée / Privé",
        parking_street: "Rue (< 20m)",
        parking_far: "Rue (> 20m)",
        parking_permit: "Permis Requis"
      },
      step3: {
        title: "Services Premium",
        desc: "Personnalisez votre expérience gant blanc.",
        packing_handling: "Emballage & Manutention",
        pack_self: "Auto-emballage",
        pack_self_sub: "Standard",
        pack_self_desc: "Vous emballez tout. Nous transportons cartons et meubles.",
        pack_fragile: "Fragile Uniquement",
        pack_fragile_sub: "Mise à niveau",
        pack_fragile_desc: "Nous emballons verre, art, électronique. Vous vêtements/livres.",
        pack_full: "Service Complet",
        pack_full_sub: "Recommandé",
        pack_full_desc: "Nous apportons le matériel et emballons absolument tout.",
        pack_vip: "VIP Gant Blanc",
        pack_vip_sub: "Premium",
        pack_vip_desc: "Emballage complet + Déballage + Service d'organisation.",
        addons: "Suppléments",
        disassembly: "Démontage Meubles",
        disassembly_desc: "Lits, Armoires, Tables",
        assembly: "Montage Meubles",
        assembly_desc: "Remontage à destination",
        cleaning: "Nettoyage Final",
        cleaning_desc: "Avec garantie de remise",
        storage: "Stockage Temporaire",
        storage_desc: "Sécurisé, climatisé",
        insurance: "Valeur d'Assurance",
        ins_standard: "Couverture Standard",
        ins_medium: "Couverture Étendue",
        ins_high: "Couverture Premium"
      },
      step4: {
        title: "Détails Personnels",
        desc: "Où devons-nous envoyer votre devis ?",
        salutation: "Titre",
        mr: "M.",
        ms: "Mme",
        mx: "Div.",
        firstname: "Prénom",
        lastname: "Nom",
        email: "Adresse E-mail",
        phone: "Numéro de Téléphone",
        preferred_contact: "Méthode de Contact Préférée",
        contact_email: "M'envoyer le devis par e-mail",
        contact_phone: "M'appeler pour discuter",
        contact_whatsapp: "Envoyer via WhatsApp",
        remarks: "Remarques Supplémentaires",
        remarks_placeholder: "ex: Piano, Coffre-fort lourd, Œuvres d'art, Escalier étroit..."
      }
    },
    footer: {
      tagline: "Déménagement Réinventé.",
      address: "Bahnhofstrasse 1, 8001 Zurich",
      copyright: "© 2026 QuickMove All Rights Reserved.",
      privacy: "Politique de Confidentialité",
      terms: "CGV"
    },
    privacy: {
      title: "Politique de",
      title_span: "Confidentialité",
      last_updated: "Dernière mise à jour : 1er janvier 2025",
      intro: {
        title: "1. Introduction",
        text: "Chez QuickMove AG (« nous », « notre » ou « nos »), nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous traitons vos données personnelles lorsque vous visitez notre site web ou utilisez nos services de déménagement et vous informera de vos droits en matière de confidentialité et de la manière dont la loi vous protège."
      },
      data: {
        title: "2. Données que nous collectons",
        text: "Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant, que nous avons regroupées comme suit :",
        items: [
          { title: "Données d'identité :", text: "comprennent le prénom, le nom, le nom d'utilisateur ou un identifiant similaire, le titre." },
          { title: "Données de contact :", text: "comprennent l'adresse de facturation, l'adresse de livraison, l'adresse e-mail et les numéros de téléphone." },
          { title: "Données de déménagement :", text: "comprennent les listes d'inventaire, les plans d'étage, les photos des articles à déménager et les détails d'accès spécifiques pour les propriétés." },
          { title: "Données financières :", text: "comprennent les coordonnées bancaires et de carte de paiement." }
        ]
      },
      usage: {
        title: "3. Comment nous utilisons vos données",
        text: "Nous n'utiliserons vos données personnelles que lorsque la loi nous y autorise. Le plus souvent, nous utiliserons vos données personnelles dans les circonstances suivantes :",
        items: [
          "Pour exécuter le contrat que nous sommes sur le point de conclure ou que nous avons conclu avec vous (fourniture de services de déménagement).",
          "Pour gérer notre relation avec vous, ce qui inclura de vous informer des modifications apportées à nos conditions ou à notre politique de confidentialité.",
          "Pour coordonner avec des partenaires tiers (par exemple, opérateurs de monte-meubles externes, agents en douane) nécessaires à votre déménagement."
        ]
      },
      security: {
        title: "4. Sécurité des données",
        text: "Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou divulguées. De plus, nous limitons l'accès à vos données personnelles aux employés, agents, entrepreneurs et autres tiers qui ont besoin de les connaître pour des raisons professionnelles."
      },
      contact: {
        title: "5. Coordonnées",
        text: "Si vous avez des questions sur cette politique de confidentialité ou nos pratiques en matière de confidentialité, veuillez nous contacter à :",
        address: "QuickMove AG, Bahnhofstrasse 1, 8001 Zurich, Suisse",
        email: "Email : privacy@quickmove.ch"
      }
    },
    terms: {
      title: "Conditions",
      title_span: "Générales",
      effective_date: "Date d'effet : 1er janvier 2025",
      agreement: {
        title: "1. Accord aux conditions",
        text: "Ces Conditions Générales constituent un accord juridiquement contraignant conclu entre vous, que ce soit personnellement ou au nom d'une entité (« vous ») et QuickMove AG (« nous », « notre » ou « nos »), concernant votre accès et votre utilisation de nos services de déménagement."
      },
      services: {
        title: "2. Services",
        text1: "QuickMove AG fournit des services de déménagement, d'emballage, de transport et de stockage haut de gamme. L'étendue spécifique des services pour votre déménagement sera détaillée dans votre Devis/Proposition personnalisé.",
        text2: "Nous nous réservons le droit de refuser le service si les conditions au départ ou à l'arrivée sont dangereuses pour notre personnel ou si l'inventaire diffère considérablement de ce qui a été déclaré."
      },
      obligations: {
        title: "3. Obligations du client",
        text: "Vous acceptez de :",
        items: [
          "Fournir des informations précises concernant le volume des marchandises et les conditions d'accès (disponibilité de l'ascenseur, distance de stationnement, etc.).",
          "Obtenir les permis de stationnement nécessaires, sauf s'ils sont explicitement inclus dans notre forfait de services.",
          "S'assurer que tous les objets de valeur personnels (bijoux, espèces, documents importants) sont retirés ou sécurisés avant notre arrivée.",
          "Être présent ou avoir un représentant autorisé présent pendant le processus de chargement et de déchargement."
        ]
      },
      liability: {
        title: "4. Assurance et Responsabilité",
        standard_title: "Responsabilité Standard :",
        standard_text: "Notre responsabilité pour perte ou dommage est limitée par la loi suisse et les normes de l'industrie, sauf si une couverture améliorée est souscrite.",
        premium_title: "Couverture Premium :",
        premium_text: "Nous proposons des plans de protection à valeur totale. Les réclamations pour dommages doivent être signalées dans les 3 jours suivant la livraison. Nous ne sommes pas responsables du contenu des cartons emballés par le propriétaire (PBO) sauf s'il y a des dommages externes visibles sur le carton causés par notre manipulation."
      },
      cancellation: {
        title: "5. Politique d'annulation",
        text: "Les annulations effectuées plus de 14 jours avant la date prévue du déménagement sont entièrement remboursables. Les annulations dans les 7 à 14 jours sont soumises à des frais de 50 %. Les annulations dans les 7 jours ne sont pas remboursables."
      },
      law: {
        title: "6. Droit applicable",
        text: "Ces conditions sont régies et définies conformément aux lois de la Suisse. QuickMove AG et vous-même consentez irrévocablement à ce que les tribunaux de Zurich aient la compétence exclusive pour résoudre tout litige pouvant survenir en relation avec ces conditions."
      }
    }
  }
};
