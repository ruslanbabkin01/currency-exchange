import { NavLink, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rates">Exchange rates</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
