import GlassCard from "../Glasscard/Glasscard";

function AISpendingCoach() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        AI Spending Coach
      </h2>

      <p className="text-gray-300 mt-5">
        You spent 18% more on Food this week.
      </p>

      <div className="mt-5 bg-cyan-500/10 rounded-xl p-4">

        <p className="text-cyan-300">
          💡 Try cooking twice this week to save ₹900.
        </p>

      </div>

    </GlassCard>
  );
}

export default AISpendingCoach;