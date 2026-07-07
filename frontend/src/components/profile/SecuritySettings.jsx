import GlassCard from "../Glasscard/Glasscard";

function SecuritySettings() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Security
      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-white/5 rounded-xl p-4 flex justify-between">

          <span className="text-white">
            Two-Factor Authentication
          </span>

          <span className="text-green-400">
            Enabled
          </span>

        </div>

        <div className="bg-white/5 rounded-xl p-4 flex justify-between">

          <span className="text-white">
            Password
          </span>

          <button className="text-cyan-400">
            Change
          </button>

        </div>

        <div className="bg-white/5 rounded-xl p-4 flex justify-between">

          <span className="text-white">
            Last Login
          </span>

          <span className="text-gray-400">
            Today
          </span>

        </div>

      </div>

    </GlassCard>
  );
}

export default SecuritySettings;