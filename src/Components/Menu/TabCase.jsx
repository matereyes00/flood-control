import Tab from "./Tab";
import { Link, useLocation } from 'react-router-dom'; 

const TabCase = () => {
    const location = useLocation();
    return(
        <>
            <div className="flex flex-col gap-6">
                <Link to="/flood-control">
                    <Tab 
                        title={"About"}
                        isActive={location.pathname === '/flood-control'}/>
                </Link>
                {/* FLOOD CONTROL BUDGET */}
                <Link to="/flood-control/flood-control-budget">
                    <Tab 
                        title={"Ghost Projects Budget"}
                        isActive={location.pathname === '/flood-control/flood-control-budget'}/>
                </Link>
                {/* MISSING FUNDS DATA */}
                <Link to="/flood-control/flood-control-analysis">
                    <Tab 
                        title={"Missing Funds Data"}
                        isActive={location.pathname === '/flood-control/flood-control-analysis'}/>
                </Link>
                {/* TIMELINE */}
                <Link to="/flood-control/flood-control-timeline">
                    <Tab 
                        title={"Scandal Timeline"}
                        isActive={location.pathname === '/flood-control/flood-control-timeline'}/>
                </Link>
            </div>
        </>
    )
}

export default TabCase;