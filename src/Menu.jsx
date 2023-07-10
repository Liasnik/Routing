import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="nav">
      <NavLink to="/Routing" end>
        Home
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  )
}

export default Menu
