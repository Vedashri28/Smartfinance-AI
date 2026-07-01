import GlassCard from "../Glasscard/Glasscard";

const data=[
["Food","₹8,400"],
["Travel","₹3,200"],
["Shopping","₹6,900"],
["Bills","₹5,100"],
["Entertainment","₹2,400"]
];

function SpendingCategory(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white mb-6">
Top Categories
</h2>

<div className="space-y-4">

{data.map(([name,value])=>(

<div
key={name}
className="flex justify-between bg-white/5 rounded-xl p-4"
>

<span className="text-gray-300">
{name}
</span>

<span className="text-cyan-400 font-semibold">
{value}
</span>

</div>

))}

</div>

</GlassCard>

)

}

export default SpendingCategory;