import GlassCard from "../Glasscard/Glasscard";

function AIReportSummary() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🤖 AI Financial Summary
      </h2>

      <div className="space-y-5 mt-6">

        <div className="bg-cyan-500/10 rounded-xl p-4">

          <p className="text-cyan-300">
            Income increased by 12% this month.
          </p>

        </div>

        <div className="bg-purple-500/10 rounded-xl p-4">

          <p className="text-purple-300">
            Shopping expenses reduced by 18%.
          </p>

        </div>

        <div className="bg-green-500/10 rounded-xl p-4">

          <p className="text-green-300">
            Estimated yearly savings:
            ₹61,000
          </p>

        </div>

      </div>

    </GlassCard>
  );
}

export default AIReportSummary;