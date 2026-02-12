import { useState, useEffect } from "react";

const OTPTimer = ({ initialSeconds = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const resendOTP = () => {
    setTimeLeft(initialSeconds);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Verify OTP</h1>
        <input type="text" placeholder="Enter OTP" maxLength="4" />

        <div className="countdown-text">
          <p>
            Time Remaining:{" "}
            <span style={{ fontWeight: 700 }}>
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </span>
          </p>

          <button
            disabled={timeLeft > 0}
            style={{ color: timeLeft > 0 ? "#DFE3E8" : "#FF5630" }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
};

export default OTPTimer;
