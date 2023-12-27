// CarouselSlider.js

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/slider.css';

const CarouselSlider = () => {
  const backgroundImageUrls = [
    'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg',
    'images/slide1.jfif',
    'https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg?height=506&width=711&fit=bounds'
  ];

  const calculateTimeLeft = () => {
    const difference = new Date('2024-05-11') - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    const titleText = "International Workshop on Smart Systems and Artificial Intelligence";
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedTitle(titleText.substring(0, index));
      index++;

      if (index > titleText.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <Carousel>
      {backgroundImageUrls.map((backgroundImageUrl, index) => (
        <Carousel.Item key={index}>
          <div className="slider-area position-relative" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundRepeat: 'no-repeat', color: 'white', backgroundSize: 'cover' }}>
            <div className="slider-active">
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10">
                      <div className="hero__caption1">
                        <h1 className='titre'>{typedTitle}</h1>
                        <div className='btn btnn1'>Contact us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="counter-section1 d-none d-sm-block">
              <div className="cd-timer1" id="countdown">
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.days}:</span>
                  <p className="lettre1">Days</p>
                </div>
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.hours}:</span>
                  <p className="lettre1">Hrs</p>
                </div>
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.minutes}:</span>
                  <p className="lettre1">Min</p>
                </div>
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.seconds}</span>
                  <p className="lettre1">Sec</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
