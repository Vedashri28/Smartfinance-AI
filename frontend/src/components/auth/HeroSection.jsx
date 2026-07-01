import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex w-1/2 flex-col pr-24"
    >
      <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
        AI Powered Finance
      </p>

      <h1 className="mt-6 text-6xl font-bold leading-tight text-white">
        Your Money.
        <br />
        Powered by AI.
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-gray-300">
        Manage expenses, upload bank statements,
        analyse spending and receive intelligent AI-powered
        financial recommendations.
      </p>

      <div className="mt-12 space-y-5 text-lg text-gray-300">
        <p>✔ AI Expense Analysis</p>
        <p>✔ Budget Prediction</p>
        <p>✔ Financial Health Score</p>
        <p>✔ Smart Saving Suggestions</p>
      </div>
    </motion.div>
  );
}

export default HeroSection;