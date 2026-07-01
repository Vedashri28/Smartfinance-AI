import AuthLayout from "../../layout/AuthLayout";
import HeroSection from "../../components/auth/HeroSection";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout>
      <HeroSection />

      <div className="flex w-full justify-center lg:w-1/2">
        <LoginForm />
      </div>
    </AuthLayout>
  );
}

export default Login;