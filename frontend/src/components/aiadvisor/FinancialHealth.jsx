import GlassCard from "../Glasscard/Glasscard";

function FinancialHealth(){

return(

<GlassCard className="p-6">

<h2 className="text-white text-2xl font-bold">

Financial Health

</h2>

<h1 className="text-6xl font-bold text-green-400 mt-8">

92%

</h1>

<p className="text-gray-400 mt-4">

Excellent Financial Score

</p>

<div className="mt-8 h-3 bg-white/10 rounded-full">

<div

className="h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"

style={{width:"92%"}}

></div>

</div>

</GlassCard>

)

}

export default FinancialHealth;
