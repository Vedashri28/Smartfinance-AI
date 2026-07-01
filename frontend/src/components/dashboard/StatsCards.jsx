import StatCard from "./StatCard";

function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Balance"
        value="₹1,24,550"
        change="+12%"
        color="text-green-400"
      />

      <StatCard
        title="Income"
        value="₹52,000"
        change="+8%"
        color="text-cyan-400"
      />

      <StatCard
        title="Expenses"
        value="₹31,450"
        change="-5%"
        color="text-red-400"
      />

      <StatCard
        title="Savings"
        value="₹20,550"
        change="+15%"
        color="text-purple-400"
      />
    </div>
  );
}

export default StatsCards;