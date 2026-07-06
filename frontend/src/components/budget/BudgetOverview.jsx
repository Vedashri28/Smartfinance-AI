import GlassCard from "../Glasscard/Glasscard";

function BudgetOverview(){

return(

<div className="grid lg:grid-cols-4 gap-6">

<GlassCard className="p-6">

<p className="text-gray-400">

Monthly Budget

</p>

<h2 className="text-cyan-400 text-3xl font-bold mt-4">

₹80,000

</h2>

</GlassCard>

<GlassCard className="p-6">

<p className="text-gray-400">

Spent

</p>

<h2 className="text-red-400 text-3xl font-bold mt-4">

₹41,700

</h2>

</GlassCard>

<GlassCard className="p-6">

<p className="text-gray-400">

Remaining

</p>

<h2 className="text-green-400 text-3xl font-bold mt-4">

₹38,300

</h2>

</GlassCard>

<GlassCard className="p-6">

<p className="text-gray-400">

Goal Progress

</p>

<h2 className="text-purple-400 text-3xl font-bold mt-4">

82%

</h2>

</GlassCard>

</div>

)

}

export default BudgetOverview;
