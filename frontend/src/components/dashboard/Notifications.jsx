import GlassCard from "../Glasscard/Glasscard";

const alerts = [
  {
    title: "Salary Credited",
    color: "text-green-400"
  },
  {
    title: "Electricity Bill due in 3 days",
    color: "text-yellow-400"
  },
  {
    title: "Food spending exceeded 80%",
    color: "text-red-400"
  },
  {
    title: "Savings Goal Updated",
    color: "text-cyan-400"
  }
];

function Notifications() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Notifications
      </h2>

      <div className="space-y-4">

        {alerts.map((item) => (

          <div
            key={item.title}
            className="rounded-xl bg-white/5 p-4"
          >

            <p className={item.color}>
              ● {item.title}
            </p>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default Notifications;