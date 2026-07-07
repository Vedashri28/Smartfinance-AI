import GlassCard from "../Glasscard/Glasscard";

function GoalPlanner(){

return(

<GlassCard className="p-6">

<h2 className="text-white text-2xl font-bold">

🎯 Financial Goal

</h2>

<h1 className="text-5xl font-bold text-green-400 mt-8">

₹5,00,000

</h1>

<p className="text-gray-400 mt-4">

Dream Car Fund

</p>

<div className="h-4 bg-white/10 rounded-full mt-8">

<div
className="bg-green-400 h-4 rounded-full"
style={{width:"48%"}}
></div>

</div>

<p className="text-white mt-4">

48% Completed

</p>

</GlassCard>

)

}

export default GoalPlanner;
