import GlassCard from "../Glasscard/Glasscard";

import {
 ResponsiveContainer,
 AreaChart,
 Area,
 XAxis,
 Tooltip
} from "recharts";

const data = [
 {month:"Jan",expense:18000},
 {month:"Feb",expense:22000},
 {month:"Mar",expense:16000},
 {month:"Apr",expense:25000},
 {month:"May",expense:21000},
 {month:"Jun",expense:28000},
];

function ExpenseChart(){

return(

<GlassCard className="p-8 h-[420px]">

<div className="flex justify-between items-center mb-6">

<div>

<p className="text-cyan-400 uppercase text-sm">
Analytics
</p>

<h2 className="text-2xl font-bold text-white">
Monthly Expenses
</h2>

</div>

<div className="text-right">

<p className="text-gray-400">
Total
</p>

<h3 className="text-3xl text-white font-bold">
₹1.30L
</h3>

</div>

</div>

<ResponsiveContainer width="100%" height={300}>

<AreaChart data={data}>

<defs>

<linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">

<stop offset="5%" stopColor="#3B82F6"/>

<stop offset="95%" stopColor="#3B82F6" stopOpacity="0"/>

</linearGradient>

</defs>

<XAxis
dataKey="month"
stroke="#9CA3AF"
/>

<Tooltip/>

<Area

type="monotone"

dataKey="expense"

stroke="#3B82F6"

fill="url(#expense)"

strokeWidth={4}

/>

</AreaChart>

</ResponsiveContainer>

</GlassCard>

)

}

export default ExpenseChart;