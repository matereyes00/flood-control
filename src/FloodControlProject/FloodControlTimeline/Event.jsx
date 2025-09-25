const Event = ({event}) => {
    const {date, eventTitle, eventDescription, image, video} = event
    return (
        <>
            <div>
                <h1>{date}</h1>
                <h1>{eventTitle}</h1>
                <p className="w-full">{eventDescription}</p>
            </div>
        </>
    )
}

export default Event