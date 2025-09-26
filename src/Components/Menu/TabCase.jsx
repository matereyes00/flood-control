// TabCase.jsx - CORRECTED

import Tab from "./Tab";
import { Link, useLocation } from 'react-router-dom'; 

const TabCase = () => {
    const location = useLocation();
    // On the budget page, location.pathname will equal "/flood-control/budget"
    
    return(
        <>
            <div className="flex flex-col gap-6">
                {/* Link to the root, which the basename makes "/flood-control" */}
                <Link to="/">
                    <Tab 
                        title={"About"}
                        isActive={location.pathname === '/'}/>
                </Link>

                {/* Link to "/budget" which becomes "/flood-control/budget" */}
                <Link to="/budget">
                    <Tab 
                        title={"Ghost Projects Budget"}
                        isActive={location.pathname === '/budget'}/>
                </Link>

                {/* Link to "/analysis" which becomes "/flood-control/analysis" */}
                <Link to="/analysis">
                    <Tab 
                        title={"Missing Funds Data"}
                        isActive={location.pathname === '/analysis'}/>
                </Link>
                
                {/* Link to "/timeline" which becomes "/flood-control/timeline" */}
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