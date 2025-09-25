import PageHeader from "../Components/PageHeader"
import { FloodControlTimelineHeader } from "../Components/Headers"
// import { UnderConstruction } from "../utils/Placeholder"

const FloodControlTimelinePage = () => {

    const header = FloodControlTimelineHeader();

    return(
        <>
            {/* <UnderConstruction /> */}
            <div className="bg-gray-700 min-h-screen text-white font-sans p-4 sm:p-8">
                <PageHeader title={header.title} creator={header.creator} description={header.description} />
                {/* timeline of events */}
            </div>
        </>
    )
}

export default FloodControlTimelinePage