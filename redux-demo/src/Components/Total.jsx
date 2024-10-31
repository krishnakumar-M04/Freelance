import React from 'react'
import { useSelector} from 'react-redux'
const Total = () => {
  const total = useSelector((state) => state.total)
  const loginDlt = useSelector((state) => state.loginDlt)
  return (
    <div className="customDiv">
      <h3>Total Component - user:{loginDlt}</h3>
    <hr/>
        <h2>Total : {total}</h2>
       </div> 
  )
}

export default Total
