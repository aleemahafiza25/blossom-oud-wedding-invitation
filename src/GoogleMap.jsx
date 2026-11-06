
import React from "react";
import "./GoogleMap.css";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const VENUE_MAP = "Beldi Country Club, Marrakech, Morocco";

const translations = {
  en: {
    heading: "Google Maps Location",
    openMap: "Open in Google Maps",
    mapTitle: "Google Maps venue location",
  },
  kn: {
    heading: "ಗೂಗಲ್ ಮ್ಯಾಪ್ ಸ್ಥಳ",
    openMap: "ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    mapTitle: "ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ಮದುವೆಯ ಸ್ಥಳ",
  },
  hi: {
    heading: "गूगल मैप पर स्थान",
    openMap: "गूगल मैप्स में खोलें",
    mapTitle: "गूगल मैप पर विवाह स्थल",
  },
  ar: {
    heading: "موقعنا على خرائط جوجل",
    openMap: "افتح في خرائط جوجل",
    mapTitle: "موقع الحفل على خرائط جوجل",
  },
};

export default function GoogleMap() {
  const { language } = useLanguage();
  const content = translations[language] || translations.en;

  const encodedVenue = encodeURIComponent(VENUE_MAP);

  return (
    <>
      <ScrollReveal duration={1.3} distance={30} type="up">
        <section
          className="google-map-title-section"
          lang={language}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h2>{content.heading}</h2>

          <img
            src="https://static.tildacdn.net/tild6239-3062-4232-a662-393266616664/line-divider2.png"
            alt=""
          />
        </section>
      </ScrollReveal>

      <ScrollReveal
        duration={1.5}
        distance={35}
        type="up"
        delay={0.15}
      >
        <section
          className="google-map-content-section"
          lang={language}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="google-map-decoration">
            <iframe
              title={content.mapTitle}
              src={`https://www.google.com/maps?q=${encodedVenue}&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedVenue}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.openMap}
            </a>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
