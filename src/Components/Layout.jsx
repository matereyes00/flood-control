import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Menu  from './Menu/Menu';

const Layout = () => {

  return (
    <div className="App">
        <main className='lg:flex lg:flex-row lg:p-10 gap-8'>
          <Menu />
          <div className='flex-1'>
            <Outlet />
          </div>
        </main>
        <Footer />
    </div>
  );
};

export default Layout;