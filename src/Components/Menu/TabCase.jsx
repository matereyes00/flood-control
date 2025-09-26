// TabCase.jsx - CORRECTED

import Tab from "./Tab";
import { Link, useLocation } from 'react-router-dom'; 

const TabCase = () => {
    const location = useLocation();
    // On the budget page, location.pathname will equal "/flood-control/budget"
    
    return(
        <>
            <div className="flex flex-col gap-6">
                <Link to="/">
                    <Tab 
                        title={"About"}
                        isActive={location.pathname === '/'}/>
                </Link>
                {/* FLOOD CONTROL BUDGET */}
                <Link to="/budget">
                    <Tab 
                        title={"Ghost Projects Budget"}
                        isActive={location.pathname === '/budget'}/>
                </Link>
                {/* MISSING FUNDS DATA */}
                <Link to="/analysis">
                    <Tab 
                        title={"Missing Funds Data"}
                        isActive={location.pathname === '/analysis'}/>
                </Link>
                {/* TIMELINE */}
                <Link to="/timeline">
                    <Tab 
                        title={"Scandal Timeline"}
                        isActive={location.pathname === '/timeline'}/>
                </Link>
            </div>
        </>
    )
}

export default TabCase;