import React from 'react';
import Navbar from "../components/navbar"
import Footer from '../components/footer';
import '../css/committees.css'
function Committees() {
  const backgroundImageUrl = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg';
  
  return (
    <div className='commitee'>
        <Navbar/>
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
                                <h1 className='committees'>Committees</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>
        <br/>
       
      <div className='row Honorary_content'>
        
        <div className='col-md-6 '>
            <h3 className='Titre'>Honorary Chairs</h3>
            <div className='row'>
            <div className='col-md-6'>
            <div>
              <span className='nom_prof' >MOHAMED ESSAAIDI</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
              <span className='nom_prof' >NADIA KOUICEM</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
              <span className='nom_prof' >KHALID MEHDI</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <span className='nom_prof' >KARIM ALAMI</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
              <span className='nom_prof' >NADIA KOUICEM</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
              <span className='nom_prof' >KHALID MEHDI</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
          </div>
            </div>
        </div>
        <div className='col-md-6'>
            <h3 className='Titre'>General Chairs</h3>
        <div className='row'>
            <div className='col-md-6'>
            <div>
              <span className='nom_prof' >KHADIJA BOUZAACHANE</span>
              <p className='ecole'>UCA Morocoo</p>
            </div>
            <div>
              <span className='nom_prof'  >AZIZ DAROUICHI</span>
              <p className='ecole'>UCA Morocco</p>
            </div>
            <div>
              <span className='nom_prof' >NAOUAL MOUHNI</span>
              <p className='ecole'>EMSI Morocco</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <span className='nom_prof' >MOHAMED CHAKRAOUI</span>
              <p className='ecole'>USMS Morocco</p>
            </div>
            <div>
              <span className='nom_prof'>EL MAHDI EL GUARMAH</span>
              <p className='ecole'>ERA Morocco</p>
            </div>
          </div>
            </div>
        
        </div>
      </div>
      <br/>
      <br/>
      <div className='row organizing_content'>
        <h3 className='Titre'>Organizing Committee</h3>
        <div className='col-md-4 '>
            <div>
                <span className='nom_prof'>IBTISSAM AMALOU</span>
                <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
                <span className='nom_prof'>RAJA MOUACHI</span>
                <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
                <span className='nom_prof'>KHALIL TIDRIRI</span>
                <p className='ecole'>EMSI Morocco</p>
            </div>
        </div>
        <div className='col-md-4'>
            <div>
            <span className='nom_prof'>EL MEHDI ANIQ</span>
            <p className='ecole'>USMS Morocco</p>
            </div>
            <div>
            <span className='nom_prof'>HASSNAE REMMACH</span>
            <p className='ecole'>EMSI Morocco</p>
            </div>
            <div>
        </div>
        </div>
        <div className='col-md-4'>
          <div>
            <span className='nom_prof'>SOUMYA ELMAMOUNE</span>
            <p className='ecole'>EMSI Morocco</p>
          </div>
          <div>
            <span className='nom_prof'>IMANE SITI</span>
            <p className='ecole'>EMSI Morocco</p>
         </div>
        <div> 
        </div>
      </div>
    </div>

    <br/>
    <br/>
    <div className='row'>
        <h3 className='Titre'>Scientific Committee</h3>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
             
              <p className="card-text">
              <div className='scienticCommittees'>
                {/* <img src='images/icon.png' width="15px" height="15px" alt='icon' /> */}
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A ABDALI (FSTG,Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R ABOULAICH (EMI, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * B ACHCHAB (ENSA, Berrechid, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S ACHCHAB (ENSIAS, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A ADDAIM (EMI, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M AIRAJ (ENSA, Fes, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. Ameksa (EMSI, Marrakech,Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * L AMIR (FST, Marraech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S AZZOUZI (FSK, Kenitra, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * I. BAKKOURI (FP, Khouribga, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * H. BAIS (EMSI, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * O BENCHAREF (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M BENDIAB (Areva, Erlangen, Germany)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A BENGHABRIT (ENSMR, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M BENHADDI (FST, Marrakech Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * B BENHALA (FS, Meknes, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S BENKIRANE (ESTE, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * O. BENMESSAOUDA (EMSI, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * B. BENYACOUB (INSEA, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M BIERLAIRE (Polytechnic School of Lausanne, Switzerland)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A BOUDHIR (FST, Tanger, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M.S. BOUHLEL (ISBS, Sfax University, Tunisia)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S BOUJENA (FSAC, Casablanca, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * N BOURQUIA (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * P BOUVRY(University of Luxembourg, Luxembourg)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * K BOUZAACHANE (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S BOUJENA (FSAC, Casablanca, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * E. CHARAF (FSK, Kenitra, Morocco)</p>

              </div> 
            </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
             
              <p className="card-text">
              <div className='scienticCommittees'>
               <p className="nom_professeur" style={{fontSize:"15px"}}> * My. M. CHARAFI (FP, Khouribga, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * N. CHAULET (The Canoa Supply Co. PBC, Massachusetts, USA)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. DAROUICHI (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R. DOUIRI (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * H. EL GHAZI (INPT, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. El Ghotob Cheikh Tourad (FST, UNA, Mauritania)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * E. EL GUARMAH (Royal School of Aeronautics, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. EL HADAJ (ENCG, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. EL HIBAOUI (FS, Tetouan, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * K EL KARKOURI (Aix-Marseille, Marseille, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * K. EL MAGHRAOUI (IBM & Columbia University, USA)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * O. EL MESLOUHI (ENSA, SAFI, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. EL MOUMEN (FSAC, Casablanca, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * W. ELALEM (UM5, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A ELBOUSHAKI (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * T. ELGHAZALI (University of Lille, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * N. ELHAMI(ENSA, Kenitra, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A ELKALAY (EST, Casablanca, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R. ELLAIA (EMI, Casablanca, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R. FAKHAR (FP, Khouribga, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * Y. FAKHRI (FS, Kenitra, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. FAKIHI (ENSIAS, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. FATHI (FP, Khouribga, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * O. GOUASNOUANE (FST, Mohammedia, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. GUEZZAZ (ESTE, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * H. HACHIMI (USMS, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. HADMI (UM1, Montpellier, France)</p>

              </div> 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              
              <p className="card-text">
              <div className='scienticCommittees'>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. HAKIM (FSTG, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. HASNAOUI (FP, Khouribga, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * N. IDRISSI (USMS, Beni Mellal, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * F. IDRISSI KHAMLICHI (DEVOTEAM, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * Y. IRAQI (UM6P-CS, Ben Guerir, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * L. C. Iyad (INPT, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * Z. JARIR (FSSM , UCA, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * N. JENSEN(Ost-falia,Wolfenbüttel, Germany)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M KAICER (FS, Kenitra, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S KALOUN (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * J KATARINA (Slovak University of Technology, Bratislava)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S KHATRI (Amity university, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * Y. KHOURDIFI (FP, Khouribga, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S KUMAR (Amity University, Jaipur, Rajasthan, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. LACHGAR (ENSA, ELJADIDA, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A LAKHOUIT (Usherbrooke, Canada)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. M LAMARTI (ENS, Tetouan, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * Z. LAMGHARI (EST, Fes, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. LEBBAR (ENSMR, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * B. LOTFI (ENSA, Berrechid, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. Mabrouk (EST, Chouaïb Doukkali University, El-Jadida, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. MADHULIKA (LIX, Ecole Polytechnique-Palaiseau, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * F. MASULLI (University of Genova, Italy)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * I. MEDARHRI (ENSMR, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * C. MEHAR(Guru Kashi UniversityBathinda, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * L. MEKOUAR (UM6P-CS, Ben Guerir, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. MJAHED (Royal School of Aeronautics, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R. MOUACHI (EMSI, Marrakech, Morocco)</p>
                


              </div> 
                </p>
            </div>
          </div>
          </div>
          <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              
              <p className="card-text">
              <div className='scienticCommittees'>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * Y. MOURDI (PF, SAFI, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * N. MOUSSAID (FST, Mohammedia, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. OUAARAB (FST, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R. OUBAH (EMSI, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * P. PEREIRA (University NOVA of Lisbon, Portugal)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * F. POIRIER(UBS, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. POONIA (Amity University,, Rajasthan, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. QUASSIMI (FST, Marrakech, Marrakech)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. RAGHAY (FSTG, Marrakech, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. RAKRAK (FST, Marrakech, Morocco) </p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * I. REZNIKOV (Hyke, Dubai, United Arab Emirates)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. RIBAUDO (University of Genoa, Italy)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * B. RIYAMI (UBS, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. ROVETTA (University of Genova, Italy)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. SAAIDI (Capgemini Engineering - Hybrid Intelligence, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. SAID (Telecom-Tunis, Tunisie)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * R. SAIDI (INSEA, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. SBOUHLEL (SETIT, Tunisia)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. LEBBAR (ENSMR, Rabat, Morocco)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. SEN (University of Calcutta, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * H. SHAHRIAR (Kennesaw State University, USA)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. SIADAT (ENSAM, LCFC, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * P. SIARRY (University of Paris12, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S.B. SINGH (Punjabi University, Patiala, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * S. SO (GVels University, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * A. H. SYED (Daodil International University, India)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M. TAMI (Centrale Supélec & University Paris-Saclay, Paris, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * E TLELOCUAUTLE (INAOE, Mexico)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M TOLLENAERE (Grenoble-INP, France)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * M XIE (College of Science and Engineering, Hong Kong)</p>
                <p className="nom_professeur" style={{fontSize:"15px"}}> * F YALAOUI (UTT of Troyes, France)</p>
                 
              </div> 
              </p>
            </div>
          </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>

        <Footer/>
    </div>
  );
}

export default Committees;
