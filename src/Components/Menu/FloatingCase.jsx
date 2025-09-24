import FloatingTab from "./floatingTab";
import { Link, useLocation } from 'react-router-dom'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FloatingCase = () => {
    const location = useLocation();
    return(
        <>
            <button className="xl:hidden absolute top-4 left-4 text-white z-20">
                <FontAwesomeIcon icon={faBars} size="2x" />
            </button>

            <div className="hidden xl:flex absolute top-4 left-4 gap-4 flex-col w-48">
                <Link to="/flood-control-budget">
                    <FloatingTab 
                        title={"Home"}
                        isActive={location.pathname === '/flood-control-budget'}/>
                </Link>
                <Link to="/flood-control-analysis">
                    <FloatingTab 
                        title={"Data"}
                        isActive={location.pathname === '/flood-control-analysis'}/>
                </Link>
            </div>
        </>
    )
}

export default FloatingCase;