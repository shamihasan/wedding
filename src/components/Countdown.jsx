import { useState, useEffect } from 'react';
import { getWeddingDateTime, getCoupleNames } from '../config/weddingConfig';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);
  const coupleNames = getCoupleNames();

  useEffect(() => {
    const weddingDate = getWeddingDateTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        setIsWeddingDay(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isWeddingDay) {
    return (
      <div className="wedding-day-message">
        <div className="celebration-icons">
          <span className="celebration-icon">🎊</span>
          <span className="celebration-icon">💑</span>
          <span className="celebration-icon">🎉</span>
        </div>
        <h2 className="wedding-day-title script-font">Mission Accomplished!</h2>
        <p className="wedding-day-text">
          {coupleNames.full} are officially off the market! 💍
        </p>
        <p className="wedding-day-subtext">
          They survived the wedding planning, conquered the dance floor,
          and are now happily married! 🎊 <br />
          Next challenge: Deciding where to eat for the rest of their lives. 😄
        </p>
        <div className="wedding-day-hearts">
          <span>🥳</span>
          <span>❤️</span>
          <span>🎂</span>
          <span>💕</span>
          <span>🥂</span>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-grid">
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{timeLeft.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
