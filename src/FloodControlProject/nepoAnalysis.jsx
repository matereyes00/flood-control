import formatCurrency from "../utils/CurrencyFormatter";


const NepoAnalysis = ({
    spentAmount,
	remainingBudget,
	percentageSpent,
    equivalencyMessages,
    stolenAmount,
    percentageStolen,
    taxPayersAmount,
    percentageToTaxPayers,
}) => {

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Analysis</h2>
            <div className="space-y-3 text-lg">
                <div>
                    <span className="font-semibold text-gray-400">Funds Left: </span>
                    <span className="font-bold text-green-400">{formatCurrency(remainingBudget)}</span>
                </div>
                <div>
                    <span className="font-semibold text-gray-400">Funds Spent: </span>
                    <span className="font-bold text-red-400">{formatCurrency(spentAmount)}</span>
                </div>
                <div>
                    <span className="font-semibold text-gray-400">Percentage of Total Fund Spent: </span>
                    <span className="font-bold text-yellow-400">{percentageSpent.toFixed(2)}%</span>
                </div>
                {stolenAmount > 0 && (
                    <div>
                        <span className="font-semibold text-gray-400">Percentage of Funds Stolen: </span>
                        <span className="font-bold text-red-400">{percentageStolen.toFixed(2)}%</span>
                    </div>
                )}
                {taxPayersAmount > 0 && (
                    <div>
                        <span className="font-semibold text-gray-400">Percentage of Funds To Tax Payers: </span>
                        <span className="font-bold text-green-400">{percentageToTaxPayers.toFixed(2)}%</span>
                    </div>
                )}
            </div>

            {/* --- Equivalency Ticker UI --- */}
            {equivalencyMessages.length > 0 && (
                 <div className="mt-6 pt-4 border-t border-gray-700 animate-fade-in">
                    <ul className="space-y-3">
                        {equivalencyMessages.map((message, index) => (
                            <li key={index} className="flex text-left items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <p className="text-base text-gray-300">{message}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )

}

export default NepoAnalysis;