import GlassCard from "../Glasscard/Glasscard";

function AboutApp() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        ℹ️ About SmartFinance AI
      </h2>

      <div className="space-y-3 mt-8">

        <p className="text-gray-300">
          Version: 1.0.0
        </p>

        <p className="text-gray-300">
          Built with React + Tailwind CSS
        </p>

        <p className="text-gray-300">
          Backend: Node.js + Express (Coming Soon)
        </p>

        <p className="text-gray-300">
          Database: MongoDB Atlas
        </p>

      </div>

    </GlassCard>
  );
}

export default AboutApp;
