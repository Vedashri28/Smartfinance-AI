import GlassCard from "../Glasscard/Glasscard";

const prompts=[

"How can I save ₹10,000/month?",

"Analyse my spending",

"Create investment plan",

"Where am I overspending?"

];

function PromptSuggestions(){

return(

<GlassCard className="p-6 mt-6">

<h2 className="text-white text-xl font-bold">

Suggested Prompts

</h2>

<div className="grid grid-cols-2 gap-4 mt-6">

{prompts.map(prompt=>(

<button

key={prompt}

className="bg-white/5 hover:bg-cyan-500/20 rounded-xl p-4 text-gray-300 transition"

>

{prompt}

</button>

))}

</div>

</GlassCard>

)

}

export default PromptSuggestions;
