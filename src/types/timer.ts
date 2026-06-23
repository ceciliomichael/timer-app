export interface TimerState {
  actualTime: number;
  displayTime: number;
  isRunning: boolean;
}

export interface TimerControls {
  start: () => void;
  pause: () => void;
  reset: () => void;
}
