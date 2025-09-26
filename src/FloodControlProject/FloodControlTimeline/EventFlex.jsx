const EventFlex = ({ idx, event }) => {
    const { date, eventTitle, eventHeading, eventDescription, gif, source } = event;
    
    // STYLING
    const eventContainer = "bg-gray-800 shadow-2xl m-10 p-10 rounded-lg";
    const eventHeader = "flex flex-col content-around mb-10";
    const eventHeadingStyle = "text-gray-400 font-semibold italic text-lg my-4"
    
    return (
        <div className={eventContainer}>
            <div className={eventHeader}>
                <h1 className="text-yellow-500 font-bold text-3xl">{eventTitle}</h1>
                <h1 className={eventHeadingStyle}>
                    <a href={source}
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className="text-white-300 hover:underline">
                            {eventHeading}
                        </a>
                </h1>
                <h1 className="italic">{date}</h1>
            </div>

            <div className="my-8 overflow-hidden rounded-xl">
                <img 
                    src={gif} 
                    alt={eventTitle} 
                    className="block w-full md:w-[50%] h-auto mx-auto rounded-xl" // Use w-full instead of scale
                />
            </div>

            <p className="text-gray-300">{eventDescription}</p>
        </div>
    );
};

export default EventFlex;