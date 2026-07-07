import GlassCard from "../Glasscard/Glasscard";

function GeneralSettings() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-white text-2xl font-bold">
        General
      </h2>

      <div className="space-y-4 mt-6">

        <div className="flex justify-between">
          <span className="text-gray-300">Currency</span>
          <span className="text-cyan-400">₹ INR</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Time Zone</span>
          <span className="text-cyan-400">Asia/Kolkata</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Week Starts</span>
          <span className="text-cyan-400">Monday</span>
        </div>

      </div>

    </GlassCard>
  );
}

export default GeneralSettings;