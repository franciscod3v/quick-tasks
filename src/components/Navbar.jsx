import './styles-components/navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className="navbar-principal navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon d-flex align-items-center">
                        <i className="bi bi-list"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 d-flex gap-2 justify-content-right">
                        <li className="nav-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sites'>Sites</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/time'>Timer</Link>
                        </li>
                        <li>
                            <Link to='/movies'>Recommend Movies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
