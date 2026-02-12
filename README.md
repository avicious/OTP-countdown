# OTP Countdown

A lightweight, reusable React component for handling **One-Time Password (OTP)** countdown logic. This project demonstrates state management with hooks, side-effect handling with `useEffect`, and clean UI updates.

---

## ✨ Features

- **Precision Countdown:** Uses a 1-second interval to track remaining time.
- **Smart Formatting:** Automatically formats single digits (e.g., `0:09` instead of `0:9`) using `padStart`.
- **Dynamic UI:** The "Resend OTP" button is automatically disabled and greyed out until the timer hits zero.
- **Memory Safe:** Properly clears intervals when the component unmounts to prevent memory leaks and "stale" state updates.

## 🚀 How It Works

The component manages a single state variable, `timeLeft`, representing the total seconds remaining.

1. **The Hook:** A `useEffect` hook monitors the time. If `timeLeft` is greater than 0, it sets a timer to decrement the value every second.
2. **The Logic:** Instead of managing minutes and seconds as separate states (which can get out of sync), we store one number and calculate the display values on every render:
   - **Minutes:** `Math.floor(totalSeconds / 60)`
   - **Seconds:** `totalSeconds % 60`
3. **The Reset:** Clicking "Resend OTP" resets the state to the initial value, which automatically triggers the `useEffect` to start counting down again.

## 🛠️ Installation & Usage

1. **Copy the component** into your project (e.g., `src/components/OTPTimer.jsx`).
2. **Import and use it** in your main application:

```jsx
import OTPTimer from "./components/OTPTimer";

function App() {
  return (
    <div className="App">
      {/* Set the timer for 2 minutes (120 seconds) */}
      <OTPTimer initialSeconds={120} />
    </div>
  );
}
```
