import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
const Purchase = () => {
  const products = useSelector((state) => state.products)
  const loginDlt = useSelector((state) => state.loginDlt)
     const dispatch = useDispatch()
  const updateHandler = (e) => {
    console.log(e);
    const pName = e.target.options[e.target.selectedIndex].text;
    const price = e.target.value;
    let obj = { pName, price }
    dispatch({ type:"PURCHASE", payload: obj });
   }
  return (
    <div className="customDiv">
      <h3>Purchase Component - User:{loginDlt}</h3>
      <hr/>
      <select   onChange={(e)=>updateHandler(e)}>
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
  )
}

export default Purchase
