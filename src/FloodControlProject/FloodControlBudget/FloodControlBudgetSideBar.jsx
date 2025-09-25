import NepoAnalysis from "./nepoAnalysis";
import Receipt from "./nepoReceipt";

const FloodControlBudgetAnalysis = ({
    spentAmount,
    remainingBudget,
    equivalencyMessages,
    totalStolen,
    nepoCart,
    handleResetNepoReceipt,
    taxpayerCart,
    totalSpentInTaxpayerCart,
    handleResetTaxPayerReceipt,
    percentageToTaxPayers,
    percentageSpent,
    percentageStolen,
}) => {
    return (
    <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-gray-800 rounded-lg p-5">
                <h1 className="text-yellow-300 font-bold sm:text:2xl text-3xl">Assumptions</h1>
                <ol className="text-left text-gray-300 list-decimal list-inside space-y-2 mt-4">
                    <li><span className="font-bold text-xl">Tax Payer Item Prices:</span> The prices are based on the country's department plans (DOH, DOTr, DepEd) and got the rough estimates of a product/good per how a single person would consume it. These are rough estimates.</li>
                    <li><span className="font-bold text-xl">Nepo Baby Item Prices:</span> Googled the luxury item prices. If given a range, the highest value in the range was used. These are rough estimates. If it was in a different currency, it was converted to Php.</li>
                </ol>
            </div>
            <NepoAnalysis 
                spentAmount={spentAmount}
                remainingBudget={remainingBudget}
                percentageSpent={percentageSpent}
                equivalencyMessages={equivalencyMessages}
                stolenAmount={totalStolen}
                percentageStolen={percentageStolen} // <-- ADD THIS PROP
                taxPayersAmount={totalSpentInTaxpayerCart}
                percentageToTaxPayers={percentageToTaxPayers}
            />
            <Receipt
                title="Funds Stolen"
                cart={nepoCart}
                totalAmount={totalStolen}
                totalLabel="Total Stolen:"
                emptyMessage="No funds have been misappropriated... yet."
                handleReset={handleResetNepoReceipt}
                themeColor="red"
            />
            <Receipt
                title="Taxpayer's Receipt"
                cart={taxpayerCart}
                totalAmount={totalSpentInTaxpayerCart}
                totalLabel="Total:"
                emptyMessage="Your cart is empty."
                handleReset={handleResetTaxPayerReceipt}
                themeColor="gray"
            />
        </div>
    )
}

export default FloodControlBudgetAnalysis