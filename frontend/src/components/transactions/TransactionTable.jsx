import GlassCard from "../Glasscard/Glasscard";
import TransactionRow from "./TransactionRow";

const transactions = [
  {
    id: 1,
    merchant: "Swiggy",
    category: "Food",
    amount: "-₹420",
    status: "Completed",
    date: "Today",
    type: "expense",
  },
  {
    id: 2,
    merchant: "Amazon",
    category: "Shopping",
    amount: "-₹1,299",
    status: "Completed",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 3,
    merchant: "Salary",
    category: "Income",
    amount: "+₹50,000",
    status: "Received",
    date: "1 Jul",
    type: "income",
  },
  {
    id: 4,
    merchant: "Uber",
    category: "Travel",
    amount: "-₹230",
    status: "Pending",
    date: "30 Jun",
    type: "expense",
  },
  {
    id: 5,
    merchant: "Netflix",
    category: "Subscription",
    amount: "-₹649",
    status: "Completed",
    date: "28 Jun",
    type: "expense",
  },
  {
  id:6,
  merchant:"Unknown Merchant",
  category:"Online",
  amount:"-₹9,999",
  status:"Flagged",
  date:"Today",
  type:"expense",
  risk:"High"
},
];

function TransactionTable() {
  return (
    <GlassCard className="p-6 mt-8 overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-400 border-b border-white/10">

            <th className="pb-4">Merchant</th>
            <th className="pb-4">Category</th>
            <th className="pb-4">Date</th>
            <th className="pb-4">Status</th>
            <th className="pb-4 text-right">Amount</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((item) => (

            <TransactionRow
              key={item.id}
              transaction={item}
            />

          ))}

        </tbody>

      </table>

    </GlassCard>
  );
}

export default TransactionTable;