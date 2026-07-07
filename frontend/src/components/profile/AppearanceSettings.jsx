import GlassCard from "../Glasscard/Glasscard";

function AppearanceSettings() {
  return (
    <GlassCard className="p-6 mt-8">

      <h2 className="text-2xl font-bold text-white">
        Appearance & Preferences
      </h2>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white/5 rounded-xl p-5">

          <h3 className="text-white font-semibold">
            Theme
          </h3>

          <p className="text-gray-400 mt-3">
            🌙 Dark Mode
          </p>

        </div>

        <div className="bg-white/5 rounded-xl p-5">

          <h3 className="text-white font-semibold">
            Language
          </h3>

          <p className="text-gray-400 mt-3">
            English
          </p>

        </div>

        <div className="bg-white/5 rounded-xl p-5">

          <h3 className="text-white font-semibold">
            Currency
          </h3>

          <p className="text-gray-400 mt-3">
            ₹ INR
          </p>

        </div>

      </div>

      <div className="flex justify-end mt-8">

        <button className="px-8 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold">

          Logout

        </button>

      </div>

    </GlassCard>
  );
}

export default AppearanceSettings;
