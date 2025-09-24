import TabCase from './TabCase';
import { useState } from 'react'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleHamburgerMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return(
        <>
            <button onClick={handleHamburgerMenuToggle} className="xl:hidden absolute top-4 left-4 text-white z-20">
                <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            <div className={isMenuOpen ? 
                    `fixed top-0 left-0 w-full h-screen bg-gray-800 flex justify-center items-center z-10` // Mobile open state
                    : `hidden xl:flex sticky top-96 self-start`}> {/* Mobile closed AND Desktop state */}
                <TabCase closeMenu={() => setIsMenuOpen(false)} />
            </div>
        </>

    )
}

export default Menu;