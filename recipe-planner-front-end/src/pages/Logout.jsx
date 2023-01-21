import { useNavigate } from 'react-router-dom'

function Logout() {
  let navigate = useNavigate()
  localStorage.removeItem('userid')

  return (
    <>
      <div>
        <h3>You successfully log out from your account</h3>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </>
  )
}

export default Logout
