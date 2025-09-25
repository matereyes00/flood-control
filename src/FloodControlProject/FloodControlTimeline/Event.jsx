const Event = ({idx, event}) => {
    const {date, eventTitle, eventDescription, gif} = event
    return (
        <>
            <div>
                <div className={idx % 2 === 0 ? "flex flex-row-reverse justify-between" : "flex flex-row justify-between"}>
                    <h1 className={idx % 2 === 0 ? "text-left italic" : "text-right italic"}>{date}</h1>
                    <h1 className={idx % 2 === 0 ? "text-left text-3xl font-bold mt-4" : "text-right text-3xl font-bold mt-4"}>{eventTitle}</h1>
                </div>
                <img src={gif} alt={eventTitle} className="scale-[1.5] align-center m-10 p-10"/>
                <p className={idx % 2 === 0 ? "w-full mx-auto mt-4 text-left pr-48" : "w-full mx-auto mt-10 text-right pl-48"}>{eventDescription}</p>
            </div>
        </>
    )
}

export default Event;