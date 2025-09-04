import React, { useEffect, useRef, useState } from "react";
import "./loader.css";

const shapes = ["×", "o", "+"];

interface RetroPeachLoaderProps {
  onLoadingComplete?: () => void;
  loadingDuration?: number; // in seconds
}

const RetroPeachLoader: React.FC<RetroPeachLoaderProps> = ({ 
  onLoadingComplete, 
  loadingDuration = 3 
}) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(loadingDuration);

  useEffect(() => {
    const container = bgRef.current;
    if (!container) return;
    
    // Clear previous shapes if any
    container.innerHTML = "";
    
    // Create background shapes
    for (let i = 0; i < 40; i++) {
      const span = document.createElement("span");
      span.classList.add("shape");
      span.innerText = shapes[Math.floor(Math.random() * shapes.length)];
      span.style.left = `${Math.random() * 100}%`;
      span.style.top = `${Math.random() * 100}%`;
      span.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(span);
    }
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + (loadingDuration * 1000);
    
    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const totalDuration = loadingDuration * 1000;
      
      if (currentTime >= endTime) {
        setProgress(100);
        setTimeLeft(0);
        onLoadingComplete?.();
        return;
      }
      
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      const newTimeLeft = Math.max(loadingDuration - (elapsed / 1000), 0);
      
      setProgress(newProgress);
      setTimeLeft(newTimeLeft);
      
      requestAnimationFrame(updateProgress);
    };
    
    const animationId = requestAnimationFrame(updateProgress);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [loadingDuration, onLoadingComplete]);

  return (
    <div className="loader-container">
      {/* Retro Background */}
      <div className="retro-bg" ref={bgRef}></div>
      
      {/* Tetris-style Loader */}
      <div className="tetris-loader">
        <div className="block block1"></div>
        <div className="block block2"></div>
        <div className="block block3"></div>
        <div className="block block4"></div>
      </div>
      
      {/* Loading Timer */}
      <div className="loading-timer">
        <div>Loading... </div>
        <div className="loading-progress">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RetroPeachLoader; 