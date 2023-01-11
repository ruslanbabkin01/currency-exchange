import { NavLink, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <header className="mx-auto my-3">
        <nav className="flex mb-3 py-2">
          <ul className="flex mx-auto gap-10">
            <li>
              <NavLink
                to="/"
                className="py-2 px-5 rounded  bg-blue-400 text-white my-0 no-underline font-medium hover:bg-yellow-500 focus:bg-yellow-500 ease-out duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rates"
                className="py-2 px-5 rounded  bg-blue-400 text-white my-0 no-underline font-medium hover:bg-yellow-500 focus:bg-yellow-500 ease-out duration-300"
              >
                Exchange rates
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
