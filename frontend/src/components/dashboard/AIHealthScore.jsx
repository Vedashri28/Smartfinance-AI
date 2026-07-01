import GlassCard from "../Glasscard/Glasscard";

function AIHealthScore() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        AI Health Score
      </h2>

      <div className="mt-6 text-center">

        <h1 className="text-6xl font-bold text-cyan-400">
          87
        </h1>

        <p className="text-gray-400 mt-3">
          Excellent Financial Health
        </p>

      </div>

    </GlassCard>
  );
}

export default AIHealthScore;