function Logo() {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        💠
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white leading-tight">
          SmartFinance AI
        </h2>
        <p className="text-xs text-cyan-300 font-medium">
          AI Personal Finance
        </p>
      </div>
    </div>
  );
}

export default Logo;