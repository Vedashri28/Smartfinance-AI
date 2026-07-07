import GlassCard from "../Glasscard/Glasscard";

const notifications = [
  "Budget Alerts",
  "AI Recommendations",
  "Monthly Reports",
  "Email Notifications",
  "Push Notifications"
];

function NotificationPreferences() {

  return (

    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        🔔 Notifications
      </h2>

      <div className="space-y-4 mt-6">

        {notifications.map((item) => (

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

export default NotificationPreferences;
