import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

import GlassCard from "../Glasscard/Glasscard";
import GlassButton from "../Glassbutton/Glassbutton";
import GlassInput from "../Glassinput/Glassinput";
import Logo from "../Logo/Logo";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <GlassCard className="w-full max-w-md p-8 lg:p-10">

      <Logo />

      <h2 className="mt-6 text-3xl font-bold text-white">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-gray-400">
        Sign in to continue using SmartFinance AI
      </p>

      <div className="mt-8 space-y-5">

        <GlassInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">

          <GlassInput
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-5 text-white"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>

        </div>

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-gray-300">

            <input
              type="checkbox"
              className="accent-cyan-400"
            />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Forgot Password?
          </Link>

        </div>

        <GlassButton>
          Login
        </GlassButton>

        <p className="text-center text-gray-400">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-cyan-400 hover:text-cyan-300"
          >
            Register
          </Link>

        </p>

      </div>

    </GlassCard>
  );
}

export default LoginForm;