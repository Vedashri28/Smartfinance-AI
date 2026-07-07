import GlassCard from "../Glasscard/Glasscard";

function ThemeSettings() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-white text-2xl font-bold">
        Theme
      </h2>

      <div className="space-y-4 mt-6">

        <button className="w-full p-4 rounded-xl bg-cyan-500 text-white">
          🌙 Dark Theme
        </button>

        <button className="w-full p-4 rounded-xl bg-white/10 text-white">
          ☀️ Light Theme
        </button>

        <button className="w-full p-4 rounded-xl bg-white/10 text-white">
          💻 System Default
        </button>

      </div>

    </GlassCard>
  );
}

export default ThemeSettings;
