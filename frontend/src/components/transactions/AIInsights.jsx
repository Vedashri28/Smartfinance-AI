import GlassCard from "../Glasscard/Glasscard";

function AIInsights() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🤖 AI Insights
      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-cyan-500/10 rounded-xl p-4">
          <p className="text-cyan-300">
            You spent 18% less on Food this month.
          </p>
        </div>

        <div className="bg-purple-500/10 rounded-xl p-4">
          <p className="text-purple-300">
            Saving ₹100/day can grow to ₹36,500/year.
          </p>
        </div>

        <div className="bg-green-500/10 rounded-xl p-4">
          <p className="text-green-300">
            Your salary covers 2.2× your monthly expenses.
          </p>
        </div>

      </div>

    </GlassCard>
  );
}

export default AIInsights;