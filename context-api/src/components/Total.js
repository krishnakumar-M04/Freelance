import { useContext } from 'react';
import totalContext from '../Store/Total-context'
const Total = () => {
    const total = useContext(totalContext)
    return (
     
                        <div className="customDiv">
                        <h3>Total Component</h3>
                        <hr/>
                            <h2>Total : {total}</h2>
                           </div>  
                 
    )
}
export default Total;