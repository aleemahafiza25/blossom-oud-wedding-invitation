
import React, { useEffect, useRef, useState } from "react";
import VenueSection from "./VenueSection";
import DressCode from "./DressCode";
import DressCodeGuidelines from "./DressCodeGuidelines";
import RSVP from "./RSVP";
import GoogleMap from "./GoogleMap";
import ClosingSection from "./ClosingSection";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const HERO_VIDEO =
  "https://pub-4dc8201144ca418fb604349c73e8c724.r2.dev/Luxury_illustration_with_atmosph%E2%80%A6_202605232035%20(1).mp4";

const translations = {
  en: {
    date: "20 May 2027",
    time: "From 4:00 PM",
    invitationHeading: "Wedding Invitation",
    invitationLines: [
      "Miss Amira and Mr. Yusuf",
      "are delighted and honoured to invite you",
      "to celebrate their wedding",
      "on Thursday, 20 May 2027",
      "at 4:00 PM",
      "at",
    ],
    countdown: "The Celebration Begins",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    timeline: "Event Timeline",
    events: [
      "Welcome Reception",
      "Nikah Ceremony",
      "Dinner",
      "Party",
    ],
  },

  kn: {
    date: "20 ಮೇ 2027",
    time: "ಸಂಜೆ 4:00 ಗಂಟೆಯಿಂದ",
    invitationHeading: "ವಿವಾಹ ಆಮಂತ್ರಣ",
    invitationLines: [
      "ಕುಮಾರಿ ಅಮೀರಾ ಮತ್ತು ಶ್ರೀ ಯೂಸುಫ್",
      "ತಮ್ಮ ವಿವಾಹ ಸಮಾರಂಭಕ್ಕೆ ನಿಮ್ಮನ್ನು",
      "ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತಾರೆ",
      "ಗುರುವಾರ, 20 ಮೇ 2027 ರಂದು",
      "ಸಂಜೆ 4:00 ಗಂಟೆಗೆ",
      "ಸ್ಥಳ",
    ],
    countdown: "ಸಂಭ್ರಮ ಆರಂಭವಾಗಲಿದೆ",
    days: "ದಿನಗಳು",
    hours: "ಗಂಟೆಗಳು",
    minutes: "ನಿಮಿಷಗಳು",
    seconds: "ಸೆಕೆಂಡುಗಳು",
    timeline: "ಕಾರ್ಯಕ್ರಮದ ವೇಳಾಪಟ್ಟಿ",
    events: [
      "ಸ್ವಾಗತ ಸಮಾರಂಭ",
      "ನಿಕಾಹ್ ಸಮಾರಂಭ",
      "ಊಟ",
      "ಸಂಭ್ರಮ",
    ],
  },

  hi: {
    date: "20 मई 2027",
    time: "शाम 4:00 बजे से",
    invitationHeading: "विवाह निमंत्रण",
    invitationLines: [
      "अमीरा और यूसुफ",
      "आपको अपने विवाह समारोह में",
      "सादर आमंत्रित करते हैं",
      "गुरुवार, 20 मई 2027 को",
      "शाम 4:00 बजे",
      "स्थान",
    ],
    countdown: "जश्न शुरू होने वाला है",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
    timeline: "कार्यक्रम की समय-सारणी",
    events: [
      "स्वागत समारोह",
      "निकाह समारोह",
      "रात्रिभोज",
      "जश्न",
    ],
  },

  ar: {
    date: "20 مايو 2027",
    time: "ابتداءً من الساعة الرابعة مساءً",
    invitationHeading: "دعوة زفاف",
    invitationLines: [
      "الآنسة أميرة والسيد يوسف",
      "يسعدهما ويشرفهما أن يدعوا حضرتكم الكريمة",
      "لمشاركتهما فرحة حفل زفافهما",
      "يوم الخميس 20 مايو 2027",
      "على الساعة الرابعة مساءً",
      "بقاعة",
    ],
    countdown: "يبدأ الاحتفال",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثوانٍ",
    timeline: "برنامج الحفل",
    events: [
      "استقبال الضيوف",
      "مراسم عقد القران",
      "العشاء",
      "الاحتفال",
    ],
  },
};

function WeddingCountdown({ content }) {
  const weddingDate = new Date("2027-05-20T16:00:00");

  const calculateTime = () => {
    const difference = weddingDate.getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (number) => String(number).padStart(2, "0");

  return (
    <ScrollReveal duration={1.4} distance={35} type="up">
      <section className="countdown-section">
        <h2 className="countdown-heading">
          {content.countdown}
        </h2>

        <img
          className="countdown-ornament"
          src="https://static.tildacdn.net/tild6239-3062-4232-a662-393266616664/line-divider2.png"
          alt=""
        />

        <div className="countdown-container">
          {[
            ["days", content.days],
            ["hours", content.hours],
            ["minutes", content.minutes],
            ["seconds", content.seconds],
          ].map(([key, label], index) => (
            <React.Fragment key={key}>
              {index > 0 && (
                <span className="countdown-separator">:</span>
              )}

              <div className="countdown-item">
                <span className="countdown-number">
                  {format(time[key])}
                </span>
                <span className="countdown-label">{label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function EventTimeline({ content }) {
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const flower = flowerRef.current;

    if (!section || !flower) return;

    let animationFrame;

    const updateFlower = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();

        const startPosition =
          window.scrollY + rect.top - window.innerHeight * 0.35;

        const distanceScrolled =
          window.scrollY - startPosition;

        const progress = Math.max(
          0,
          Math.min(1, distanceScrolled / 350)
        );

        const rotation = progress * 134;
        const movement = progress * 247;

        flower.style.transform =
          `translate3d(0, ${movement}px, 0) rotate(${rotation}deg)`;
      });
    };

    window.addEventListener("scroll", updateFlower, {
      passive: true,
    });

    window.addEventListener("resize", updateFlower);

    updateFlower();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateFlower);
      window.removeEventListener("resize", updateFlower);
    };
  }, []);

  const events = [
    { time: "16:00", title: content.events[0] },
    { time: "17:00", title: content.events[1] },
    { time: "19:00", title: content.events[2] },
    { time: "20:00", title: content.events[3] },
  ];

  return (
    <ScrollReveal duration={1.5} distance={35} type="up">
      <section ref={sectionRef} className="timeline-section">
        <h2 className="timeline-heading">
          {content.timeline}
        </h2>

        <img
          className="timeline-divider"
          src="https://static.tildacdn.net/tild6239-3062-4232-a662-393266616664/line-divider2.png"
          alt=""
        />

        <div className="timeline-content">
          <div className="timeline-vertical-line" />

          <img
            ref={flowerRef}
            className="timeline-main-flower"
            src="https://static.tildacdn.net/tild6363-6164-4231-a362-383563623535/flower-decor.png"
            alt=""
          />

          {events.map((event) => (
            <div className="timeline-event" key={event.time}>
              <span className="timeline-time">
                {event.time}
              </span>

              <span className="timeline-title">
                {event.title}
              </span>
            </div>
          ))}

          {[198, 280, 368, 445].map((position) => (
            <img
              key={position}
              className="timeline-small-flower"
              style={{ top: `${position}px` }}
              src="https://static.tildacdn.net/tild6335-6235-4431-a638-396563386331/Decoration_elements_.png"
              alt=""
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default function InvitationContent() {
  const { language } = useLanguage();

  const content = translations[language] || translations.en;

  return (
    <main
      className="invitation-content"
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* First page */}
      <section className="invitation-hero">
        <div className="hero-artwork">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>

        <div className="hero-top-line" />

        <div className="hero-copy">
          <h1 className="hero-names">
            <span className="hero-name hero-name-amira">
              Amira
            </span>

            <span className="hero-ampersand">&amp;</span>

            <span className="hero-name hero-name-yusuf">
              Yusuf
            </span>
          </h1>

          <div className="hero-details">
            <p className="hero-date">{content.date}</p>
            <p className="hero-time">{content.time}</p>
          </div>
        </div>
      </section>

      {/* Formal invitation */}
      <ScrollReveal duration={1.5} distance={35} type="up">
        <section className="formal-invitation-page">
          <div className="formal-invitation-frame">
            <img
              className="formal-frame-image"
              src="https://static.tildacdn.net/tild6634-6438-4366-b831-343330323762/frsame_1.png"
              alt=""
            />

            <img
              className="formal-top-ornament"
              src="https://static.tildacdn.net/tild6131-6532-4465-a338-653839313434/Group_204_2.png"
              alt=""
            />

            <img
              className="formal-bismillah-flower"
              src="https://static.tildacdn.net/tild3830-3661-4865-a130-306631633264/Vector.png"
              alt=""
            />

           
<div className="formal-invitation-copy">
  <div
    className="formal-arabic-text"
    lang={language}
    dir={language === "ar" ? "rtl" : "ltr"}
  >
    {content.invitationLines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.invitationLines.length - 1 && <br />}
      </React.Fragment>
    ))}
  </div>

  <h2 className="formal-venue">
    Beldi Country Club
  </h2>
</div>


            <img
              className="formal-bottom-ornament"
              src="https://static.tildacdn.net/tild6566-6361-4436-a235-323435366264/line_flower_1.png"
              alt=""
            />
          </div>
        </section>
      </ScrollReveal>

      <WeddingCountdown content={content} />
      <EventTimeline content={content} />

      <VenueSection />
      <DressCode />
      <DressCodeGuidelines />
      <RSVP />
      <GoogleMap />
      <ClosingSection />
    </main>
  );
}
