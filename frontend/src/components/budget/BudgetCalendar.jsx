import GlassCard from "../Glasscard/Glasscard";

const events = [
  ["1 Jul", "Salary Received"],
  ["5 Jul", "Rent Payment"],
  ["10 Jul", "Electricity Bill"],
  ["15 Jul", "SIP Investment"],
  ["25 Jul", "Credit Card Due"],
];

function BudgetCalendar() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Budget Calendar
      </h2>

      <div className="space-y-4 mt-8">

        {events.map(([date, event]) => (

          <div
            key={date}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <span className="text-cyan-400">
              {date}
            </span>

            <span className="text-white">
              {event}
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default BudgetCalendar;
