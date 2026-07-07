import GlassCard from "../Glasscard/Glasscard";

const tips = [
  "Reduce Food Spending by ₹2,000",
  "Increase SIP Investment",
  "Avoid unnecessary subscriptions",
  "Save ₹3,400 this month"
];

function AIRecommendations(){

return(

<GlassCard className="p-6">

<h2 className="text-white text-2xl font-bold">

🤖 AI Recommendations

</h2>

<div className="space-y-4 mt-6">

{tips.map(tip=>(

<div
key={tip}
className="bg-cyan-500/10 rounded-xl p-4 text-cyan-300"
>

✅ {tip}

</div>

))}

</div>

</GlassCard>

)

}

export default AIRecommendations;