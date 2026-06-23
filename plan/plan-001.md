# Timer Web Application Implementation Plan

## Goal Description
Create a simple Timer Web Application with a specific quirky behavior: the timer visually counts in 2-second increments, while maintaining 1-second accuracy behind the scenes. The application will be styled with an orange and yellow color theme.

## Architecture and Approach
Following the user-defined Next.js rules and strict Single Responsibility Principle (SRP):
- **Separation of Concerns:** We will split orchestration, state, UI, and utilities into distinct files.
- **Styling:** We'll use Tailwind CSS V4 for the orange and yellow theme, keeping it clean, restrained, and operational.
- **Framework:** Next.js App Router. State and interactivity will be confined to `"use client"` boundary files (hooks and leaf components).

## Proposed Changes

### Utilities & Types
#### [NEW] `src/lib/utils/time.ts`
- Helper functions to format time in `mm:ss` format.

#### [NEW] `src/types/timer.ts`
- TypeScript interfaces/types for timer state and control actions.

### State Management (Hooks)
#### [NEW] `src/hooks/useTimer.ts`
- A custom hook (`"use client"`) responsible for maintaining the accurate 1-second timer interval.
- It will expose a derived "display time" value that only updates visually every 2 seconds, while tracking the true time accurately.
- Will provide functions to start, pause, and reset the timer.

### UI Components
#### [NEW] `src/components/timer/TimerDisplay.tsx`
- `"use client"` component.
- The visual presentation of the timer (using the derived 2-second increment value).
- Styled with the requested orange and yellow theme.

#### [NEW] `src/components/timer/TimerControls.tsx`
- `"use client"` component.
- Buttons to Start, Pause, and Reset the timer.

#### [NEW] `src/components/timer/TimerContainer.tsx`
- `"use client"` component.
- Composes `TimerDisplay` and `TimerControls`.
- Calls the `useTimer` hook and orchestrates the state to the presentation components.

### App Route
#### [MODIFY] `src/app/page.tsx`
- Server Component (default).
- The main entry point for the Timer Web Application. 
- Imports and renders the `TimerContainer`.

## Verification Plan

### Automated Tests
- N/A for this simple UI iteration, but logic in `useTimer.ts` could be unit tested for the 2-second visual drift vs 1-second real accuracy.

### Manual Verification
1. Run `npm run dev` and navigate to `localhost:3000`.
2. Verify the visual theme strictly adheres to the orange and yellow requirements.
3. Start the timer and verify visually it only updates every 2 seconds (e.g., 00:00 -> 00:02 -> 00:04) but represents real elapsed time.
4. Pause and resume, ensuring the underlying accurate tracking is maintained without losing the true elapsed seconds.
