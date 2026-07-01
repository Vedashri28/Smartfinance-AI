import GlassCard from "../Glasscard/Glasscard";

const badges = [
  "🏅 Budget Master",
  "🔥 7 Days No Overspending",
  "💰 ₹50K Saved",
  "🎯 Goal Achiever"
];

function AchievementBadges() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Achievements
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {badges.map((badge) => (

          <div
            key={badge}
            className="rounded-xl bg-white/5 p-4 text-center text-white"
          >
            {badge}
          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default AchievementBadges;