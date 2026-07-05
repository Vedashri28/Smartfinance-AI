import MainLayout from "../../layout/MainLayout";

import ReportsHeader from "../../components/reports/ReportsHeader";
import OverviewCards from "../../components/reports/OverviewCards";
import ExpensePieChart from "../../components/reports/ExpensePieChart";
import IncomeExpenseChart from "../../components/reports/IncomeExpenseChart";
import MonthlyComparison from "../../components/reports/MonthlyComparison";
import CategoryBreakdown from "../../components/reports/CategoryBreakdown";
import CashFlow from "../../components/reports/CashFlow";
import AIReportSummary from "../../components/reports/AIReportSummary";
import TopExpenses from "../../components/reports/TopExpenses";
import DownloadReport from "../../components/reports/DownloadReport";
import SavingsPrediction from "../../components/reports/SavingsPrediction";
import Recommendations from "../../components/reports/Recommendations";

function Reports() {
  return (
    <MainLayout>

      <ReportsHeader />

      <OverviewCards />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <ExpensePieChart />

        <IncomeExpenseChart />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <MonthlyComparison />

        <CategoryBreakdown />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <CashFlow />

        <AIReportSummary />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <TopExpenses />

        <DownloadReport />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

  <SavingsPrediction />

  <Recommendations />

</div>

    </MainLayout>
  );
}

export default Reports;
