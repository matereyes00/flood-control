import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import FloatingCase from './Menu/FloatingCase';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="App">
        <main className='flex flex-row xl:p-10 gap-8'>
          <div className='sticky top-96 self-start text-center'>
            <FloatingCase />
          </div>
          <div className='flex-1'>
            <Outlet />
          </div>
        </main>
        <Footer />
    </div>
  );
};

export default Layout;