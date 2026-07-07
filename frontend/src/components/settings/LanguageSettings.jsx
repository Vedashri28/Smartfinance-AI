import GlassCard from "../Glasscard/Glasscard";

function LanguageSettings() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🌍 Language
      </h2>

      <div className="space-y-4 mt-6">

        <button className="w-full p-4 rounded-xl bg-cyan-500 text-white">
          🇬🇧 English
        </button>

        <button className="w-full p-4 rounded-xl bg-white/10 text-white">
          🇮🇳 Hindi
        </button>

        <button className="w-full p-4 rounded-xl bg-white/10 text-white">
          🇮🇳 Marathi
        </button>

      </div>

    </GlassCard>
  );
}

export default LanguageSettings;