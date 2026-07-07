import GlassCard from "../Glasscard/Glasscard";

const badges = [
  "🏆 Budget Master",
  "💰 ₹50K Saved",
  "🔥 30 Day Saving Streak",
  "🎯 Goal Achiever",
  "📊 Smart Investor",
  "🤖 AI Power User",
];

function Achievements() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Achievements
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-8">

        {badges.map((badge) => (

          <div
            key={badge}
            className="rounded-xl bg-white/5 p-5 text-center text-white hover:bg-cyan-500/10 transition"
          >
            {badge}
          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default Achievements;
