import './styles.css'
import { Link } from "react-router-dom"

export const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">Inicio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse inicio" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/imagesList">Lista de objetos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/userProfile">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Iniciar Sesion</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signUp">Registro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}