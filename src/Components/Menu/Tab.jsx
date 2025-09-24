const Tab = ({title, isActive}) => {

    return(
        <>
            <h1 className={isActive ? 
                `text-xl font-bold rounded-xl text-yellow-500 underline text-center` : 
                `text-xl text-center text-white hover:text-yellow-500
                    hover:rounded-xl hover:text-black hover:ease-linear hover:duration-200`}>
                {title}
            </h1>
        </>
    )
}

export default Tab;