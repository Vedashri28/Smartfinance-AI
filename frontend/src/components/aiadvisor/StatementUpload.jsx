import GlassCard from "../Glasscard/Glasscard";

function StatementUpload(){

return(

<GlassCard className="p-6">

<h2 className="text-white text-2xl font-bold">

📄 Upload Statement

</h2>

<div className="mt-10 border-2 border-dashed border-cyan-500 rounded-2xl p-12 text-center">

<p className="text-gray-400">

Drag & Drop Bank Statement

</p>

<button className="mt-6 px-6 py-3 rounded-xl bg-cyan-500 text-white">

Choose File

</button>

</div>

</GlassCard>

)

}

export default StatementUpload;