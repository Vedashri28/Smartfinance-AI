import GlassCard from "../Glasscard/Glasscard";

const actions = [
  "💰 Add Expense",
  "📄 Upload Statement",
  "🎯 Set Goal",
  "📊 Generate Report",
  "🤖 Ask AI",
  "📥 Export Data",
];

function QuickActions() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 mt-8">

        {actions.map((item) => (

          <button
            key={item}
            className="bg-white/5 hover:bg-cyan-500/20 transition rounded-xl p-4 text-white"
          >

            {item}

          </button>

        ))}

      </div>

    </GlassCard>
  );
}

export default QuickActions;
