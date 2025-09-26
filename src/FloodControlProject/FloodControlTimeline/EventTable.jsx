const EventTable = ({idx, event}) => {
    const {date, eventTitle, eventHeading, eventDescription, gif} = event


    // styling
    const eventContainer = "sm:bg-gray-800 sm:shadow-lg"
    
    return (
        <>
            <div>
                <div className={idx % 2 === 0 ? "flex flex-row-reverse justify-between" : "flex flex-row justify-between"}>
                    <h1 className={idx % 2 === 0 ? "text-left italic" : "text-right italic"}>{date}</h1>
                    <div className="basis-96 m-0">
                         <h1 className={idx % 2 === 0 ? "text-left text-3xl font-bold mt-4 text-yellow-300" : "text-right text-3xl font-bold mt-4 text-yellow-300"}>{eventTitle}</h1>
                        <h1 className={idx % 2 === 0 ? "text-left text-xl mt-2 italic mr-0 text-gray-400" : "text-right text-xl mt-2 italic mr-0 text-gray-400"}>{eventHeading}</h1>
                    </div>
                </div>
                <div className={idx % 2 === 0 ? "flex justify-start mt-6" : "flex justify-end mt-6"}>
                    <img src={gif} alt={eventTitle} className="scale-[1.3] align-center p-8"/>
                </div>
                <p className={idx % 2 === 0 ? "w-full mx-auto mt-8 text-left text-lg pr-48" : "w-full mx-auto mt-8 text-right text-lg pl-48"}>{eventDescription}</p>
            </div>
        </>
    )
}

export default EventTable;