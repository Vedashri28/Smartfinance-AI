import GlassCard from "../Glasscard/Glasscard";

function ChatWindow(){

return(

<GlassCard className="p-6 h-[450px]">

<h2 className="text-xl font-bold text-white">

AI Chat

</h2>

<div className="space-y-4 mt-8">

<div className="bg-cyan-500/10 p-4 rounded-xl">

<p className="text-cyan-300">

👋 Hello Vedashri! How can I improve your finances today?

</p>

</div>

<div className="bg-white/5 p-4 rounded-xl">

<p className="text-white">

You spent ₹2,400 on food yesterday.

</p>

</div>

</div>

<div className="mt-10">

<input

placeholder="Ask AI anything..."

className="w-full bg-white/10 rounded-xl p-4 text-white outline-none"

/>

</div>

</GlassCard>

)

}

export default ChatWindow;
