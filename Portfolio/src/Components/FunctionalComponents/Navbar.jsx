import { Link } from "react-router-dom"
import "../css/Navbar.css"
const Navbar = () => {
  return (
    <header>
        <h1>KABHILESH S - My Portfolio</h1>
        <nav>
            <li><Link to='/' className="link" >About</Link></li>
            <li><Link to='/skills' className="link" >Skills</Link></li>
            <li><Link to='/education' className="link" >Education</Link></li>
            <li><Link to='/projects' className="link" >Projects</Link></li>
            <li><Link to='/contact' className="link" >Contact & Links</Link></li>
        </nav>
    </header>
  )
}

export default Navbar
