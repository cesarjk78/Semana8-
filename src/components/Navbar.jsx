import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Agregamos CSS personalizado

export default function Navbar() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="mi-navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">💊 FarmaPlus</Link>

        <div className="navbar-links">
          {!usuario && (
            <>
              <Link to="/login" className="nav-link-custom">Iniciar Sesión</Link>
              <Link to="/register" className="nav-link-custom">Registrarse</Link>
            </>
          )}
          {usuario?.rol && (
            <Link to="/productos" className="nav-link-custom">Productos</Link>
          )}
          {usuario && (
            <>
              <Link to="/perfil" className="nav-link-custom">Mi Perfil</Link>
              <button className="btn-logout" onClick={logout}>
                Cerrar Sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
