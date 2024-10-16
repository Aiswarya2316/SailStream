import img1 from '../images.jpeg'
import img2 from '../assets/hand-drawn-winter-twitch-banner_23-2149203867.avif'
import img3 from '../assets/228248231-poster-sale-bright-abstract-background-with-various-geometric-elements-a-composition-of-various.jpg'
function Home(){
    return(
        <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" className="d-block" style={{"width:100%"}}/>
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago" className="d-block" style={{"width:100%"}}/>
    </div>
    <div className="carousel-item">
      <img src={img3} alt="New York" className="d-block" style={{"width:100%"}}/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

</>
    )
}
export default Home