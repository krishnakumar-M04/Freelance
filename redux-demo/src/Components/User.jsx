import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const User = () => {
    const users = useSelector((state) => state.users)
    const loginDlt = useSelector((state) => state.loginDlt)
     const dispatch = useDispatch()
    const updateUser = (e) => {
        const userName = e.target.options[e.target.selectedIndex].text;
        dispatch({ type: 'LOGIN', payLoad:userName  })
    }
  return (
      <div className='customDiv'>
          <h3>Login Component- user :{loginDlt} </h3>
          <select name="" id="" onChange={(e)=>updateUser(e)}>
              
              {
                  users.map((user, index) => {
                      return (
                          <option key={index}>
                              {user}
                          </option>
                      )
                  })
              }
        </select>
    </div>
  )
}

export default User
