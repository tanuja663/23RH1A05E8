import React from "react";
import './App.css'

function App(){
  return(
     <div className="product">
      <h1><b>JUDEY</b></h1>
      <section>
        <h3>laptops</h3>
        <div className="hi"></div>
        <img src="https://m.media-amazon.com/images/I/71bagLp2sXL._SX679_.jpg"alt="local-product"></img>
        <p>HP 15, 13th Gen Intel Core i5-1335U Laptop (16GB DDR4,512GB SSD) Anti-Glare, Micro-edge,15.6''/39.6cm, FHD, Win11,M365,Office24, Silver,1.59kg, Iris Xe Graphics, FHD Camera w/privacy shutter, fd0577TU</p>
        <p>price:$55,890</p>
        <button>🛒Add to cart</button>
      </section>
      <footer>copy rights @2025</footer>
     </div>
  );
}
export default App;