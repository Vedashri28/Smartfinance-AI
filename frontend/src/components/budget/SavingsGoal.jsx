import GlassCard from "../Glasscard/Glasscard";

function SavingsGoal() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Japan Trip 🇯🇵
      </h2>

      <p className="text-gray-400 mt-3">
        Goal ₹2,00,000
      </p>

      <div className="mt-8 h-4 rounded-full bg-white/10">

        <div
          className="h-4 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
          style={{ width: "41%" }}
        />

      </div>

      <div className="flex justify-between mt-4">

        <span className="text-green-400">
          ₹82,000 Saved
        </span>

        <span className="text-white">
          41%
        </span>

      </div>

    </GlassCard>
  );
}

export default SavingsGoal;
