const FloatingTab = ({title, isActive}) => {

    return(
        <>
            <h1 className={isActive ? 
                `text-bold bg-yellow-500 p-1 rounded-xl text-center` : 
                `text-left text-white hover:bg-yellow-500 hover:p-1 
                    hover:rounded-xl hover:text-black hover:text-center hover:ease-linear hover:duration-200`}>
                {title}
            </h1>
        </>
    )
}

export default FloatingTab;