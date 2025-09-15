import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import marco_logo from "../assets/marco-logo-no-bg.png";

export default function Navbar  ()  {

    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="nav-container">
                    <Link className="navbar-brand" to="/"><img src={marco_logo} style={{ height: "60px", borderRadius: "25%", backgroundColor: "white" }} alt="logo"/></Link>
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}