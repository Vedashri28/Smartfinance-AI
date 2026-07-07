import GlassCard from "../Glasscard/Glasscard";

function LogoutCard() {
  return (
    <GlassCard className="p-6 mt-8">

      <h2 className="text-2xl font-bold text-red-400">
        🚪 Logout
      </h2>

      <p className="text-gray-400 mt-3">
        End your current session securely.
      </p>

      <button
        className="mt-8 px-8 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold"
      >
        Logout
      </button>

    </GlassCard>
  );
}

export default LogoutCard;
