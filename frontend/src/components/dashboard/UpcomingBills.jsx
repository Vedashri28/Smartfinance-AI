import GlassCard from "../Glasscard/Glasscard";

const bills = [
  {
    name: "Netflix",
    amount: "₹649",
    due: "Tomorrow",
  },
  {
    name: "Electricity",
    amount: "₹1280",
    due: "3 Days",
  },
  {
    name: "Credit Card",
    amount: "₹6200",
    due: "8 Days",
  },
];

function UpcomingBills() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Upcoming Bills
      </h2>

      <div className="mt-6 space-y-5">

        {bills.map((bill) => (

          <div
            key={bill.name}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <div>

              <h3 className="text-white">
                {bill.name}
              </h3>

              <p className="text-gray-400">
                {bill.due}
              </p>

            </div>

            <p className="text-red-400 font-bold">
              {bill.amount}
            </p>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default UpcomingBills;