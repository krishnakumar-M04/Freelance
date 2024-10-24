import React, { useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(()=> {
      navigate(-1)
      // t5his navigate is moving to before page u have visit if u give -1
      // or u can give navigate('/') which will redirect to the link u have given 
     },1000)
   })
  return (
    <div>
      <h1>404 Page Not Found</h1>
      {/* <Navigate to="/about" /> */}
    </div>
  )
}

export default Notfound
