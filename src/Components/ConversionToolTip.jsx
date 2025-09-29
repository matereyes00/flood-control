import { useExchangeRate } from "../hooks/useExchangeRate";
import { useState } from "react";

const ConversionToolTip = ({children, amount}) => {

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const { rate, loading, error } = useExchangeRate("PHP", "USD");
    const [isHovering, setIsHovering] = useState(false);
    const convertedAmount = (amount * rate).toFixed(2);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    return(
        <>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative inline-block">
                {children}
                {isHovering && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2
                        bg-black text-white text-sm rounded-md whitespace-nowrap">
                        {loading && "Loading..."}
                        {error && "Error"}
                         {rate && `${currencyFormatter.format(convertedAmount)} USD`}
                    </div>
                )}
            </div>
        </>
    )

}

export default ConversionToolTip;