import GlassCard from "../Glasscard/Glasscard";

function VoiceAssistant() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🎙️ Voice Assistant
      </h2>

      <div className="flex flex-col items-center mt-8">

        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-4xl">

          🎤

        </div>

        <p className="text-gray-400 mt-6 text-center">

          Voice commands will be available in the backend phase.

        </p>

      </div>

    </GlassCard>
  );
}

export default VoiceAssistant;