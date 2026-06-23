"use client";

import { useTimer } from '@/hooks/useTimer';
import { TimerDisplay } from './TimerDisplay';
import { TimerControls } from './TimerControls';
import { useEffect, useState } from 'react';

export function TimerContainer() {
  const timer = useTimer();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[400px] w-full max-w-xl mx-auto" />; // Skeleton/placeholder space to prevent layout shift
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center reveal" style={{ animationDelay: '100ms' }}>
      <TimerDisplay displayTime={timer.displayTime} />
      <TimerControls 
        start={timer.start} 
        pause={timer.pause} 
        reset={timer.reset} 
        isRunning={timer.isRunning} 
      />
      
      {/* Dev debugging accurate time - per requirements, behind the scenes it is accurate */}
      <div className="mt-16 bg-[#f8f7f4] border border-[#e5e3db] py-3 px-6 rounded-full text-sm text-neutral-500 font-medium">
        Actual Behind-the-Scenes Time: <span className="font-mono text-neutral-800 ml-1">{timer.actualTime}s</span>
      </div>
    </div>
  );
}
