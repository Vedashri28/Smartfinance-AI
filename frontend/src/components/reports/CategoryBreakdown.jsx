import GlassCard from "../Glasscard/Glasscard";

const categories=[

["Food","₹8400"],

["Shopping","₹6900"],

["Travel","₹3200"],

["Bills","₹5100"],

["Entertainment","₹2400"]

];

function CategoryBreakdown(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white mb-8">

Category Analysis

</h2>

<div className="space-y-4">

{categories.map(([name,value])=>(

<div
key={name}
className="flex justify-between bg-white/5 rounded-xl p-4"
>

<span className="text-white">

{name}

</span>

<span className="text-cyan-400">

{value}

</span>

</div>

))}

</div>

</GlassCard>

)

}

export default CategoryBreakdown;
