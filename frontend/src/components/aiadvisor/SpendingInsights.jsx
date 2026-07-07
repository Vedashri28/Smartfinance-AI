import GlassCard from "../Glasscard/Glasscard";

const insights = [
  {
    title: "Highest Spending",
    value: "Food",
    color: "text-red-400",
  },
  {
    title: "Best Saving",
    value: "Travel",
    color: "text-green-400",
  },
  {
    title: "Investment Growth",
    value: "+18%",
    color: "text-cyan-400",
  },
];

function SpendingInsights() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        📊 Spending Insights
      </h2>

      <div className="space-y-4 mt-8">

        {insights.map((item) => (

          <div
            key={item.title}
            className="bg-white/5 rounded-xl p-4 flex justify-between"
          >

            <span className="text-gray-300">

              {item.title}

            </span>

            <span className={`${item.color} font-semibold`}>

              {item.value}

            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default SpendingInsights;
