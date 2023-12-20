// CarouselSlider.js

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/slider.css';

const CarouselSlider = () => {
  const backgroundImageUrls = [
    'https://www.evenement.com/wp-content/uploads/2019/09/samuel-pereira-uf2nnANWa8Q-unsplash-2-768x415.jpg',
    'https://i.pinimg.com/564x/e5/5b/d0/e55bd0f09f409f15fe638e507e349c1f.jpg',
    'https://i.pinimg.com/564x/f7/e5/3c/f7e53c57dc40cfe95e1c4289a760cc0d.jpg'
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
                      <div className="hero__caption">
                        <h1 className='titre'>{typedTitle}</h1>
                        <div className='btn btnn'>Contact us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="counter-section d-none d-sm-block">
              <div className="cd-timer" id="countdown">
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.days}:</span>
                  <p className="lettre">Days</p>
                </div>
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.hours}:</span>
                  <p className="lettre">Hrs</p>
                </div>
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.minutes}:</span>
                  <p className="lettre">Min</p>
                </div>
                <div style={{ display: 'inline-block', margin: '0 5px' }}>
                  <span className="cd-item">{timeLeft.seconds}</span>
                  <p className="lettre">Sec</p>
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
