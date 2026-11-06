
import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 1.2,
  distance = 30,
  type = "up",
  className = "",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const initialTransform =
    type === "up"
      ? `translateY(${distance}px)`
      : type === "down"
      ? `translateY(-${distance}px)`
      : type === "left"
      ? `translateX(${distance}px)`
      : type === "right"
      ? `translateX(-${distance}px)`
      : "scale(0.92)";

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        "--reveal-delay": `${delay}s`,
        "--reveal-duration": `${duration}s`,
        "--reveal-transform": initialTransform,
      }}
    >
      {children}
    </div>
  );
}
