

import img1 from '../assets/images.jpeg';
import img2 from '../assets/041221_brows_embed-ee2c3c3b6d9a4129bbe6ee5665cc52ef.jpg';
import img3 from '../assets/makeup-products-flat-lay-variety-laid-out-white-surface-including-lipsticks-eyeshadow-palettes-blush-brushes-other-328225355.webp';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="Los Angeles" className="d-block" style={{ width: '100%', height: '50%'  }} />
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Chicago" className="d-block" style={{ width: '100%' , height: '50%' }} />
          </div>
          <div className="carousel-item">
            <img src={img3} alt="New York" className="d-block" style={{ width: '100%' , height: '50%' }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
