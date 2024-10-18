// import img1 from '../assets/images.jpeg';
// import img2 from '../assets/041221_brows_embed-ee2c3c3b6d9a4129bbe6ee5665cc52ef.jpg';
// import img3 from '../assets/makeup-products-flat-lay-variety-laid-out-white-surface-including-lipsticks-eyeshadow-palettes-blush-brushes-other-328225355.webp';
// import React, { useState, useEffect } from "react";
// import  Footer from './Footer';
// import axios from 'axios';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [add, setAdd] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);

//   useEffect(() => {
//     axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
//       .then(response => setProducts(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   const viewProduct = (product) => {
//     setAdd(true);
//     setCurrentProduct(product);
//   };

//   return (
//     <>
    
//       <div id="demo" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
//           <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
//           <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
//         </div>

//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={img1} alt="Los Angeles" className="d-block" style={{ width: '100%', height: '50%' }} />
//           </div>
//           <div className="carousel-item">
//             <img src={img2} alt="Chicago" className="d-block" style={{ width: '75%', height: '25%' }} />
//           </div>
//           <div className="carousel-item">
//             <img src={img3} alt="New York" className="d-block" style={{ width: '100%', height: '50%' }} />
//           </div>
//         </div>

//         <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon"></span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//           <span className="carousel-control-next-icon"></span>
//         </button>
//       </div>

//       <div className="container mt-3">
//         <div className="row" id="a1">
//           {products.map(pro => (
//             <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
//               <div className="card" onClick={() => viewProduct(pro)}>
//                 <img className="card-img-top img-fluid" src={pro.image} alt="product image" />
//                 <div className="card-body">
//                   <h4 className='card-title'>{pro.p_name}</h4>
//                   <h6 className='card-text'>{pro.price}</h6>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {add ?(
//           <viewProduct
//           currentproduct={currentProduct}
//           />
//         ):console.log('view product  ')}
//       </div>
      
//       </> 
//   )
// }

// const ViewProduct=(currentproducts)=>{
//   const[product,setProduct]=useState(currentproducts)
//   document.getElementById("a1").style.display="none"
//   return(
//     <>
//     <div className='container'>
//     <div className='row g-4'>
//       <div className='col-lg-6 d-flex justify-content-center'>
//       <img src={product.currentproduct.image}alt="" className='img-fluid col-lg-12 w-75'/>  
//       </div>
//       <div className='desc col-lg-6'>
//         <h2>{product.currentproduct.p_name}</h2>
//         <p>{product.currentproduct.discription}</p>
//         <p>{product.currentproduct.price}</p>
//         <div className='row'>
//           <button className='btn btn-warning col-lg-10'>Add to cart</button>
//           <button className='btn btn-success col-lg-10 mt-1'>Buy now</button>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Home;


import img1 from '../assets/images.jpeg';
import img2 from '../assets/ss22_newarrivals.jpg';
import img3 from '../assets/Develop_a_plan_1024x1024.webp';
import React, { useState, useEffect } from "react";
import Footer from './Footer';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [add, setAdd] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const viewProduct = (product) => {
    setAdd(true);
    setCurrentProduct(product);
  };

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
            <img src={img1} alt="Los Angeles" className="d-block" style={{ width: '100%', height: '50%' }} />
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Chicago" className="d-block" style={{ width: '100%', height: '25%' }} />
          </div>
          <div className="carousel-item">
            <img src={img3} alt="New York" className="d-block" style={{ width: '100%', height: '50%' }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="container mt-3">
        <div className="row" id="a1">
          {products.map(pro => (
            <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
              <div className="card" onClick={() => viewProduct(pro)}>
                <img className="card-img-top img-fluid" src={pro.image} alt="product" />
                <div className="card-body">
                  <h4 className='card-title'>{pro.p_name}</h4>
                  <h6 className='card-text'>{pro.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {add && currentProduct ? (
          <ViewProduct currentProduct={currentProduct} />
        ) : (
          <p>Select a product to view details.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

const ViewProduct = ({ currentProduct }) => {
  if (!currentProduct) return null; // Safety check

  document.getElementById("a1").style.display = "none";
  document.getElementById("demo").style.display = "none";

  return (
    <div className='container'>
      <div className='row g-4'>
        <div className='col-lg-6 d-flex justify-content-center'>
          <img src={currentProduct.image} alt="" className='img-fluid col-lg-12 w-75' />
        </div>
        <div className='desc col-lg-6'>
          <h2>{currentProduct.p_name}</h2>
          <p>{currentProduct.description}</p>
          <p>{currentProduct.price}</p>
          <div className='row'>
            <button className='btn btn-warning col-lg-10'>Add to cart</button>
            <button className='btn btn-success col-lg-10 mt-1'>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

