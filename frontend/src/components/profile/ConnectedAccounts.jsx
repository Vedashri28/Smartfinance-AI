import GlassCard from "../Glasscard/Glasscard";

const accounts = [
  "Google Account",
  "Bank Account",
  "UPI ID",
  "Credit Card"
];

function ConnectedAccounts() {
  return (
    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">
        Connected Accounts
      </h2>

      <div className="space-y-4 mt-6">

        {accounts.map((item) => (

          <div
            key={item}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <span className="text-white">
              {item}
            </span>

            <span className="text-cyan-400">
              Connected
            </span>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default ConnectedAccounts;