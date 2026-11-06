
import React, { useState } from "react";
import "./RSVP.css";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    heading: "Confirm Your Presence",
    name: "Your Name",
    guests: "Number of Guests",
    attendance: "Will you be attending?",
    yes: "Yes, I'll be attending",
    no: "Sorry, I won't be able to attend",
    submit: "SUBMIT",
    selectAttendance: "Please select your attendance.",
    thankYou: "Thank you for your response!",
  },

  kn: {
    heading: "ನಿಮ್ಮ ಆಗಮನವನ್ನು ಖಚಿತಪಡಿಸಿ",
    name: "ನಿಮ್ಮ ಹೆಸರು",
    guests: "ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ",
    attendance: "ನೀವು ಸಮಾರಂಭಕ್ಕೆ ಆಗಮಿಸುತ್ತೀರಾ?",
    yes: "ಹೌದು, ನಾನು ಆಗಮಿಸುತ್ತೇನೆ",
    no: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಆಗಮಿಸಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ",
    submit: "ಸಲ್ಲಿಸಿ",
    selectAttendance: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಗಮನವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    thankYou: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!",
  },

  hi: {
    heading: "अपनी उपस्थिति की पुष्टि करें",
    name: "आपका नाम",
    guests: "मेहमानों की संख्या",
    attendance: "क्या आप समारोह में शामिल होंगे?",
    yes: "हाँ, मैं शामिल होऊँगा/होऊँगी",
    no: "क्षमा करें, मैं शामिल नहीं हो पाऊँगा/पाऊँगी",
    submit: "जमा करें",
    selectAttendance: "कृपया अपनी उपस्थिति चुनें।",
    thankYou: "आपकी प्रतिक्रिया के लिए धन्यवाद!",
  },

  ar: {
    heading: "تأكيد الحضور",
    name: "اسمك",
    guests: "عدد الضيوف",
    attendance: "هل ستحضرون الحفل؟",
    yes: "نعم، سأحضر",
    no: "عذراً، لن أتمكن من الحضور",
    submit: "إرسال",
    selectAttendance: "يرجى تحديد حالة الحضور.",
    thankYou: "شكراً لكم على ردكم!",
  },
};

export default function RSVP() {
  const { language } = useLanguage();
  const content = translations[language] || translations.en;

  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!attendance) {
      setMessage(content.selectAttendance);
      return;
    }

    setMessage(content.thankYou);

    // Connect your RSVP backend here when ready.
    console.log({
      name,
      guestCount,
      attendance,
    });
  };

  return (
    <ScrollReveal duration={1.4} distance={35} type="up">
      <section
        className="rsvp-section"
        lang={language}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <h2 className="rsvp-heading">
          {content.heading}
        </h2>

        <img
          className="rsvp-divider"
          src="https://static.tildacdn.net/tild6239-3062-4232-a662-393266616664/line-divider2.png"
          alt=""
        />

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="rsvp-field">
            <label htmlFor="rsvp-name">
              {content.name}
            </label>

            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="rsvp-field">
            <label htmlFor="rsvp-guests">
              {content.guests}
            </label>

            <input
              id="rsvp-guests"
              type="number"
              min="1"
              max="10"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              required
            />
          </div>

          <div className="rsvp-field">
            <label>{content.attendance}</label>

            <div className="rsvp-choices">
              <button
                type="button"
                className={`rsvp-choice ${
                  attendance === "yes" ? "is-selected" : ""
                }`}
                onClick={() => {
                  setAttendance("yes");
                  setMessage("");
                }}
              >
                {content.yes}
              </button>

              <button
                type="button"
                className={`rsvp-choice ${
                  attendance === "no" ? "is-selected" : ""
                }`}
                onClick={() => {
                  setAttendance("no");
                  setMessage("");
                }}
              >
                {content.no}
              </button>
            </div>
          </div>

          <button className="rsvp-submit" type="submit">
            {content.submit}
          </button>

          {message && (
            <p className="rsvp-feedback" role="status">
              {message}
            </p>
          )}
        </form>
      </section>
    </ScrollReveal>
  );
}
