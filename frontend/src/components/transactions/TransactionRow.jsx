function TransactionRow({ transaction }) {

  return (

    <tr className="border-b border-white/5 hover:bg-white/5 transition">

      <td className="py-5">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">

            💳

          </div>

          <div>

            <p className="text-white font-semibold">
              {transaction.merchant}
            </p>

          </div>

        </div>

      </td>

      <td className="text-gray-300">
        {transaction.category}
      </td>

      <td className="text-gray-400">
        {transaction.date}
      </td>

      <td>

        <span
          className={`px-3 py-1 rounded-full text-sm

          ${
            transaction.status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : transaction.status === "Pending"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-cyan-500/20 text-cyan-400"
          }

          `}
        >

          {transaction.status}

        </span>

      </td>

      <td
        className={`text-right font-bold

        ${
          transaction.type === "income"
            ? "text-green-400"
            : "text-red-400"
        }

        `}
      >

        {transaction.amount}

      </td>

    </tr>

  );
}

export default TransactionRow;