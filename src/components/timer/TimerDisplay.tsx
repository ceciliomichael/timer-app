"use client";

import { formatTime } from '@/lib/utils/time';

interface TimerDisplayProps {
  displayTime: number;
}

export function TimerDisplay({ displayTime }: TimerDisplayProps) {
  return (
    <div className="w-full bg-[#ffedd5] border border-orange-200 rounded-[24px] p-10 md:p-16 flex flex-col items-center justify-center transition-all duration-200 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] hover:-translate-y-[4px]">
      <div className="text-sm font-bold tracking-widest uppercase text-orange-600 mb-6">
        Time Elapsed
      </div>
      {/* Orange text, Bricolage font for huge numbers */}
      <div className="text-[96px] md:text-[144px] font-black tracking-tighter text-orange-500 leading-none display-text">
        {formatTime(displayTime)}
      </div>
    </div>
  );
}
