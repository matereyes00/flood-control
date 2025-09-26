const Section = ({idx, page}) => {

    const sectionContainerStyle = "flex content-start flex-col rounded-xl p-10 m-10 text-center lg:text-left bg-gray-600 "
    const {title, description} = page

    return(
        <div className={sectionContainerStyle}>
            <h1 className="text-2xl text-yellow-500 font-semibold">{title}</h1> 
            <p className="mt-6">{description}</p>
        </div>
    )

}

export default Section;