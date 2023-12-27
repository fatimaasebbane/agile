import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: '#2e0e8c' ,fontFamily: "'Roboto',sans-serif", fontWeight: 'normal',fontStyle: 'normal'}}>

        <div className="me-5 d-none d-lg-block">
          <span style={{fontSize:'20px' ,fontWeight:'500', color : 'white'}}>Get connected with us on social networks:</span>
        </div>

        <div style={{color:'white'}}>
          <a href="#" className="me-4 text-reset" >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h5 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>ISSAI Conference
              </h5>
              <p style={{color:'black'}}>
                This edition of the ISSAI’24 will be held on May, 25 – 26, 2024. Further details will soon be published
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style= {{fontFamily: "'Roboto',sans-serif", fontWeight: 'normal',fontStyle: 'normal',color:'black'}} >


              <h5 className="text-uppercase fw-bold mb-4">
                Useful links
              </h5>
              <p>
                <a href="#!" className="text-reset">Soumission</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contact</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Program</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Speakers</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Venue</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{color:'black'}}>

              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <p><i className="fas fa-home me-3"></i>05 lot bouizgaren, Rte de Safi, Marrakech 40000</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                iwssai23@sciencesconf.org
              </p>
              <p><i className="fas fa-phone me-3"></i> + 212 234 567 88</p>
            
            </div>

          </div>

        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: '#2e0e8c',color:'white' }}>
        © 2024 Copyright: ISSAI 
      </div>

    </footer>
  );
};

export default Footer;
