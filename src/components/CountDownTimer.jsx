import React, { useState, useEffect, useMemo } from 'react';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = useMemo(() => new Date('2023-12-23T00:00:00Z'), []); // Memoize the targetDate

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds
        });
      }
    };

    const intervalId = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
     {remainingTime.days}<span>D</span>
           {remainingTime.hours}<span>H</span>
      {remainingTime.minutes}<span>M</span>
      {remainingTime.seconds}<span>S</span>
    </div>
  );
};

export default CountdownTimer;
