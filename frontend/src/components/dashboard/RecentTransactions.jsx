import GlassCard from "../Glasscard/Glasscard";

const transactions = [
  {
    title: "Swiggy",
    category: "Food",
    amount: "- ₹420",
    date: "Today"
  },
  {
    title: "Salary",
    category: "Income",
    amount: "+ ₹50,000",
    date: "Yesterday"
  },
  {
    title: "Amazon",
    category: "Shopping",
    amount: "- ₹1,299",
    date: "2 days ago"
  },
  {
    title: "Uber",
    category: "Travel",
    amount: "- ₹250",
    date: "3 days ago"
  }
];

function RecentTransactions() {
  return (
    <GlassCard className="p-6 mt-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-white">
          Recent Transactions
        </h2>

        <button className="text-cyan-400 hover:text-cyan-300">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {transactions.map((item) => (

          <div
            key={item.title + item.date}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4 hover:bg-white/10 transition"
          >

            <div>

              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.category}
              </p>

            </div>

            <div className="text-right">

              <p className="text-white font-semibold">
                {item.amount}
              </p>

              <p className="text-gray-500 text-sm">
                {item.date}
              </p>

            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default RecentTransactions;