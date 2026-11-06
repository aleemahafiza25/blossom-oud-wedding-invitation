
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    ladies: "Ladies",
    ladiesDescription:
      "Formal dresses in elegant, polished styles are encouraged.",
    gentlemen: "Gentlemen",
    gentlemenDescription:
      "Well-tailored suits with classic dress shoes are preferred.",
  },

  kn: {
    ladies: "ಮಹಿಳೆಯರು",
    ladiesDescription:
      "ಸೊಗಸಾದ ಮತ್ತು ಆಕರ್ಷಕ ಶೈಲಿಯ ಔಪಚಾರಿಕ ಉಡುಪುಗಳನ್ನು ಧರಿಸಲು ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುತ್ತದೆ.",
    gentlemen: "ಪುರುಷರು",
    gentlemenDescription:
      "ಅಚ್ಚುಕಟ್ಟಾಗಿ ಹೊಲಿಯಲಾದ ಸೂಟ್‌ಗಳು ಮತ್ತು ಕ್ಲಾಸಿಕ್ ಫಾರ್ಮಲ್ ಶೂಗಳನ್ನು ಧರಿಸಲು ಆದ್ಯತೆ ನೀಡಲಾಗುತ್ತದೆ.",
  },

  hi: {
    ladies: "महिलाएँ",
    ladiesDescription:
      "सुरुचिपूर्ण और आकर्षक शैली के औपचारिक परिधान पहनने का सुझाव दिया जाता है।",
    gentlemen: "पुरुष",
    gentlemenDescription:
      "अच्छी फिटिंग वाले सूट और क्लासिक फॉर्मल जूते पहनना पसंद किया जाता है।",
  },

  ar: {
    ladies: "السيدات",
    ladiesDescription:
      "يُفضّل ارتداء فساتين رسمية بأناقة وإطلالة راقية.",
    gentlemen: "السادة",
    gentlemenDescription:
      "يُفضّل ارتداء بدلات أنيقة ومفصّلة بعناية مع أحذية رسمية كلاسيكية.",
  },
};

export default function DressCodeGuidelines() {
  const { language } = useLanguage();
  const content = translations[language] || translations.en;

  return (
    <ScrollReveal duration={1.4} distance={30} type="up">
      <section
        className="dress-guidelines-section"
        lang={language}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="dress-guideline">
          <h3>{content.ladies}</h3>
          <p>{content.ladiesDescription}</p>
        </div>

        <div className="dress-guideline">
          <h3>{content.gentlemen}</h3>
          <p>{content.gentlemenDescription}</p>
        </div>
      </section>
    </ScrollReveal>
  );
}
