import GlassCard from "../Glasscard/Glasscard";

const settings = [
  "Email Notifications",
  "Budget Alerts",
  "AI Recommendations",
  "Monthly Reports"
];

function NotificationSettings() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Notifications
      </h2>

      <div className="space-y-4 mt-6">

        {settings.map((item) => (

          <div
            key={item}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <span className="text-white">
              {item}
            </span>

            <span className="text-green-400">
              ON
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default NotificationSettings;
