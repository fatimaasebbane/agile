import React from 'react';
import Speakers from './Speakers';
import Livre from './Livre';

const About = () => {
  return (
    <>
    <section className="about-low-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              {/* Section Tittle */}
              <div className="section-tittle mb-35">
                <h2>ABOUT THE WORKSHOP</h2>
              </div>
              <p>
              The International Workshop on Smart Systems and Artificial Intelligence (ISSAI'2023) is organized by the Moroccan School of Engineering Sciences (EMSI) in collaboration with the Cadi Ayyad University (UCA) and Sultan Moulay Sliman University (USMS). This edition of the ISSAI’23 will be held on May, 25 - 26, 2023. Further details will soon be published. The main objective of the ISSAI’23 is to allow interested parties to discover the major technological advances related to AI and Smart Systems that have revolutionized the world today. This scientific event will also provide an opportunity for specialists to establish privileged contacts with the scientific community, especially with other research laboratories. In addition, this international workshop will be the ideal opportunity for doctoral students to sharpen their theoretical and practical knowledge, to meet specialists, to rub shoulders with them more closely, to prepare them to take over and to ensure the continuity of their research fields.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div className="single-caption mb-20">
                  <div className="caption-icon">
                    <span className="flaticon-communications-1"></span>
                  </div>
                  <div className="caption">
                    <h5>Where</h5>
                    <p>Marrakesh</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div className="single-caption mb-20">
                  <div className="caption-icon">
                    <span className="flaticon-education"></span>
                  </div>
                  <div className="caption">
                    <h5>When</h5>
                    <p>Mai. 21. 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn mt-50">
              Register Now
            </a>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* about-img */}
            <div className="about-img ">
              <div className="about-font-img d-none d-lg-block">
                <img src="assets/img/gallery/about2.png" alt="" />
              </div>
              <div className="about-back-img ">
                <img src="assets/img/gallery/about1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br /><br /><br /><br /><br /><br />


   </>
  );
};

export default About;
