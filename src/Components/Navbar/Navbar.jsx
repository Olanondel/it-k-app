import NavbarCss from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div>
                <NavLink to="/profile" activeClassName={NavbarCss.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={NavbarCss.active}>Dialogs</NavLink>
            </div>
            <div>
                <a href="/news">News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a href="/settings" className={NavbarCss.settings}>
                    Settings
                </a>
            </div>
        </nav>
    )
}

export default Navbar
