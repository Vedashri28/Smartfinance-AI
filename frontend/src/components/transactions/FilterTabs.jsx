function FilterTabs() {

  return (

    <div className="flex gap-3">

      <button className="px-5 py-3 rounded-xl bg-cyan-500 text-white">
        All
      </button>

      <button className="px-5 py-3 rounded-xl bg-white/10 text-white">
        Income
      </button>

      <button className="px-5 py-3 rounded-xl bg-white/10 text-white">
        Expense
      </button>

    </div>

  );
}

export default FilterTabs;
