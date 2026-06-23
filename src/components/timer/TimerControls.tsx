"use client";

import type { TimerControls } from '@/types/timer';

interface TimerControlsProps extends TimerControls {
  isRunning: boolean;
}

export function TimerControls({ start, pause, reset, isRunning }: TimerControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-8 w-full">
      {!isRunning ? (
        <button
          onClick={start}
          className="flex-1 min-w-[140px] bg-orange-500 text-white font-bold text-lg px-8 py-5 rounded-[16px] transition-all duration-150 hover:brightness-105 active:scale-95 shadow-[0_4px_12px_rgba(249,115,22,0.2)]"
        >
          Start Timer
        </button>
      ) : (
        <button
          onClick={pause}
          className="flex-1 min-w-[140px] bg-yellow-400 text-[#1c1c1c] font-bold text-lg px-8 py-5 rounded-[16px] transition-all duration-150 hover:brightness-105 active:scale-95 shadow-[0_4px_12px_rgba(250,204,21,0.2)]"
        >
          Pause Timer
        </button>
      )}
      
      <button
        onClick={reset}
        className="bg-transparent border-2 border-orange-200 text-orange-600 font-bold text-lg px-8 py-5 rounded-[16px] transition-all duration-150 hover:bg-orange-50 active:scale-95"
      >
        Reset
      </button>
    </div>
  );
}
