import AuroraBackground from "../components/ui/AuroraBackground/AuroraBackground";

function AuthLayout({ children }) {
  return (
    <AuroraBackground>
      <div className="min-h-screen px-8">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center">
          {children}
        </div>
      </div>
    </AuroraBackground>
  );
}

export default AuthLayout;