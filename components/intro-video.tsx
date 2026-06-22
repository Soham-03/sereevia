'use client';

import { useEffect, useRef, useState } from 'react';

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handleEnded = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 900);
    };

    const tryPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error('Muted autoplay failed:', error);
      }
    };

    video.addEventListener('ended', handleEnded);
    tryPlay();

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`intro-video-overlay ${isFading ? 'is-fading-out' : ''}`}>
      <video
        ref={videoRef}
        className="intro-video-element"
        src="/intro/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}