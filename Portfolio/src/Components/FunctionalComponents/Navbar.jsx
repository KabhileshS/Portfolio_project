import { Link } from "react-router-dom"
import "../css/Navbar.css"
const Navbar = () => {
  return (
    <header>
        <nav>
            <li><Link to='/home' className="link" >Home</Link></li>
            <li><Link to='/skills' className="link" >Skills</Link></li>
            <li><Link to='/education' className="link" >Education</Link></li>
            <li><Link to='/projects' className="link" >Projects</Link></li>
            <li><Link to='/contact' className="link" >Contact</Link></li>
        </nav>
    </header>
  )
}

export default Navbar
