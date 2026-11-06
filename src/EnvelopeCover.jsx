
import { useState } from "react";
import "./EnvelopeCover.css";
import { useLanguage } from "./LanguageContext";

const ENVELOPE_IMAGE =
  "https://static.tildacdn.net/tild6233-6433-4662-a437-316665346637/Gemini_Generated_Ima.png";

const FLAP_IMAGE =
  "https://static.tildacdn.net/tild6364-3438-4161-b964-613234643831/623915249_2629494717.png";

const SEAL_IMAGE =
  "https://static.tildacdn.net/tild3366-6538-4432-b138-323436663963/623915249_2629494717.png";

const ORNAMENT_IMAGE =
  "https://static.tildacdn.net/tild6566-6361-4436-a235-323435366264/line_flower_1.png";

const translations = {
  en: {
    instruction: "Click to open",
    ariaLabel: "Open the wedding invitation",
  },
  kn: {
    instruction: "ತೆರೆಯಲು ಒತ್ತಿರಿ",
    ariaLabel: "ವಿವಾಹ ಆಮಂತ್ರಣವನ್ನು ತೆರೆಯಿರಿ",
  },
  hi: {
    instruction: "खोलने के लिए क्लिक करें",
    ariaLabel: "विवाह निमंत्रण खोलें",
  },
  ar: {
    instruction: "اضغط للفتح",
    ariaLabel: "افتح دعوة الزفاف",
  },
};

export default function EnvelopeCover() {
  const [opened, setOpened] = useState(false);
  const { language } = useLanguage();

  const content = translations[language] || translations.en;

  return (
    <main className={`envelope-page ${opened ? "is-opened" : ""}`}>
      <section
        className={`envelope-scene ${opened ? "is-open" : ""}`}
        aria-label={content.ariaLabel}
      >
        <div className="envelope-canvas">
          {/* Original image layer 1: right-moving flap */}
          <div className="envelope-layer layer-right">
            <img src={ENVELOPE_IMAGE} alt="" />
          </div>

          {/* Original image layer 2: left-moving flap */}
          <div className="envelope-layer layer-left">
            <img src={ENVELOPE_IMAGE} alt="" />
          </div>

          {/* Original image layer 3: lower flap */}
          <div className="envelope-layer layer-bottom">
            <img src={ENVELOPE_IMAGE} alt="" />
          </div>

          {/* Original image layer 4: upper flap */}
          <div className="envelope-layer layer-top">
            <img src={FLAP_IMAGE} alt="" />
          </div>

          {/* Seal: click to start the original-style animation */}
          <button
            type="button"
            className="envelope-seal"
            onClick={() => {
  setOpened(true);
  window.dispatchEvent(new Event("invitation:play-music"));
}}
            disabled={opened}
            aria-label={content.ariaLabel}
          >
            <img src={SEAL_IMAGE} alt="" />
          </button>

          <p
            className="envelope-instruction"
            lang={language}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {content.instruction}
          </p>

          <img
            className="envelope-ornament"
            src={ORNAMENT_IMAGE}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
