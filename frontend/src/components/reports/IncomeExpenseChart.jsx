import GlassCard from "../Glasscard/Glasscard";

const income=[60,75,80,65,90,95];
const expense=[45,40,55,52,60,58];

function IncomeExpenseChart(){

return(

<GlassCard className="p-6">

<h2 className="text-2xl font-bold text-white mb-8">

Income vs Expense

</h2>

<div className="flex items-end gap-4 h-56">

{income.map((item,index)=>(

<div
key={index}
className="flex-1 flex flex-col justify-end gap-2"
>

<div
className="bg-green-500 rounded"
style={{height:`${expense[index]}%`}}
></div>

<div
className="bg-cyan-500 rounded"
style={{height:`${item}%`}}
></div>

</div>

))}

</div>

</GlassCard>

)

}

export default IncomeExpenseChart;
