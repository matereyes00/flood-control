import { floodControlTimeline } from "../../db/floodControlTimeline"
import Event from "./Event";

const FloodControlTimeLineBackBone = () => {
    const timelineData = floodControlTimeline

    return (
        <table className="w-full table-auto mx-auto border-collapse divide-solid">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    timelineData.map( (item, idx) => {
                        if (idx % 2 === 0) {
                            console.log("Item:", item.date);
                            return (
                                <>
                                    <tr className="">
                                        <td className="border-r-4 border-white p-48 m-48"><Event event={item}/></td>
                                        <td></td>
                                    </tr>
                                </>
                            )
                        } else if (idx % 2 === 1) {
                            console.log("Item:", item.date);
                            return (
                                <tr className="">
                                    <td></td>
                                    <td className="border-l-4 border-white p-48 m-48"><Event event={item}/></td>
                                </tr>    
                            )
                        }
                    })
                }
            </tbody>
        </table>
    )
}

export default FloodControlTimeLineBackBone;