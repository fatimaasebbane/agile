import '../css/collaboration.css'
const Collaboration = () => {
    return ( 
    <div>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800,900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet"/>
   
        <section className="pricing-section set-bg spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h1>Collaboration</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8">
                    <div className="price-item">
                    <div class="blog-img">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="images/emsi.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    </div>  
                    
                    <a href="https://emsi.ma/" className="price-btn">Savoir plus<span className="arrow_right"></span></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="price-item top-rated">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="images/3.png" alt=""/>
                            </div>
                        </div>
                    </div>
                        <a href="https://www.uca.ma/" className="price-btn">Savoir plus<span className="arrow_right"></span></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="price-item">
                    <div class="home-blog-single mb-30">
                        <div class="blog-img-cap">
                            <div class="blog-img">
                                <img src="images/bm.png" alt=""/>
                            </div>
                        </div>
                    </div>
                        <a href="https://www.usms.ac.ma/" className="price-btn">Savoir plus<span className="arrow_right"></span></a>
                    </div>
                </div>
            </div>
        </div>             
    </section>
    </div>
     );
}
 
export default Collaboration;