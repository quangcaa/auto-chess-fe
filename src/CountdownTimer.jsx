import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialMinutes = 0, initialSeconds = 0, isRunning = false, onTimeout ,key}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (!isRunning) return; // Stop the timer if not running

    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (minutes === 0 && seconds === 0) {
        clearInterval(countdown);
        if (onTimeout) {
          onTimeout(); // Call onTimeout when the timer reaches 0
        }
      }
    }, 1000);



    return () => clearInterval(countdown);
  }, [minutes, seconds, isRunning]);

  useEffect(() => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  }, [key]); 

  return (
    <div>
      <h1>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
    </div>
  );
};



export default CountdownTimer;