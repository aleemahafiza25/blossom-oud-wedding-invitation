
import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

const languages = [
  { code: "en", name: "English", native: "ENGLISH" },
  { code: "kn", name: "ಕನ್ನಡ", native: "KANNADA" },
  { code: "hi", name: "हिन्दी", native: "HINDI" },
  { code: "ar", name: "العربية", native: "ARABIC" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage =
    languages.find((item) => item.code === language) || languages[0];

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button
        className="language-trigger"
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-label="Choose language"
      >
        <span className="language-globe" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4.5" ry="10" />
            <path d="M2 12h20" />
          </svg>
        </span>

        <span className="language-trigger-name">
          {selectedLanguage.native}
        </span>

        <svg
          className={`language-chevron ${isOpen ? "is-open" : ""}`}
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              className={`language-option ${
                language === item.code ? "active" : ""
              }`}
              onClick={() => handleSelect(item.code)}
              aria-pressed={language === item.code}
            >
              <span className="language-option-name">
                {item.name}
              </span>

              <span className="language-option-native">
                {item.native}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
