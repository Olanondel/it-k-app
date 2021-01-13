import NavbarCss from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Messages</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#" className={NavbarCss.settings}>
          Settings
        </a>
      </div>
    </nav>
  )
}

export default Navbar
