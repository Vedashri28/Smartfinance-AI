import GlassCard from "../Glasscard/Glasscard";

const allocation = [
  ["Housing", 40],
  ["Food", 20],
  ["Savings", 20],
  ["Travel", 10],
  ["Entertainment", 10],
];

function SmartAllocation() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Smart Allocation
      </h2>

      <div className="space-y-5 mt-8">

        {allocation.map(([name, value]) => (

          <div key={name}>

            <div className="flex justify-between mb-2">

              <span className="text-white">
                {name}
              </span>

              <span className="text-cyan-400">
                {value}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-white/10">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                style={{ width: `${value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default SmartAllocation;
