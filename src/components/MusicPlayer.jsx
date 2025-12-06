import React, { useEffect, useRef, useState } from 'react';
import bgMusic from '../assets/audio/bg1.mp3';

export default function MusicPlayer({ autoStart = false }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [muted, setMuted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startMusic = async () => {
      if (startedRef.current) return;
      startedRef.current = true;
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
      detach();
    };

    // Attach multiple gestures to be robust across devices/containers
    const events = [
      ['click', false],
      ['keydown', false],
      ['touchstart', false],
      ['touchmove', true],
      ['pointerdown', false],
      ['wheel', true],  
      ['scroll', true], // window scroll
    ];

    const onGesture = () => startMusic();

    const attach = () => {
      // window-level
      events.forEach(([name, passive]) => {
        window.addEventListener(name, onGesture, { passive, capture: true });
        document.addEventListener(name, onGesture, { passive, capture: true });
      });
    };
    const detach = () => {
      events.forEach(([name]) => {
        window.removeEventListener(name, onGesture, true);
        document.removeEventListener(name, onGesture, true);
      });
    };

    attach();
    return detach;
  }, []);

  // Pause music when the window/tab loses focus or becomes hidden
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const pauseAudio = async () => {
      try {
        await audio.pause();
        setPlaying(false);
      } catch {}
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        pauseAudio();
      }
    };
    const onBlur = () => pauseAudio();

    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('blur', onBlur);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        await audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {}
  };

  return (
    <div style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 9999, background: '#fff', borderRadius: 12, boxShadow: '0 8px 20px rgba(0,0,0,0.15)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 ,  display: 'none'}}>
      <audio ref={audioRef} src={bgMusic} loop playsInline preload="auto" />
      <button onClick={togglePlay} style={{ padding: '6px 10px' }}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        Vol
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        Mute
        <input type="checkbox" checked={muted} onChange={(e) => setMuted(e.target.checked)} />
      </label>
    </div>
  );
}
