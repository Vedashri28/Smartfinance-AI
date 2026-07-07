import GlassCard from "../Glasscard/Glasscard";

const tips = [
  "Invest 20% of monthly income",
  "Increase SIP by ₹1000",
  "Maintain 6-month emergency fund",
  "Diversify investments",
];

function InvestmentTips() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        📈 Investment Tips
      </h2>

      <div className="space-y-4 mt-8">

        {tips.map((tip) => (

          <div
            key={tip}
            className="bg-green-500/10 rounded-xl p-4 text-green-300"
          >

            ✅ {tip}

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default InvestmentTips;