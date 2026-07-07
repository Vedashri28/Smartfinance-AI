import GlassCard from "../Glasscard/Glasscard";

const options = [
  "📧 Contact Support",
  "❓ FAQ",
  "📘 User Guide",
  "📝 Report a Bug",
];

function SupportCenter() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🆘 Support
      </h2>

      <div className="space-y-4 mt-8">

        {options.map((item) => (

          <button
            key={item}
            className="w-full rounded-xl bg-white/5 p-4 text-left text-white hover:bg-cyan-500/10 transition"
          >

            {item}

          </button>

        ))}

      </div>

    </GlassCard>
  );
}

export default SupportCenter;
