import {
  FiBell,
  FiSearch,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#050816]/70 p-6 backdrop-blur-xl">

      <div className="relative">

        <FiSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          placeholder="Search..."
          className="w-96 rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-xl bg-white/5 p-3">

          <FiBell size={22} className="text-white" />

        </button>

        <img
          src="https://ui-avatars.com/api/?name=V&background=3b82f6&color=fff"
          alt="profile"
          className="h-12 w-12 rounded-full"
        />

      </div>

    </header>
  );
}

export default Navbar;