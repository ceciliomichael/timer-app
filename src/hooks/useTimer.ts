"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import type { TimerState, TimerControls } from '../types/timer';

export function useTimer(): TimerState & TimerControls {
  const [actualTime, setActualTime] = useState(0);
  const [displayTime, setDisplayTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimerInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setActualTime((prev) => {
          const nextActual = prev + 1;
          // Update display time only on even seconds (2-second increments)
          // Wait, if we want it to visually count in 2-second increments, we should set displayTime to actualTime when actualTime is even, 
          // or just Math.floor(actualTime / 2) * 2. So e.g. actual: 0 -> 0, actual: 1 -> 0, actual: 2 -> 2.
          if (nextActual % 2 === 0) {
            setDisplayTime(nextActual);
          }
          return nextActual;
        });
      }, 1000);
    } else {
      clearTimerInterval();
    }

    return () => clearTimerInterval();
  }, [isRunning, clearTimerInterval]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setActualTime(0);
    setDisplayTime(0);
  }, []);

  return {
    actualTime,
    displayTime,
    isRunning,
    start,
    pause,
    reset,
  };
}
