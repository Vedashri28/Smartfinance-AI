import GlassCard from "../Glasscard/Glasscard";

function BudgetInsights() {
  return (
    <GlassCard className="p-6 mt-8">

      <h2 className="text-2xl font-bold text-white">
        📈 AI Budget Insights
      </h2>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white/5 rounded-xl p-5">

          <h3 className="text-cyan-400 font-bold">
            Best Category
          </h3>

          <p className="text-white mt-3">
            Savings
          </p>

        </div>

        <div className="bg-white/5 rounded-xl p-5">

          <h3 className="text-yellow-400 font-bold">
            Needs Attention
          </h3>

          <p className="text-white mt-3">
            Food Expenses
          </p>

        </div>

        <div className="bg-white/5 rounded-xl p-5">

          <h3 className="text-green-400 font-bold">
            Potential Savings
          </h3>

          <p className="text-white mt-3">
            ₹3,400/month
          </p>

        </div>

      </div>

    </GlassCard>
  );
}

export default BudgetInsights;