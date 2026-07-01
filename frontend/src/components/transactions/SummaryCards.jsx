import GlassCard from "../Glasscard/Glasscard";

function SummaryCards() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">

      <GlassCard className="p-6">

        <p className="text-gray-400">
          Total Income
        </p>

        <h1 className="text-4xl text-green-400 font-bold mt-4">
          ₹92,500
        </h1>

      </GlassCard>

      <GlassCard className="p-6">

        <p className="text-gray-400">
          Total Expense
        </p>

        <h1 className="text-4xl text-red-400 font-bold mt-4">
          ₹41,700
        </h1>

      </GlassCard>

      <GlassCard className="p-6">

        <p className="text-gray-400">
          Balance
        </p>

        <h1 className="text-4xl text-cyan-400 font-bold mt-4">
          ₹50,800
        </h1>

      </GlassCard>

    </div>
  );
}

export default SummaryCards;
