import MainLayout from "../../layout/MainLayout";

import TransactionHeader from "../../components/transactions/TransactionHeader";
import SummaryCards from "../../components/transactions/SummaryCards";
import SearchBar from "../../components/transactions/SearchBar";
import FilterTabs from "../../components/transactions/FilterTabs";
import TransactionTable from "../../components/transactions/TransactionTable";
import AddTransactionButton from "../../components/transactions/AddTransactionButton";
import CategoryFilter from "../../components/transactions/CategoryFilter";
import DateFilter from "../../components/transactions/DateFilter";
import ExportButton from "../../components/transactions/ExportButton";
import AIInsights from "../../components/transactions/AIInsights";
import MonthlyTrend from "../../components/transactions/MonthlyTrend";
import SpendingCategory from "../../components/transactions/SpendingCategory";
import FraudAlerts from "../../components/transactions/FraudAlerts";

function Transactions() {
  return (
    <MainLayout>

      <TransactionHeader />

      <SummaryCards />

      <div className="flex flex-wrap gap-4 mt-8">

<SearchBar />

<FilterTabs />

<CategoryFilter />

<DateFilter />

<ExportButton />

<AddTransactionButton />

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

  <MonthlyTrend />

  <SpendingCategory />

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

  <AIInsights />

  <FraudAlerts />

</div>

      <TransactionTable />

    </MainLayout>
  );
}

export default Transactions;