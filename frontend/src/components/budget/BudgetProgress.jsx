import GlassCard from "../Glasscard/Glasscard";

const budgets = [
  { name: "Food", used: 72 },
  { name: "Shopping", used: 48 },
  { name: "Travel", used: 35 },
  { name: "Bills", used: 81 },
];

function BudgetProgress() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Budget Progress
      </h2>

      <div className="mt-8 space-y-6">

        {budgets.map((item) => (

          <div key={item.name}>

            <div className="flex justify-between mb-2">

              <span className="text-white">
                {item.name}
              </span>

              <span className="text-cyan-400">
                {item.used}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-white/10">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                style={{ width: `${item.used}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default BudgetProgress;
