import EventTable from "./EventTable"
const TableView = ({groupedEvents}) => {

    // STYLING
    const fullTableStyle = "w-full table-fixed mx-auto border-collapse divide-solid"
    const monthYearHeadingTD = "text-3xl p-4 text-center"
    const monthYearHeadingTR = "lg:sticky top-0 text-yellow-500 font-bold" 
    const leftEventStyle = "border-r-4 border-t-2 border-white m-48 [border-top-style:dashed] w-36"
    const rightEventStyle = "border-l-4 border-t-2 border-white m-48 [border-top-style:dashed] w-36"

    // elements 
    const monthHeader = (monthYear) => {
        return (
            <>
                <tr className={monthYearHeadingTR}><td colSpan={2} className={monthYearHeadingTD} ><span className="bg-gray-700">{monthYear}</span></td></tr>
            </>
            
        )
    }

    const leftEventComponent = (idx, event) => {
        return (
            <>
                <tr className="">
                    <td className={leftEventStyle}>
                        <EventTable idx={idx} event={event}/></td>
                    <td></td>
                </tr>
            </>
        )
    }

    const rightEventComponent = (idx, event) => {
        return (
            <>
                <tr className="">
                    <td></td>
                    <td className={rightEventStyle}>
                        <EventTable idx={idx} event={event}/>
                    </td>
                </tr>  
            </>
        )
    }

    return (
        <>
            <table className={fullTableStyle}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                    {Object.entries(groupedEvents).map(([monthYear, events]) => {
                            return (
                                <>
                                    {monthHeader(monthYear)}
                                    <tbody key={monthYear}>
                                        {events.map( (event, idx) => {
                                            if (idx % 2 === 0) {
                                                return leftEventComponent(idx, event)
                                            } else  {
                                                return rightEventComponent(idx, event)
                                            }
                                        })}
                                    </tbody>
                                </>
                        )})
                    }
            </table>
        </>
    )
}

export default TableView;