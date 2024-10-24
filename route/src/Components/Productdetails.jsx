import React from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'

const Productdetails = () => {
  const { id } = useParams()
  // const location = useLocation()
  const pobj = useOutletContext();
    //this use param return the object literals
  return (

    <>
    
      <div className='details'>
        <img src={pobj[id - 1].Image} alt="" />
        
        <div>
          <p>{pobj[id - 1].Pname} @ {pobj[id - 1].price}</p>
          <p>{pobj[id - 1].des}</p>
          <h4>Shipping:{pobj[id - 1].shipping}</h4>
        </div>
        </div>
       
    </>




    // <div>
    //   {/* <h1>Product details {id}</h1>
    //   <h2>{JSON.stringify(location.state)}</h2> */}
    //   {/* <h2>{JSON.stringify(pobj [id-1])}</h2> */}
    // </div>
  )
}

export default Productdetails
