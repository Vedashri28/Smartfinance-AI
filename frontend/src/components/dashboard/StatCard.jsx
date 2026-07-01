import GlassCard from "../Glasscard/GlassCard";

function StatCard({
  title,
  value,
  change,
  color,
}) {
  return (
    <GlassCard className="p-6">
      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        {value}
      </h2>

      <span className={`${color} mt-2 block`}>
        {change}
      </span>
    </GlassCard>
  );
}

export default StatCard;