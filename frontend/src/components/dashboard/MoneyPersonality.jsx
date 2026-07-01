import GlassCard from "../Glasscard/Glasscard";

function MoneyPersonality() {
  return (
    <GlassCard className="p-6">

      <p className="text-cyan-400 uppercase">
        AI Personality
      </p>

      <h2 className="text-2xl font-bold text-white mt-2">
        Balanced Saver 🌿
      </h2>

      <p className="text-gray-300 mt-5 leading-7">

        You consistently save money and avoid unnecessary
        spending.

        Weekend food delivery is your biggest expense.

      </p>

      <div className="mt-6 rounded-xl bg-cyan-500/10 p-4">

        <p className="text-cyan-300">

          💡 AI Tip

        </p>

        <p className="text-gray-300 mt-2">

          Reduce food spending by 10%.

          Estimated yearly savings:

          ₹4,800

        </p>

      </div>

    </GlassCard>
  );
}

export default MoneyPersonality;