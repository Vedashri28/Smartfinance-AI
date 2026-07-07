import GlassCard from "../Glasscard/Glasscard";

function UsageStatistics() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Usage Statistics
      </h2>

      <div className="space-y-5 mt-8">

        <div className="flex justify-between">
          <span className="text-gray-300">Days Active</span>
          <span className="text-cyan-400">186</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Transactions</span>
          <span className="text-green-400">1,248</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Reports Generated</span>
          <span className="text-purple-400">48</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">AI Conversations</span>
          <span className="text-yellow-400">325</span>
        </div>

      </div>

    </GlassCard>
  );
}

export default UsageStatistics;