import GlassCard from "../Glasscard/Glasscard";

const months=[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
];

function MonthlyComparison(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white mb-8">

Monthly Comparison

</h2>

<div className="space-y-4">

{months.map((month,index)=>(

<div
key={month}
className="flex items-center gap-4"
>

<div className="w-12 text-gray-400">

{month}

</div>

<div className="flex-1 h-3 rounded-full bg-white/10">

<div
className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
style={{
width:`${50+index*8}%`
}}
></div>

</div>

</div>

))}

</div>

</GlassCard>

)

}

export default MonthlyComparison;