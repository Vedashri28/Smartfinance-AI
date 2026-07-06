import GlassCard from "../Glasscard/Glasscard";

const planner = [
  ["Rent", "₹15,000"],
  ["Food", "₹8,000"],
  ["Travel", "₹4,000"],
  ["Shopping", "₹6,000"],
  ["Savings", "₹20,000"],
];

function MonthlyPlanner() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Monthly Plan
      </h2>

      <div className="space-y-4 mt-8">

        {planner.map(([name, amount]) => (

          <div
            key={name}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <span className="text-white">
              {name}
            </span>

            <span className="text-cyan-400">
              {amount}
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default MonthlyPlanner;
