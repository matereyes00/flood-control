import formatCurrency from "../../utils/CurrencyFormatter"

// Add props for customization: title, totalLabel, emptyMessage, themeColor, etc.
const Receipt = ({ 
    title, 
    cart, 
    totalAmount,
    totalLabel,
    emptyMessage,
    handleReset,
    themeColor = 'gray' // Default theme
}) => {
    // Define theme classes to work with TailwindCSS purging
    const themes = {
        gray: {
            border: 'border-gray-300',
            titleText: 'text-black',
            totalText: 'text-black',
            button: 'bg-gray-800 hover:bg-black',
        },
        red: {
            border: 'border-red-400',
            titleText: 'text-red-600',
            totalText: 'text-red-600',
            button: 'bg-red-700 hover:bg-red-800',
        }
    };

    const currentTheme = themes[themeColor] || themes.gray;

    return (
        <>
            {/* Use props for dynamic classes and content */}
            <div className={`bg-white text-black font-mono shadow-xl rounded-md p-4 flex flex-col text-sm border-t-4 border-dashed border-b-4 ${currentTheme.border}`}>
                 <div className="text-center mb-2">
                    <h2 className={`text-xl font-bold uppercase ${currentTheme.titleText}`}>{title}</h2>
                </div>
                <div className="border-t border-b border-dashed border-gray-400 my-2 py-1 text-center">
                    <p className="uppercase font-semibold">Cash Receipt</p>
                </div>
                <div className="flex-grow overflow-y-auto pr-2 my-2 min-h-[200px]">
                    {Object.keys(cart).length === 0 ? (
                        <p className="text-gray-500 text-center py-4">{emptyMessage}</p>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left font-normal">Description</th>
                                    <th className="text-right font-normal">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Object.values(cart).map(item => (
                                <tr key={item.name}>
                                    <td className="py-1 text-left">
                                        {item.name}
                                        <br />
                                        <span className="pl-2 text-xs">x{item.quantity} @ {formatCurrency(item.price)}</span>
                                    </td>
                                    <td className="text-right align-top py-1">{formatCurrency(item.price * item.quantity)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="border-t border-dashed border-gray-400 mt-auto pt-2">
                    <div className={`flex justify-between font-bold text-lg mb-2 ${currentTheme.totalText}`}>
                        <span>{totalLabel}</span>
                        <span>{formatCurrency(totalAmount)}</span>
                    </div>
                    <div className="text-center text-xs my-2">
                        <p>************************************</p>
                        <p className="font-bold my-1">THANK YOU!</p>
                        <div className="flex justify-center items-end space-x-px mt-2 h-8">
                            {[...Array(30)].map((_, i) => <div key={i} className={`bg-black w-0.5`} style={{ height: `${Math.random() * 80 + 20}%`}}></div>)}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleReset}
                    className={`w-full text-white font-bold py-2 px-4 rounded mt-4 transition-colors ${currentTheme.button}`}
                >
                    Start Over
                </button>
            </div>
        </>
    )
}

export default Receipt;