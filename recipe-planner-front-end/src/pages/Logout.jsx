import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  let navigate = useNavigate()
  localStorage.removeItem('userid')

  useEffect(() => {
    if (localStorage.getItem('userid') === null) navigate("/login")
  }, [])

  return (<></>)
}

export default Logout
