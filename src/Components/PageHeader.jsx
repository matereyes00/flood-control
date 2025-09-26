const PageHeader = ({title, creator, description}) => {

    const headerStyle = "text-center mb-8 max-w-6xl mx-auto relative"
    const titleStyle = "text-2xl sm:text-2xl sm:w-3/5 sm:mx-auto md:text-3xl lg:text-4xl font-bold text-yellow-300"
    const headerDescriptionStyle = "text-gray-400 mt-2 sm:text-md md:text-md lg:text-lg"
    const creatorNameStyle = "font-bold text-xl"

    return (
        <>
            <header className={headerStyle}>
                <h1 className={titleStyle}>{title}</h1>
                <p className="text-lg text-gray-400 mt-6">Created by: <span className={creatorNameStyle}>{creator}</span></p>
                <p className={headerDescriptionStyle}>{description}</p>
            </header>
        </>
    )
}

export default PageHeader;