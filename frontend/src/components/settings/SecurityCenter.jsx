import GlassCard from "../Glasscard/Glasscard";

function SecurityCenter() {

  return (

    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">

        🛡 Security Center

      </h2>

      <div className="space-y-4 mt-6">

        <div className="bg-white/5 rounded-xl p-4 flex justify-between">

          <span className="text-white">

            Two Factor Authentication

          </span>

          <span className="text-green-400">

            Active

          </span>

        </div>

        <div className="bg-white/5 rounded-xl p-4 flex justify-between">

          <span className="text-white">

            Change Password

          </span>

          <button className="text-cyan-400">

            Update

          </button>

        </div>

        <div className="bg-white/5 rounded-xl p-4 flex justify-between">

          <span className="text-white">

            Active Sessions

          </span>

          <span className="text-yellow-400">

            2 Devices

          </span>

        </div>

      </div>

    </GlassCard>

  );

}

export default SecurityCenter;