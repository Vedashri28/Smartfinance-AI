import GlassCard from "../Glasscard/Glasscard";

function MonthlyTrend() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Monthly Trend
      </h2>

      <div className="mt-8 flex items-end gap-4 h-48">

        {[40,65,80,55,90,70].map((h,i)=>(

          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-lg"
            style={{height:`${h}%`}}
          />

        ))}

      </div>

    </GlassCard>
  );
}

export default MonthlyTrend;