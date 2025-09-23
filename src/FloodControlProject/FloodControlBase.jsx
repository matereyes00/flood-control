import { useState, useEffect } from "react";
import { nepoBabyItems, taxPayerItems  } from "../db/floodControlItems"; 
import { equivalencyMilestones } from "../db/expenses";
import Receipt from "./nepoReceipt";
import NepoItem from "./nepoItem";
import NepoAnalysis from "./nepoAnalysis";

const FloodControlBase = () => {
    const totalBudget = 1000000000000; // 1.089 Trillion
    
    const [nepoCart, setNepoCart] = useState({});
    const [taxpayerCart, setTaxpayerCart] = useState({});

    // This removes the need for separate useState hooks for each amount
    const totalStolen = Object.values(nepoCart).reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalSpentInTaxpayerCart = Object.values(taxpayerCart).reduce((acc, item) => acc + item.price * item.quantity, 0);
    const spentAmount = totalStolen + totalSpentInTaxpayerCart;

    // These calculations now work correctly based on the derived spentAmount
    const remainingBudget = totalBudget - spentAmount;
    const percentageSpent = totalBudget > 0 ? (spentAmount / totalBudget) * 100 : 0;
    const percentageStolen = totalStolen > 0 ? (totalStolen / totalBudget) * 100 : 0;
    const percentageToTaxPayers = totalSpentInTaxpayerCart > 0 ? (totalSpentInTaxpayerCart / totalBudget) * 100 : 0;

    // const [equivalencyMessage, setEquivalencyMessage] = useState("");
    const [equivalencyMessages, setEquivalencyMessages] = useState([]);
    useEffect(() => {
        // 2. Use .filter() to get ALL milestones that have been met.
        const applicableMilestones = equivalencyMilestones.filter(
            (milestone) => totalStolen >= milestone.threshold
        );
        
        // 3. Use .map() to create an array of message strings from the milestones.
        const messages = applicableMilestones.map(milestone => milestone.message(totalStolen));

        // 4. Set the state with the array of messages.
        setEquivalencyMessages(messages);
        
    }, [totalStolen, equivalencyMilestones]);

    // toggle between nepo baby
    const [isNepoBaby, setIsNepoBaby] = useState(false);
    const handleToggle = () => {
        setIsNepoBaby((prev) => !prev);
    };

    const handleBuyItem = (item, quantity) => {
        const totalCost = item.price * quantity; // Calculate total cost for the purchase
        // The check against remainingBudget will still work correctly
        if (remainingBudget < totalCost) {
            alert("You don't have enough money left to buy this!");
            return;
        }
        // We no longer need to call setSpentAmount. It's calculated automatically.
        const cartUpdater = (prevCart) => {
            const existingItem = prevCart[item.name];
            return {
                ...prevCart,
                [item.name]: {
                    ...item,
                    quantity: (existingItem ? existingItem.quantity : 0) + quantity,
                },
            };
        };
        
        if (isNepoBaby) {
            setTaxpayerCart(cartUpdater);
        } else {
            setNepoCart(cartUpdater);
        }
    };

    const handleResetTaxPayerReceipt = () => {
        setTaxpayerCart({});
    };

    const handleResetNepoReceipt = () => {
        setNepoCart({});
    }

	const nepoItems = nepoBabyItems.map((item, idx) => (
		<NepoItem
			key={idx}
            item={item}
            onBuy={handleBuyItem}
		/>
	));

    const taxItems = taxPayerItems.map((item, idx) => (
        <NepoItem
			key={idx}
            item={item}
            onBuy={handleBuyItem}
		/>
    ))

    return(
        <>
            <div className="bg-gray-700 min-h-screen text-white font-sans p-4 sm:p-8">
                <header className="text-center mb-8 max-w-6xl mx-auto">
                    <h1 className="text-base sm:text-5xl font-bold text-yellow-300">Hanggang saan aabot ang ₱100 Billion pesos mo?</h1>
                    <p className="text-lg text-gray-400 mt-6">Created by: <span className="font-bold text-xl">Matê</span></p>
                    <p className="text-lg text-gray-400 mt-2">
                        This is the estimated amount of taxpayer money linked to recent flood control project scandals. Add items to your cart to see how much was allegedly spent. The idea behind this project is so that the every day Filipino could grasp how much of the money was lost to luxury items. This was made to purely just <span className="underline">spread <span className="font-bold">awareness</span></span> and to <span className="underline">hold the Philippine government <span className="font-bold">accountable</span></span>, because the Filipino people are being scammed (frfr). This is heavily inspired by @wreckzonee's "Spend 100 Billion Pesos" website. Check out his TikTok <a 
                            href='https://www.tiktok.com/@wreckzonee/video/7548848135553043719' 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="text-blue-400 hover:underline" // Optional: add styling
                        >
						here
                        </a>.
                    </p>
                </header>

                <div className="m-3 flex content-start">
                     <button
                        onClick={handleToggle}
                        className={`px-4 py-2 rounded-lg font-semibold transition 
                            ${isNepoBaby ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
                        >
                        {isNepoBaby ? "Tax Payer" : "Nepo Baby"}
                    </button>
                </div>
               
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {isNepoBaby ? taxItems : nepoItems }
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default FloodControlBase;