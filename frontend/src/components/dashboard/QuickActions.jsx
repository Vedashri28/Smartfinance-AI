import GlassCard from "../Glasscard/Glasscard";

const actions = [
  "➕ Add Expense",
  "📄 Upload Statement",
  "🤖 AI Advisor",
  "📊 Export Report"
];

function QuickActions() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => (

          <button
            key={action}
            className="rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 p-5 text-white hover:scale-105 transition"
          >
            {action}
          </button>

        ))}

      </div>

    </GlassCard>
  );
}

export default QuickActions;