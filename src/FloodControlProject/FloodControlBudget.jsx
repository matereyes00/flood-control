
import ToggleSwitch from "../Components/ToggleSwitch";
import PageHeader from "../Components/PageHeader";
import { FloodControlBudgetHeader } from "../Components/Headers";
import FloodControlBudgetAnalysis from "./FloodControlBudget/FloodControlBudgetSideBar";
import { useFloodControlBudget } from "../hooks/useFloodControlBudgetHook";
import ReactConfetti from "react-confetti"; // 1. Import the component
import { useWindowSize } from "react-use"; // 2. Import the hook for window size
import ConversionToolTip from "../Components/ConversionToolTip";

const drawEmoji = (ctx, emoji) => {
    ctx.font = '28px serif';
    ctx.fillText(emoji, 0, 0);
};

const FloodControlBudget = () => {
    const {
        isNepoBaby, handleToggle,
        itemsToDisplay,confettiProps,
        ...analysisProps
    } = useFloodControlBudget();

    const { width, height } = useWindowSize(); // 4. Get window dimensions
    const header = FloodControlBudgetHeader();

    return(
        <>
            {confettiProps && (
                <ReactConfetti
                    width={width}
                    height={height}
                    drawShape={(ctx) => drawEmoji(ctx, confettiProps.emojis[Math.floor(Math.random() * confettiProps.emojis.length)])}
                    style={{ position: 'fixed', top: 0, left: 0 }}
                    {...confettiProps}
                />
            )}
            <div className="bg-gray-700 min-h-screen text-white font-sans p-4 sm:p-8">
                <PageHeader title={header.title} creator={header.creator} description={header.description} />
                <ConversionToolTip amount={1000}/>
                <div className="ml-3 mb-10 justify-center sm:justify-start">
                    <ToggleSwitch 
                        isOn={isNepoBaby}
                        handleToggle={handleToggle}
                        offLabel="Nepo Baby"
                        onLabel="Tax Payer"
                    />
                </div>
               
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {itemsToDisplay}
                    </div>
                    <FloodControlBudgetAnalysis {...analysisProps}/>
                </div>
            </div>
        </>
    )
}

export default FloodControlBudget;