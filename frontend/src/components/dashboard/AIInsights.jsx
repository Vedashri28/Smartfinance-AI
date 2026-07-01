import GlassCard from "../Glasscard/Glasscard";

function AIInsights() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-xl text-white font-bold">
        AI Insights
      </h2>

      <ul className="mt-4 space-y-3 text-gray-300">
        <li>💡 Reduce food spending by 8%</li>
        <li>📈 Savings increased this month</li>
        <li>🎯 Budget goal is 82% complete</li>
      </ul>
    </GlassCard>
  );
}

export default AIInsights;