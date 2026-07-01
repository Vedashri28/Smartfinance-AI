import GlassCard from "../Glasscard/Glasscard";

const budgets = [
  { category: "Food", spent: 7200, total: 10000 },
  { category: "Shopping", spent: 4100, total: 8000 },
  { category: "Travel", spent: 2500, total: 5000 },
];

function BudgetProgress() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-2xl font-bold text-white">
        Budget Progress
      </h2>

      <p className="text-gray-400 mt-2">
        Monthly Budget Usage
      </p>

      <div className="mt-8 space-y-6">
        {budgets.map((item) => {
          const percent = Math.round(
            (item.spent / item.total) * 100
          );

          return (
            <div key={item.category}>
              <div className="flex justify-between mb-2">

                <span className="text-white">
                  {item.category}
                </span>

                <span className="text-cyan-400">
                  {percent}%
                </span>

              </div>

              <div className="h-3 bg-white/10 rounded-full">

                <div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  style={{ width: `${percent}%` }}
                />

              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

export default BudgetProgress;