import EventFlex from "./EventFlex";

const FlexView = ({groupedEvents}) => {

    const monthHeader = (monthYear) => {
        return (
            <>
                <h1 className="text-yellow-500 text-4xl font-bold"><span className="">{monthYear}</span></h1>
            </>
        )
    }
    return (
        <>
            <div>
                {Object.entries(groupedEvents).map(([monthYear, events]) => {
                        return (
                            <>
                                {monthHeader(monthYear)}
                                {events.map( (event, idx) => {
                                    return (
                                        <> <EventFlex event={event} idx={idx}/></>
                                    )
                                })}
                            </>
                    )})
                }

            </div>
        </>
    )
}

export default FlexView;