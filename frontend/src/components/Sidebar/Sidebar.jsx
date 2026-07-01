import {
  FiHome,
  FiCreditCard,
  FiPieChart,
  FiTarget,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const menu = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  { name: "Transactions", icon: FiCreditCard, path: "/transactions" },
  { name: "Reports", icon: FiPieChart, path: "/reports" },
  { name: "Budget", icon: FiTarget, path: "/budget" },
  { name: "Profile", icon: FiUser, path: "/profile" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white/5 backdrop-blur-3xl border-r border-white/10">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-white">
          SmartFinance
        </h1>

        <p className="text-cyan-400 mt-2">
          AI Finance
        </p>

      </div>

      <nav className="mt-8 px-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-4 rounded-2xl p-4 text-gray-300 transition-all hover:bg-white/10 hover:text-cyan-400"
            >
              <Icon size={22} />
              {item.name}
            </Link>
          );

        })}

      </nav>

      <div className="absolute bottom-8 w-full px-4">

        <button className="flex w-full items-center gap-4 rounded-2xl p-4 text-red-400 hover:bg-red-500/10">

          <FiLogOut size={22} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;