import MainLayout from "../../layout/MainLayout";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCards from "../../components/dashboard/StatsCards";
import ExpenseChart from "../../components/dashboard/ExpenseChart";
import AIHealthScore from "../../components/dashboard/AIHealthScore";
import AISpendingCoach from "../../components/dashboard/AISpendingCoach";
import BudgetProgress from "../../components/dashboard/BudgetProgress";
import UpcomingBills from "../../components/dashboard/UpcomingBills";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import InvestmentCard from "../../components/dashboard/InvestmentCard";
import MoneyPersonality from "../../components/dashboard/MoneyPersonality";
import Notifications from "../../components/dashboard/Notifications";
import QuickActions from "../../components/dashboard/QuickActions";
import SavingsSimulator from "../../components/dashboard/SavingsSimulator";
import AchievementBadges from "../../components/dashboard/AchievementBadges";

function Dashboard() {
  return (
    <MainLayout>

  <DashboardHeader />

  <StatsCards />

<div className="grid lg:grid-cols-3 gap-6 mt-8">

<div className="lg:col-span-2">

<ExpenseChart/>

</div>

<div className="space-y-6">

<AIHealthScore/>

<AISpendingCoach/>

</div>

</div>

  <div className="grid lg:grid-cols-3 gap-6 mt-8">

<div className="lg:col-span-2">

<BudgetProgress/>

</div>

<UpcomingBills/>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<InvestmentCard/>

<MoneyPersonality/>

</div>

  <RecentTransactions />

  <div className="grid grid-cols-2 gap-6 mt-8">

      <InvestmentCard />

      <Notifications />

  </div>

  <div className="grid lg:grid-cols-2 gap-6 mt-8">

  <SavingsSimulator />

  <AchievementBadges />

</div>

  <div className="mt-8">

      <QuickActions />

  </div>

</MainLayout>
  );
}

export default Dashboard;
