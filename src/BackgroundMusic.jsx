
import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/audio/moghram.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.15;

    const startMusic = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Music could not start:", error);
      }
    };

    const handlePlayRequest = () => {
      startMusic();
    };

    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));

    window.addEventListener("invitation:play-music", handlePlayRequest);

    return () => {
      window.removeEventListener(
        "invitation:play-music",
        handlePlayRequest
      );
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Music could not start:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="auto"
      />

      <button
        type="button"
        className={`music-toggle ${isPlaying ? "is-playing" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "♫" : "♪"}
      </button>
    </>
  );
}
