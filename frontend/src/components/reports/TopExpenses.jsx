import GlassCard from "../Glasscard/Glasscard";

const expenses = [
  ["Amazon", "₹6,400"],
  ["Swiggy", "₹3,900"],
  ["Uber", "₹2,200"],
  ["Netflix", "₹649"],
  ["Electricity", "₹1,950"]
];

function TopExpenses() {

  return (

    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
        Top Expense Merchants
      </h2>

      <div className="space-y-4">

        {expenses.map(([merchant, amount]) => (

          <div
            key={merchant}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <span className="text-white">
              {merchant}
            </span>

            <span className="text-red-400 font-semibold">
              {amount}
            </span>

          </div>

        ))}

      </div>

    </GlassCard>

  );

}

export default TopExpenses;
