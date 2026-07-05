import GlassCard from "../Glasscard/Glasscard";

const data = [
  { name: "Food", value: 35, color: "bg-cyan-500" },
  { name: "Shopping", value: 25, color: "bg-purple-500" },
  { name: "Bills", value: 20, color: "bg-green-500" },
  { name: "Travel", value: 20, color: "bg-yellow-500" },
];

function ExpensePieChart() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Expense Breakdown
      </h2>

      <div className="space-y-5 mt-8">

        {data.map((item) => (

          <div key={item.name}>

            <div className="flex justify-between text-white mb-2">

              <span>{item.name}</span>

              <span>{item.value}%</span>

            </div>

            <div className="w-full bg-white/10 rounded-full h-3">

              <div
                className={`${item.color} h-3 rounded-full`}
                style={{ width: `${item.value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default ExpensePieChart;