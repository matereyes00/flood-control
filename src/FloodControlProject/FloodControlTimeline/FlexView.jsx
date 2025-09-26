import EventFlex from "./EventFlex";

const FlexView = ({groupedEvents}) => {
    return (
        <>
            <div>
                {Object.entries(groupedEvents).map(([monthYear, events]) => {
                        return (
                            <>
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