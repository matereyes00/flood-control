const PageHeader = ({title, creator, description}) => {
    return (
        <>
            <header className="text-center mb-8 max-w-6xl mx-auto relative">
                <h1 className="text-base sm:text-2xl sm:w-3/5 sm:mx-auto md:text-3xl lg:text-4xl font-bold text-yellow-300">{title}</h1>
                <p className="text-lg text-gray-400 mt-6">Created by: <span className="font-bold text-xl">{creator}</span></p>
                <p className="text-gray-400 mt-2 sm:text-md md:text-md lg:text-lg">{description}</p>
            </header>
        </>
    )
}

export default PageHeader;