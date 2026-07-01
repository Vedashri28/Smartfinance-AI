import GlassCard from "../Glasscard/Glasscard";

function SavingsSimulator() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        What If You Save?
      </h2>

      <p className="text-gray-400 mt-3">
        Save ₹100/day
      </p>

      <div className="mt-8">

        <h1 className="text-5xl text-cyan-400 font-bold">
          ₹36,500
        </h1>

        <p className="text-gray-400 mt-3">
          Estimated savings after 1 year
        </p>

      </div>

    </GlassCard>
  );
}

export default SavingsSimulator;