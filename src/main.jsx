
import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundMusic from "./BackgroundMusic";
import EnvelopeCover from "./EnvelopeCover";
import InvitationContent from "./InvitationContent";
import { LanguageProvider } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import "./styles.css";


function App() {
  return (
    <LanguageProvider>
      <div className="invitation-app">
        <div className="fixed-background" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto">
            <source
              src="https://pub-4dc8201144ca418fb604349c73e8c724.r2.dev/Untitled%20Project.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <LanguageSelector />
        <BackgroundMusic />

        <InvitationContent />
        <EnvelopeCover />
      </div>
    </LanguageProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
