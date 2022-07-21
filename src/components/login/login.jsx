import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

export const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await axios({
        method: 'POST',
        baseURL: import.meta.env.VITE_SERVER_URL,
        url: '/users/login',
        data: {
          email,
          password
        }
      })

      navigate('/userProfile', { replace: true })
    } catch(error) {
      console.log('Error login',error)
    }
  }

  return (
    <div className="login">
      <div className="loginCard">
        <h1>Iniciar sesion</h1>
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
          <button type="submit" className="btn btn-primary">Iniciar sesion</button>
        </form>
      </div>
    </div>
  )
}