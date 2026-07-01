import GlassCard from "../Glasscard/Glasscard";

function FraudAlerts(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white">
Security Monitor
</h2>

<div className="mt-6 space-y-4">

<div className="rounded-xl bg-green-500/10 p-4">

<p className="text-green-400">

✅ No suspicious activity detected

</p>

</div>

<div className="rounded-xl bg-yellow-500/10 p-4">

<p className="text-yellow-300">

⚠ Login from Pune • 2 hours ago

</p>

</div>

</div>

</GlassCard>

)

}

export default FraudAlerts;