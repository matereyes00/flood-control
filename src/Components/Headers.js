export const FloodControlBudgetHeader = () => {
    const title = "Hanggang saan aabot ang ₱100 Billion pesos mo?"
    const creator = "Matê"
    const description = (
        <> 
            This is the estimated amount of taxpayer money linked to recent flood control project scandals. Add items to your cart to see how much was allegedly spent. The idea behind this project is so that the every day Filipino could grasp how much of the money was lost to luxury items. This was made to purely just <span className="underline">spread <span className="font-bold">awareness</span></span> and to <span className="underline">hold the Philippine government <span className="font-bold">accountable</span></span>, because the Filipino people are being scammed (frfr). This is heavily inspired by @wreckzonee's "Spend 100 Billion Pesos" website. Check out his TikTok <a 
                href='https://www.tiktok.com/@wreckzonee/video/7548848135553043719' 
                target='_blank' 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline" 
            >
            here
            </a>.
        </>
    )
    return {title, creator, description}
}

export const FloodControlTimelineHeader = () => {

    const title = "Flood Control Scandal (Abbr.)"
    const creator = "Matê"
    const description = (
        <>
            Timeline of events of the Flood Control Scandal. This is an abbreviated version; it does not have all events that transpired. This is based mostly on this articles found online and FTTM's posts regarding the Flood Control Scandal.
        </>
    )

    return {title, creator, description}
}