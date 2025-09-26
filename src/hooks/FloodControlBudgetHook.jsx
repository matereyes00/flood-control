import { useState, useEffect } from 'react';
import { nepoBabyItems, taxPayerItems } from '../db/floodControlItems';
import { equivalencyMilestones } from '../db/expenses';
import NepoItem from '../FloodControlProject/FloodControlBudget/nepoItem';

export const useFloodControlBudget = () => {
    const totalBudget = 1000000000000;

    // --- STATE MANAGEMENT ---
    const [nepoCart, setNepoCart] = useState({});
    const [taxpayerCart, setTaxpayerCart] = useState({});
    const [isNepoBaby, setIsNepoBaby] = useState(false);
    const [equivalencyMessages, setEquivalencyMessages] = useState([]);
    const [confettiProps, setConfettiProps] = useState(null);

    // --- DERIVED STATE & CALCULATIONS ---
    const totalStolen = Object.values(nepoCart).reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalSpentInTaxpayerCart = Object.values(taxpayerCart).reduce((acc, item) => acc + item.price * item.quantity, 0);
    const spentAmount = totalStolen + totalSpentInTaxpayerCart;
    const remainingBudget = totalBudget - spentAmount;

    const percentageSpent = totalBudget > 0 ? (spentAmount / totalBudget) * 100 : 0;
    const percentageStolen = totalStolen > 0 ? (totalStolen / totalBudget) * 100 : 0;
    const percentageToTaxPayers = totalSpentInTaxpayerCart > 0 ? (totalSpentInTaxpayerCart / totalBudget) * 100 : 0;
    
    // --- SIDE EFFECTS ---
    useEffect(() => {
        const applicableMilestones = equivalencyMilestones.filter(
            (milestone) => totalStolen >= milestone.threshold
        );
        const messages = applicableMilestones.map(milestone => milestone.message(totalStolen));
        setEquivalencyMessages(messages);
    }, [totalStolen]);

    // --- EVENT HANDLERS ---
    const handleToggle = () => setIsNepoBaby((prev) => !prev);

    const handleBuyItem = (item, quantity) => {

        const  nepoEmojis = ['💸', '💎', '🐊', '🪳', '👑'];
        const taxpayerEmojis = ['🇵🇭', '❤️', '👍', '😊', '✅'];

        // Determine which emojis to use
        const emojis = isNepoBaby ? taxpayerEmojis : nepoEmojis;
        const currentScrollY = window.scrollY;
        
        // Trigger the confetti!
        setConfettiProps({
            numberOfPieces: 400,
            gravity: 0.1,
            emojis: emojis,
            emojiSize: 100,
            top: currentScrollY
        });

        // Hide confetti after 4 seconds
        setTimeout(() => {
            setConfettiProps(null);
        }, 4000);


        if (remainingBudget < item.price * quantity) {
            alert("You don't have enough money left to buy this!");
            return;
        }
        const cartUpdater = (prevCart) => {
            const existingItem = prevCart[item.name];
            return {
                ...prevCart,
                [item.name]: { ...item, quantity: (existingItem ? existingItem.quantity : 0) + quantity },
            };
        };
        isNepoBaby ? setTaxpayerCart(cartUpdater) : setNepoCart(cartUpdater);
    };

    const handleResetTaxPayerReceipt = () => setTaxpayerCart({});
    const handleResetNepoReceipt = () => setNepoCart({});

    // --- RENDER LOGIC PREPARATION ---
	const nepoItemsList = nepoBabyItems.map((item, idx) => <NepoItem key={idx} item={item} onBuy={handleBuyItem} />);
    const taxItemsList = taxPayerItems.map((item, idx) => <NepoItem key={idx} item={item} onBuy={handleBuyItem} />);

    // --- RETURN VALUES ---
    // Return everything the component needs to render and function
    return {
        isNepoBaby, handleToggle,
        nepoCart, taxpayerCart, confettiProps,
        totalStolen, totalSpentInTaxpayerCart,
        spentAmount, remainingBudget,
        equivalencyMessages,
        handleResetNepoReceipt, handleResetTaxPayerReceipt,
        itemsToDisplay: isNepoBaby ? taxItemsList : nepoItemsList,
        percentageSpent, percentageStolen, percentageToTaxPayers
    };
};