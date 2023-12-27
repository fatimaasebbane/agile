import React from "react";
import image from '../css/img/AB.png';
import '../css/style.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleDot} from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/footer";
import Header from "../components/navbar";
export const CallPepers = () => {
    const TextDecoration = {
        textDecoration: 'underline', 
    };
    const backgroundImageUrl = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg';
  
    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <div style={{ height: '580px' }}>
                    <div className="slider-area position-relative" style={{
                        backgroundImage: `url(${backgroundImageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        color: 'white',
                        backgroundSize: 'cover',
                        height: '100%', 
                        }}>
                        <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10">
                                <div className="hero__caption2">
                                <h1 className='papers_slider'>Call for papers</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            <section className="about-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-2 text-center"> 
                        <div className="about-pic">
                                <img  src={image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1"> 
                            <div className="about-text">
                                <div className="section-tittle mb-35">
                                <h2>The 2024 Conference</h2>
                                </div>
                                <p className="first-paragraph"> 
                                    <span className="large-text">T</span>he International Workshop on Smart Systems and Artificial Intelligence (ISSAI’2023)
                                    is organized by the Moroccan School of Engineering Sciences (EMSI) in collaboration with the
                                    Cadi Ayyad University (UCA) and Sultan Moulay Sliman University (USMS). This edition of the
                                    ISSAI’23 will be held on May, 25 – 26, 2023. Further details will soon be published.
                                    The main objective of the ISSAI’23 is to allow interested parties to discover the major
                                    technological advances related to AI and Smart Systems that have revolutionized the world today.
                                    This scientific event will also provide an opportunity for specialists to establish privileged
                                    contacts with the scientific community, especially with other research laboratories.
                                    In addition, this international workshop will be the ideal opportunity for doctoral students
                                    to sharpen their theoretical and practical knowledge, to meet specialists, to rub shoulders with
                                    them more closely, to prepare them to take over and to ensure the continuity of their research fields.
                                </p>
                                <h2 style={{fontFamily:'cursive'}}>Important Dates :</h2>
                                <ul style={{ paddingLeft: '50px',paddingTop:'20px' }}>
                                    <li>
                                    <FontAwesomeIcon icon={faCircleDot} /> <span style={{color:'#2e0e8ct'}}>Submission deadline:</span> Feb 26 , 2024 March 26 , 2024
                                    </li>
                                    <li>
                                    <FontAwesomeIcon icon={faCircleDot} />   Notification of acceptance: April 16, 2024
                                    </li>
                                    <li>
                                    <FontAwesomeIcon icon={faCircleDot} />  Submission deadline: Feb 26 , 2024 March 26 , 2024
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </div>
        
    );
};
