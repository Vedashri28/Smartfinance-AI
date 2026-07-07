import GlassCard from "../Glasscard/Glasscard";

function UserProfileCard() {
  return (
    <GlassCard className="p-8">

      <div className="flex flex-col lg:flex-row items-center gap-8">

        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-5xl">

          👤

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            Vedashri Giri
          </h2>

          <p className="text-gray-400 mt-2">
            AI Finance Enthusiast
          </p>

          <p className="text-cyan-400 mt-4">
            SmartFinance AI Premium User
          </p>

        </div>

      </div>

    </GlassCard>
  );
}

export default UserProfileCard;