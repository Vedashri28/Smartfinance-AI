import GlassCard from "../Glasscard/Glasscard";

function DataExport() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        📥 Data Export
      </h2>

      <div className="space-y-4 mt-8">

        <button className="w-full p-4 rounded-xl bg-cyan-500 text-white">
          Download PDF Report
        </button>

        <button className="w-full p-4 rounded-xl bg-purple-600 text-white">
          Export CSV
        </button>

        <button className="w-full p-4 rounded-xl bg-green-600 text-white">
          Download Account Data
        </button>

      </div>

    </GlassCard>
  );
}

export default DataExport;