import GlassCard from "../Glasscard/Glasscard";

function OverspendingAlert() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🚨 Budget Alerts
      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-red-500/10 rounded-xl p-4">
          <p className="text-red-400">
            Food budget reached 82%.
          </p>
        </div>

        <div className="bg-yellow-500/10 rounded-xl p-4">
          <p className="text-yellow-300">
            Entertainment spending increased this week.
          </p>
        </div>

        <div className="bg-green-500/10 rounded-xl p-4">
          <p className="text-green-400">
            Shopping budget is on track.
          </p>
        </div>

      </div>

    </GlassCard>
  );
}

export default OverspendingAlert;
