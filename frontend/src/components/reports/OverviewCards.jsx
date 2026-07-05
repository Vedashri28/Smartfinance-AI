import GlassCard from "../Glasscard/Glasscard";

function OverviewCards(){

return(

<div className="grid lg:grid-cols-4 gap-6">

<GlassCard className="p-6">

<p className="text-gray-400">Income</p>

<h2 className="text-3xl font-bold text-green-400 mt-4">
₹92,500
</h2>

</GlassCard>

<GlassCard className="p-6">

<p className="text-gray-400">Expense</p>

<h2 className="text-3xl font-bold text-red-400 mt-4">
₹41,700
</h2>

</GlassCard>

<GlassCard className="p-6">

<p className="text-gray-400">Savings</p>

<h2 className="text-3xl font-bold text-cyan-400 mt-4">
₹50,800
</h2>

</GlassCard>

<GlassCard className="p-6">

<p className="text-gray-400">Health Score</p>

<h2 className="text-3xl font-bold text-purple-400 mt-4">
87%
</h2>

</GlassCard>

</div>

)

}

export default OverviewCards;
