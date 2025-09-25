import { floodControlTimeline } from "../../db/floodControlTimeline"
import { groupByMonth } from "../../utils/GroupBy";
import Event from "./Event";

const FloodControlTimeLineBackBone = () => {
    const timelineData = floodControlTimeline
    const groupedEvents = groupByMonth(timelineData);

    return (
        <table className="w-full table-fixed mx-auto border-collapse divide-solid">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
                {Object.entries(groupedEvents).map(([monthYear, events]) => {
                        return (
                            <>
                                <tr className="xl:sticky top-0"><td colSpan={2} className="text-3xl p-4 text-center" ><span className=" bg-gray-700">{monthYear}</span></td></tr>
                                <tbody key={monthYear}>
                                    {events.map( (event, idx) => {
                                        // LEFT
                                        if (idx % 2 === 0) {
                                            return (
                                                <>
                                                    <tr className="">
                                                        <td className="border-r-4 border-t-2 border-white m-48 [border-top-style:dashed] w-36"><Event idx={idx} event={event}/></td>
                                                        <td></td>
                                                    </tr>
                                                </>
                                            )
                                        // RIGHT
                                        } else  {
                                            return (
                                                <tr className="">
                                                    <td></td>
                                                    <td className="border-l-4 border-t-2 border-white m-48 [border-top-style:dashed] w-36"><Event idx={idx} event={event}/></td>
                                                </tr>    
                                            )
                                        }
                                    })}
                                </tbody>
                            </>
                    )})
                }
        </table>
    )
}

export default FloodControlTimeLineBackBone;