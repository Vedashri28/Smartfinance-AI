import GlassCard from "../Glasscard/Glasscard";

function ExpenseLimit() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Expense Limit
      </h2>

      <div className="mt-8">

        <p className="text-gray-400">
          Monthly Limit
        </p>

        <h1 className="text-5xl font-bold text-red-400 mt-4">
          ₹80,000
        </h1>

        <p className="text-green-400 mt-4">
          ₹38,300 Remaining
        </p>

      </div>

    </GlassCard>
  );
}

export default ExpenseLimit;