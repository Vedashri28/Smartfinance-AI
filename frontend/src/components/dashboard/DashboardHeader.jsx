import { HiSparkles } from "react-icons/hi2";

function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <p className="text-cyan-400 uppercase tracking-[8px] text-sm">
          AI Powered Finance
        </p>

        <h1 className="text-5xl font-bold text-white mt-3">
          {greeting}, Vedashri 👋
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Your financial overview for today.
        </p>
      </div>

      <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
        <HiSparkles />
        AI Assistant
      </button>
    </div>
  );
}

export default DashboardHeader;