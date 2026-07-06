import MainLayout from "../../layout/MainLayout";

import BudgetHeader from "../../components/budget/BudgetHeader";
import BudgetOverview from "../../components/budget/BudgetOverview";
import BudgetProgress from "../../components/budget/BudgetProgress";
import SavingsGoal from "../../components/budget/SavingsGoal";
import MonthlyPlanner from "../../components/budget/MonthlyPlanner";
import ExpenseLimit from "../../components/budget/ExpenseLimit";
import AIBudgetPlanner from "../../components/budget/AIBudgetPlanner";
import SmartAllocation from "../../components/budget/SmartAllocation";
import BudgetCalendar from "../../components/budget/BudgetCalendar";
import OverspendingAlert from "../../components/budget/OverspendingAlert";
import BudgetInsights from "../../components/budget/BudgetInsights";

function Budget() {
  return (
    <MainLayout>

      <BudgetHeader />

      <BudgetOverview />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <BudgetProgress />

        <SavingsGoal />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <MonthlyPlanner />

        <ExpenseLimit />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <AIBudgetPlanner />

        <SmartAllocation />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <BudgetCalendar />

        <OverspendingAlert />

      </div>

      <BudgetInsights />

    </MainLayout>
  );
}

export default Budget;
