import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Product from "./component/Product";
import Footer from "./component/Footer";




function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
      <Route path="Footer" element={<Footer/>}/>
      <Route index element={<Home/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Product" element={<Product/>}/>




      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App