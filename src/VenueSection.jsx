
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const venueTranslations = {
  en: {
    heading: "Venue",
    address: "Marrakech, Morocco",
  },
  kn: {
    heading: "ಸ್ಥಳ",
    address: "ಮರಾಕೆಶ್, ಮೊರಾಕ್ಕೊ",
  },
  hi: {
    heading: "विवाह स्थल",
    address: "माराकेच, मोरक्को",
  },
  ar: {
    heading: "مكان الحفل",
    address: "مراكش، المغرب",
  },
};

export default function VenueSection() {
  const { language } = useLanguage();
  const content = venueTranslations[language] || venueTranslations.en;

  return (
    <ScrollReveal duration={1.4} distance={35} type="up">
      <section
        className="venue-section"
        lang={language}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="venue-heading">
          {content.heading}
        </h2>

        <img
          className="venue-divider"
          src="https://static.tildacdn.net/tild6239-3062-4232-a662-393266616664/line-divider2.png"
          alt=""
        />

        <img
          className="venue-pin"
          src="https://static.tildacdn.net/tild3263-3561-4339-a533-643564366236/ic_baseline-place_1.png"
          alt=""
        />

        <p className="venue-name">
          Beldi Country Club
        </p>

        <p className="venue-address">
          {content.address}
        </p>

        <img
          className="venue-artwork"
          src="https://static.tildacdn.net/tild6666-3763-4439-a131-303039386132/Group_222.png"
          alt=""
        />
      </section>
    </ScrollReveal>
  );
}
