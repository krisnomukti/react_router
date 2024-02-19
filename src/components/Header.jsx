import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/' className='site-logo'>
        #VANLIFE
      </Link>

      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/host'
        >
          Host
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/about'
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          to='/vans'
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
