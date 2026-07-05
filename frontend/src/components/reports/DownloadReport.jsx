import GlassCard from "../Glasscard/Glasscard";

function DownloadReport() {

  return (

    <GlassCard className="p-6 flex flex-col justify-between">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Financial Report
        </h2>

        <p className="text-gray-400 mt-4">

          Export your monthly financial report as
          PDF or CSV.

        </p>

      </div>

      <div className="mt-8 flex gap-4">

        <button className="flex-1 py-3 rounded-xl bg-cyan-500 text-white">

          Download PDF

        </button>

        <button className="flex-1 py-3 rounded-xl bg-purple-600 text-white">

          Export CSV

        </button>

      </div>

    </GlassCard>

  );

}

export default DownloadReport;
