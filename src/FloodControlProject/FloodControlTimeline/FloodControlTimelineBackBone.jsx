import { floodControlTimeline } from "../../db/floodControlTimeline"
import { groupByMonth } from "../../utils/GroupBy";
import FlexView from "./FlexView";
import TableView from "./TableView";

const FloodControlTimeLineBackBone = () => {
    const timelineData = floodControlTimeline
    const groupedEvents = groupByMonth(timelineData);

    const tableView = (
        <TableView groupedEvents={groupedEvents}/>
    )

    const flexView = (
        <FlexView groupedEvents={groupedEvents}/>
    )

    const displayTimeline = (
        <>
            {/* This will ONLY be visible on xl screens (xl) and up */}
            <div className="hidden xl:block">
                <TableView groupedEvents={groupedEvents} />
            </div>

            {/* This will be hidden on xlarge screens (xl) and up, showing only on smaller screens */}
            <div className="lg:hidden">
                <FlexView groupedEvents={groupedEvents} />
            </div>
        </>
    )
    

    return (<>{displayTimeline}</>)
}

export default FloodControlTimeLineBackBone;