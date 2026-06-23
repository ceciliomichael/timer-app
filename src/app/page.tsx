import { TimerContainer } from '@/components/timer/TimerContainer';

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center p-6 md:p-24 bg-[#fffefa]">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <div className="reveal" style={{ animationDelay: '0ms' }}>
          <h1 className="text-5xl md:text-7xl font-black text-center mb-6 tracking-tight display-text text-[#1c1c1c]">
            Quirky Timer
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 mb-16 text-center max-w-lg mx-auto leading-relaxed">
            A timer that visually updates every <span className="font-bold text-orange-500">2 seconds</span>, but stays perfectly accurate behind the scenes.
          </p>
        </div>
        
        <TimerContainer />
      </div>
    </main>
  );
}
