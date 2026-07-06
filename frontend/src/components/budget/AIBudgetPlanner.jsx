import GlassCard from "../Glasscard/Glasscard";

function AIBudgetPlanner() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🤖 AI Budget Planner
      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-cyan-500/10 rounded-xl p-4">
          <p className="text-cyan-300">
            Reduce Food spending by 10%.
          </p>
        </div>

        <div className="bg-purple-500/10 rounded-xl p-4">
          <p className="text-purple-300">
            Increase Investments by ₹2,000/month.
          </p>
        </div>

        <div className="bg-green-500/10 rounded-xl p-4">
          <p className="text-green-300">
            Estimated monthly savings: ₹3,400
          </p>
        </div>

      </div>

    </GlassCard>
  );
}

export default AIBudgetPlanner;
