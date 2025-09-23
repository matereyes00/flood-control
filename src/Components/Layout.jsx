import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // This will be true for any path that starts with '/mini-projects/'
  const isMiniProjectPage = location.pathname.startsWith('/mini-projects/');

  return (
    <div className="App">
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;