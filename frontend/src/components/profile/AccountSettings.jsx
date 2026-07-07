import GlassCard from "../Glasscard/Glasscard";

function AccountSettings() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Account Settings
      </h2>

      <div className="mt-6 space-y-4">

        <input
          defaultValue="Vedashri Giri"
          className="w-full bg-white/10 rounded-xl p-4 text-white outline-none"
        />

        <input
          defaultValue="vedashri@example.com"
          className="w-full bg-white/10 rounded-xl p-4 text-white outline-none"
        />

        <input
          defaultValue="+91 9876543210"
          className="w-full bg-white/10 rounded-xl p-4 text-white outline-none"
        />

        <button className="px-6 py-3 rounded-xl bg-cyan-500 text-white">
          Save Changes
        </button>

      </div>

    </GlassCard>
  );
}

export default AccountSettings;
