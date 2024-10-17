

import { Link, Outlet } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer style={{ backgroundColor: "#333", color: "white", padding: "20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          
          <div style={{ flex: 1, minWidth: "250px", margin: "10px" }}>
            <h3>About Us</h3>
            <p>
              We are a company dedicated to providing top-notch services<br/> and products to our customers.<br/>
              Our mission is to enhance the quality of life<br/> through innovative solutions.
            </p>
          </div>

          <div style={{ flex: 1, minWidth: "250px", margin: "10px" }}>
            <h3>Contact Us</h3>
            <p>Email: support@yourcompany.com<br/></p>
            <p>Phone: +123 456 7890<br/></p>
            <p>Address: 123 Your Street, Your City, Your Country<br/></p>
          </div>
          
        </div>
        
        <div style={{ marginTop: "20px" }}>
          <p> @SailStream All Rights Reserved.</p>
        </div>
      </footer>

      <Outlet />
    </>
  );
}

export default Footer;
