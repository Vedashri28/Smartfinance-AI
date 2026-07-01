import GlassCard from "../Glasscard/Glasscard";

const investments = [
  {
    name: "Mutual Funds",
    profit: "+12%"
  },
  {
    name: "Stocks",
    profit: "+8%"
  },
  {
    name: "Gold",
    profit: "+4%"
  }
];

function InvestmentCard() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Investments
      </h2>

      <div className="mt-6 space-y-4">

        {investments.map((item) => (

          <div
            key={item.name}
            className="flex justify-between rounded-xl bg-white/5 p-4"
          >

            <span className="text-gray-300">
              {item.name}
            </span>

            <span className="text-green-400 font-bold">
              {item.profit}
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default InvestmentCard;