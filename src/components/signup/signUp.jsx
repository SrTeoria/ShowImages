import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'



export const SignUp = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const { data } = await axios({
        method: 'POST',
        baseURL: import.meta.env.VITE_SERVER_URL,
        url: '/users/createUser',
        data: {
          email,
          password
        }
      })
      console.log(data)
      navigate('/userProfile', { replace: true })
    } catch(error) {
      console.log('Error login',error)
    }
  }

  return (
    <div className="signup">
      <div className="signupCard">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">Correo electronico</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingresa tu correo electronico"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Ingresa contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button type="submit" className="btn btn-primary">Registro</button>
        </form>
      </div>
    </div>
  )
}