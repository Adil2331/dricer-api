import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </nav>
    )
}

export default Menu