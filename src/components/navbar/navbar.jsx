import './styles.css'

export const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="/">Inicio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse inicio" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/imagesList">Lista de objetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/userProfile">Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">Iniciar Sesion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signUp">Registro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}