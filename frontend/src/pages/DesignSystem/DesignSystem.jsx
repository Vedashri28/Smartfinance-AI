import { GlassCard, GlassButton, GlassInput } from "../../components/ui";

function DesignSystem() {
  return (
    <div style={{ padding: "40px" }}>
      <GlassCard>
        <h2>SmartFinance UI</h2>

        <br />

        <GlassInput
          label="Email"
          placeholder="Enter your email"
        />

        <br />

        <GlassButton>
          Continue
        </GlassButton>
      </GlassCard>
    </div>
  );
}

export default DesignSystem;