
import { useContext } from 'react'
import totalContext from '../Store/Total-context'
const Cart = (props) => {

     const total = useContext(totalContext)
    return (
    
                        <div className="customDiv">
                        <h3>Cart Component</h3>
                        <hr/>
                         <ul>
                           {
                             props.cart.map((product,index)=>{
                               return(
                                 <li key={index}>{product.pName} </li>
                               )
                             })
                           }
                            </ul>
                              {total}
                           </div>
           
            
    )
}
export default Cart;