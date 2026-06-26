import { useState } from "react";

import AuroraBackground from "../../components/ui/AuroraBackground/AuroraBackground";
import GlassCard from "../../components/GlassCard/GlassCard";
import GlassInput from "../../components/GlassInput/GlassInput";
import GlassButton from "../../components/GlassButton/GlassButton";

function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (

    <AuroraBackground>

      <div className="min-h-screen flex items-center justify-center px-6">

        <GlassCard className="w-full max-w-md p-10">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-white">
              SmartFinance AI
            </h1>

            <p className="mt-3 text-gray-300">
              Understand your money.
              Build your future.
            </p>

          </div>

          <div className="mt-10 space-y-6">

            <GlassInput
              label="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <GlassInput
              label="Password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-300">

                <input
                  type="checkbox"
                  className="accent-cyan-400"
                />

                Remember Me

              </label>

              <button className="text-cyan-400 hover:text-cyan-300">
                Forgot Password?
              </button>

            </div>

            <GlassButton>

              Login

            </GlassButton>

            <p className="text-center text-gray-300">

              Don't have an account?

              <span className="ml-2 cursor-pointer text-cyan-400 hover:text-cyan-300">

                Register

              </span>

            </p>

          </div>

        </GlassCard>

      </div>

    </AuroraBackground>

  );

}

export default Login;