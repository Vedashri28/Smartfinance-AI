import GlassCard from "../Glasscard/Glasscard";

const privacy = [
  "Face ID",
  "Fingerprint Login",
  "Auto Logout",
  "Private Mode"
];

function PrivacySettings() {

  return (

    <GlassCard className="p-6">

      <h2 className="text-2xl font-bold text-white">

        🔒 Privacy

      </h2>

      <div className="space-y-4 mt-6">

        {privacy.map((item) => (

          <div
            key={item}
            className="flex justify-between bg-white/5 rounded-xl p-4"
          >

            <span className="text-white">

              {item}

            </span>

            <span className="text-cyan-400">

              Enabled

            </span>

          </div>

        ))}

      </div>

    </GlassCard>

  );

}

export default PrivacySettings;
