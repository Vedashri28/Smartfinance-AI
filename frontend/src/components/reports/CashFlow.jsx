import GlassCard from "../Glasscard/Glasscard";

function CashFlow(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white">

Cash Flow

</h2>

<div className="mt-8">

<div className="flex justify-between">

<span className="text-gray-400">

Income

</span>

<span className="text-green-400">

₹92,500

</span>

</div>

<div className="flex justify-between mt-4">

<span className="text-gray-400">

Expense

</span>

<span className="text-red-400">

₹41,700

</span>

</div>

<div className="border-t border-white/10 mt-6 pt-6 flex justify-between">

<span className="text-white font-bold">

Net Cash Flow

</span>

<span className="text-cyan-400 font-bold">

₹50,800

</span>

</div>

</div>

</GlassCard>

)

}

export default CashFlow;
