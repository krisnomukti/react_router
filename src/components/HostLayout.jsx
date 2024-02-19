import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  const active = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className='host-nav'>
        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to='/host'
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to='/host/income'
        >
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to='/host/reviews'
        >
          Reviews
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to='/host/vans'
        >
          Vans
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
