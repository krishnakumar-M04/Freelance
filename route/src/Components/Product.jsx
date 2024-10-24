import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Product = () => {
  const [products, setProduct] = useState([
    {
      id: 1,
      Pname: "Apple",
      des: "Red Juciy Apple",
      shipping: "$3",
       price: "$45",
      Image:'https://freepngimg.com/thumb/apple/153776-golden-apple-free-download-png-hq.png'
    },
    {
      id: 2,
      Pname: "Banana",
      des: "Red Juciy banana",
      shipping: "$3",
       price: "$68",
      Image:'https://freepngimg.com/thumb/banana/5-2-banana-png-hd-thumb.png'
    },
    {
      id: 3,
      Pname: "Kiwi",
      des: "Red Juciy kiwi",
      shipping: "$3",
       price: "$28",
      Image:'https://freepngimg.com/thumb/kiwi/33941-7-kiwi-slice-thumb.png'
    },
    {
      id: 4,
      Pname: "Orange",
      des: "Red Juciy orange",
      shipping: "$3",
       price: "$88",
      Image:'https://freepngimg.com/thumb/orange/55-orange-png-image-download-thumb.png'
    },

  ])
  return (
    <div>
 
      <ul>
        {
          products.map((prod) => {
            return (
              <li key={prod.id} className="card">
                <NavLink to={`/products/${prod.id}`} >
                  <img src={prod.Image} alt="" />
                  <div className="text">
                    <h2>{prod.Pname}</h2>
                  </div>
                </NavLink>
        </li>
            )
          })
        }
        
        </ul>
        <Outlet context={products} />
     
      {/* outlet will decide in  which child component is to be loaded  */}
    </div>
  );
};

export default Product;
