const EventTable = ({idx, event}) => {
    const {date, eventTitle, eventHeading, eventDescription, gif, source} = event


    // styling
    const eventTableContainer = idx % 2 === 0 ? "flex flex-row-reverse justify-between" : "flex flex-row justify-between"
    const eventDateStyle = idx % 2 === 0 ? "text-left italic" : "text-right italic"
    const eventTitleStyle = idx % 2 === 0 ? "text-left text-3xl font-bold mt-4 text-yellow-300" : "text-right text-3xl font-bold mt-4 text-yellow-300"
    const eventHeadingStyle = idx % 2 === 0 ? "text-left text-xl mt-2 italic mr-0 text-gray-400" : "text-right text-xl mt-2 italic mr-0 text-gray-400"
    const imgContainerStyle = idx % 2 === 0 ? "flex justify-start mt-6" : "flex justify-end mt-6"
    const descriptionStyle = idx % 2 === 0 ? "w-full mx-auto mt-8 text-left text-lg pr-48" : "w-full mx-auto mt-8 text-right text-lg pl-48"
    
    return (
        <>
            <div>
                <div className={eventTableContainer}>
                    <h1 className={eventDateStyle}>{date}</h1>
                    <div className="basis-96 m-0">
                         <h1 className={eventTitleStyle}>{eventTitle}</h1>
                        <h1 className={eventHeadingStyle}>
                            <a 
                                href={source}
                                target='_blank' 
                                rel="noopener noreferrer" 
                                className="text-white-300 hover:underline"
                            >
                                {eventHeading}
                            </a>
                        </h1>
                    </div>
                </div>
                <div className={imgContainerStyle}>
                    <img src={gif} alt={eventTitle} className="w-[70%] align-center p-8"/>
                </div>
                <p className={descriptionStyle}>{eventDescription}</p>
            </div>
        </>
    )
}

export default EventTable;