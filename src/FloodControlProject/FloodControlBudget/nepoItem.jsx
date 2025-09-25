import formatCurrency from "../../utils/CurrencyFormatter"
import { useState } from 'react'; // 1. Import useState

const NepoItem = ({ item, onBuy }) => {
    const { name, price, image, description } = item;
    const [quantity, setQuantity] = useState(1);
    
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        // Ensure the quantity is a valid number and at least 1
        setQuantity(isNaN(value) || value < 1 ? 1 : value);
    }
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const handleAddToCart = () => {
        onBuy(item, quantity); // First, add the item to the cart
        setQuantity(1);      // Then, reset the quantity to 1
    };

    return(
        <>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105">
                <img src={image} alt={name} className="w-full h-40 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-yellow-300">{name}</h3>
                    <p className="text-sm text-white mt-3">{description}</p>
                    <p className="text-xl font-bold text-white mt-3">{formatCurrency(price)}</p>
                </div>
                <div className="px-4 py-2 flex items-center justify-center gap-4">
                    <button onClick={decrement} className="bg-gray-700 w-10 h-10 text-xl rounded-md hover:bg-gray-600">-</button>
                    <input 
                        type="number" 
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-20 h-10 text-center bg-gray-900 rounded-md font-bold text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="1"
                    />
                    <button onClick={increment} className="bg-gray-700 w-10 h-10 text-xl rounded-md hover:bg-gray-600">+</button>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-800 hover:bg-blue-300 hover:text-black text-white font-bold py-3 px-4 transition mt-2"
                >
                    Add to Cart
                </button>
            </div>
        </>
    )

}

export default NepoItem;