
import ToggleSwitch from "../Components/ToggleSwitch";
import PageHeader from "../Components/PageHeader";
import { FloodControlBudgetHeader } from "../Components/Headers";
import FloodControlBudgetAnalysis from "./FloodControlBudget/FloodControlBudgetSideBar";
import { useFloodControlBudget } from "../hooks/FloodControlBudgetHook";

const FloodControlBudget = () => {
    const {
        isNepoBaby, handleToggle,
        itemsToDisplay,
        ...analysisProps
    } = useFloodControlBudget();

    const header = FloodControlBudgetHeader();

    return(
        <>
            <div className="bg-gray-700 min-h-screen text-white font-sans p-4 sm:p-8">
                <PageHeader title={header.title} creator={header.creator} description={header.description} />
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