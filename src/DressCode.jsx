
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const palette = ["#60603b", "#360c1a", "#40312c", "#efdfcd"];

const translations = {
  en: {
    heading: "Dress Code",
    description:
      "We kindly invite you to dress in elegant attire that reflects the style and spirit of our special day.",
    palette: "Color palette",
    imageAlt: "Guests dressed in elegant wedding attire",
  },
  kn: {
    heading: "ಉಡುಗೆ ಸಂಹಿತೆ",
    description:
      "ನಮ್ಮ ವಿಶೇಷ ದಿನದ ಶೈಲಿ ಮತ್ತು ಸೊಬಗನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವ ಸೊಗಸಾದ ಉಡುಪನ್ನು ಧರಿಸಿ ಬರಲು ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    palette: "ಬಣ್ಣಗಳ ಆಯ್ಕೆ",
    imageAlt: "ಸೊಗಸಾದ ಮದುವೆಯ ಉಡುಪಿನಲ್ಲಿ ಅತಿಥಿಗಳು",
  },
  hi: {
    heading: "पहनावे का नियम",
    description:
      "हम आपसे अनुरोध करते हैं कि हमारे इस खास दिन की शैली और भावना को दर्शाने वाले सुरुचिपूर्ण परिधान पहनकर आएँ।",
    palette: "रंगों का चयन",
    imageAlt: "शानदार विवाह परिधानों में मेहमान",
  },
  ar: {
    heading: "قواعد اللباس",
    description:
      "ندعوكم بكل سرور لارتداء أزياء أنيقة تعكس أسلوب وروح يومنا المميز.",
    palette: "لوحة الألوان",
    imageAlt: "ضيوف يرتدون أزياء زفاف أنيقة",
  },
};

export default function DressCode() {
  const { language } = useLanguage();
  const content = translations[language] || translations.en;

  return (
    <ScrollReveal duration={1.4} distance={35} type="up">
      <section
        className="dress-code-section"
        lang={language}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="dress-code-heading">
          {content.heading}
        </h2>

        <img
          className="dress-code-divider"
          src="https://static.tildacdn.net/tild6239-3062-4232-a662-393266616664/line-divider2.png"
          alt=""
        />

        <p className="dress-code-description">
          {content.description}
        </p>

        <h3 className="palette-heading">
          {content.palette}
        </h3>

        <div className="palette-colors">
          {palette.map((color) => (
            <span
              key={color}
              className="palette-circle"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <img
          className="dress-code-artwork"
          src="https://static.tildacdn.net/tild3736-6638-4539-b133-393334313761/People_in_elegant_at.png"
          alt={content.imageAlt}
        />
      </section>
    </ScrollReveal>
  );
}
