import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import FloatingCase from './Menu/FloatingCase';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="App">
        <main>
            <FloatingCase />
            <Outlet />
        </main>
        <Footer />
    </div>
  );
};

export default Layout;