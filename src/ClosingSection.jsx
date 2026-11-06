
import React from "react";
import "./ClosingSection.css";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    message: "We look forward to welcoming you",
  },
  kn: {
    message: "ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಸ್ವಾಗತಿಸಲು ನಾವು ಎದುರು ನೋಡುತ್ತಿದ್ದೇವೆ",
  },
  hi: {
    message: "हम आपका स्वागत करने के लिए उत्सुक हैं",
  },
  ar: {
    message: "نتطلع إلى الترحيب بكم",
  },
};

export default function ClosingSection() {
  const { language } = useLanguage();
  const content = translations[language] || translations.en;

  return (
    <ScrollReveal duration={1.6} distance={35} type="up">
      <section
        className="closing-section"
        lang={language}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <img
          className="closing-floral-art"
          src="https://static.tildacdn.net/tild3661-6433-4036-a330-323937363764/Create_PNG_image_cha.png"
          alt=""
        />

        <h2 className="closing-message">
          {content.message}
        </h2>

        <img
          className="closing-flower"
          src="https://static.tildacdn.net/tild6166-3862-4533-b931-323630393862/Fine-line_flowers_Mo.png"
          alt=""
        />

        <img
          className="closing-decor-line"
          src="https://static.tildacdn.net/tild3766-3833-4138-b137-393561366461/decor-line_1.png"
          alt=""
        />
      </section>
    </ScrollReveal>
  );
}
