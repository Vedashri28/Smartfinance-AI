import GlassCard from "../Glasscard/Glasscard";

const tips = [

"Reduce food delivery by 15%",

"Increase SIP by ₹1000/month",

"Maintain emergency fund",

"Pay credit card before due date"

];

function Recommendations(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white mb-8">

Smart Recommendations

</h2>

<div className="space-y-4">

{tips.map((tip)=>(

<div
key={tip}
className="bg-white/5 rounded-xl p-4 text-gray-300"
>

✅ {tip}

</div>

))}

</div>

</GlassCard>

)

}

export default Recommendations;