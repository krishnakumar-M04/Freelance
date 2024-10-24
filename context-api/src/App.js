import {useState} from 'react';
import './App.css';
import Total from './components/Total';
import Cart from './components/Cart';
import totalContext from './Store/Total-context';
function App() {
  const products=[
    {pName:'Apple',price:20},
    {pName:'Banana',price:3},
    {pName:'Orange',price:10},
    {pName:'Grapes',price:8}
  ]
  const [cart,setProducts] = useState([]); 
  const [total,setTotal] = useState(0);

  let handleProdChange=(e)=>{
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart=[...cart];
    let obj = {pName,price};
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setProducts(tCart);
    setTotal(tPrice);

  }
 
  return (
    <div className="App">
     <div className="customDiv">
      <h3>Purchase Component</h3>
      <hr/>
      <select onChange={handleProdChange}>
        {
          products.map((product,index)=>{
            return(
            <option value={product.price} key={index}>
              {product.pName} - ${product.price}
            </option>
          )})
        }
      </select>
      </div>

      
   
      <totalContext.Provider  value={total}>
        <Total />
        <Cart cart={cart} />
        </totalContext.Provider>
    </div>
  );
}

export default App;
