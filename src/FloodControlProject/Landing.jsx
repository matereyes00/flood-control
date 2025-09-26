// import { UnderConstruction } from "../utils/Placeholder";

import { siteMetaData } from "../db/siteMetaData"
import Section from "./Landing/Section"

const Landing = () => {

    const pageData = siteMetaData

    const pageContainer = "bg-gray-700 min-h-screen text-white font-sans p-4 sm:p-8"
    const pageHeaderStyle = "flex flex-col align-center justify-around"

    return (
        <>
            {/* <UnderConstruction /> */}
            <div className={pageContainer}>
                <div className={pageHeaderStyle}>
                    <h1 className="text-4xl m-4">Philippine Flood Control Scandal Info(web)graphic</h1>
                    <p className="w-1/2 text-center mx-auto">This acts as an interactive infographic type of website where users could stay updated and understand how big the impact of the misuse of public funds are in their daily lives.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-4">
                    {
                        pageData.map( (page, idx) => 
                            <Section key={idx} page={page} />
                        )
                    }
                </div>

                <p>Please don't hesitate to contact me if some piece of information in this website is wrong or if a feature is 'funky' 🤭.</p>

            </div>

        </>
    )

}

export default Landing;