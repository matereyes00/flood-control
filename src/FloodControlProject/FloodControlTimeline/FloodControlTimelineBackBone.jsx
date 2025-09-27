import { floodControlTimeline } from "../../db/floodControlTimeline";
import { groupByMonth } from "../../utils/GroupBy";
import FlexView from "./FlexView";
import TableView from "./TableView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const FloodControlTimeLineBackBone = () => {
	const timelineData = floodControlTimeline;
	const groupedEvents = groupByMonth(timelineData);

	const tableView = <TableView groupedEvents={groupedEvents} />;

	const flexView = <FlexView groupedEvents={groupedEvents} />;

	const displayTimeline = (
		<>
			{/* This will ONLY be visible on xl screens (xl) and up */}
			<div className="hidden lg:block">{tableView}</div>

			{/* This will be hidden on xlarge screens (xl) and up, showing only on smaller screens */}
			<div className="lg:hidden">{flexView}</div>
		</>
	);

	const scrollToTopStyling =
		"fixed bottom-4 right-4 z-50 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 p-6";
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{displayTimeline}
			<button onClick={scrollToTop} className={scrollToTopStyling}>
				<FontAwesomeIcon icon={faArrowUp} size="lg lg:2xl" />
			</button>
		</>
	);
};

export default FloodControlTimeLineBackBone;
