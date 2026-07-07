import GlassCard from "../Glasscard/Glasscard";

const devices = [
  {
    name: "Windows Laptop",
    browser: "Chrome",
    status: "Current Device",
  },
  {
    name: "Samsung S24",
    browser: "Android",
    status: "Last Active 2 hrs ago",
  },
  {
    name: "iPad",
    browser: "Safari",
    status: "Inactive",
  },
];

function ConnectedDevices() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        💻 Connected Devices
      </h2>

      <div className="space-y-4 mt-8">

        {devices.map((device) => (

          <div
            key={device.name}
            className="bg-white/5 rounded-xl p-4 flex justify-between"
          >

            <div>

              <h3 className="text-white font-semibold">
                {device.name}
              </h3>

              <p className="text-gray-400">
                {device.browser}
              </p>

            </div>

            <span className="text-cyan-400">
              {device.status}
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default ConnectedDevices;