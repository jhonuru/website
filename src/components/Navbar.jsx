import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export function Navbar() {
  return(
    <>
      <nav className="navbar bg-dark navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme="dark" data-aos="fade-down">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon icon={faReact} size='2x' style={{ color:'#00D1F7'}} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-0 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Perfil</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Formación
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#formacion">Formación academica</a></li>
                  <li><a className="dropdown-item" href="#cursos">Cursos</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experiencia">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}