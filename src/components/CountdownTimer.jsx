import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-blue-600 text-white text-center py-5 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Countdown to Hackathon</h2>
      <div className="flex justify-center space-x-6 text-xl font-semibold">
        <div>
          <p className="text-4xl">{timeLeft.days}</p>
          <p>Days</p>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.hours}</p>
          <p>Hours</p>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.minutes}</p>
          <p>Minutes</p>
        </div>
        <div>
          <p className="text-4xl">{timeLeft.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
