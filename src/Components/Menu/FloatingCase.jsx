import FloatingTab from "./floatingTab";
import { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FloatingCase = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <>
            <button onClick={handleHamburgerMenuToggle} className="xl:hidden top-4 left-4 text-white z-20">
                <FontAwesomeIcon icon={faBars} size="2x" />
            </button>

            <div className={isMenuOpen ? 
                `flex flex-col w-full h-screen bg-gray-800 justify-center items-center gap-2`
                : `hidden xl:flex w-56 top-4 left-4 gap-4 flex-col w-48`}>
                {/* FLOOD CONTROL BUDGET */}
                <Link to="/flood-control-budget">
                    <FloatingTab 
                        title={"Ghost Projects Budget"}
                        isActive={location.pathname === '/flood-control-budget'}/>
                </Link>
                {/* MISSING FUNDS DATA */}
                <Link to="/flood-control-analysis">
                    <FloatingTab 
                        title={"Missing Funds Data"}
                        isActive={location.pathname === '/flood-control-analysis'}/>
                </Link>
            </div>
        </>
    )
}

export default FloatingCase;