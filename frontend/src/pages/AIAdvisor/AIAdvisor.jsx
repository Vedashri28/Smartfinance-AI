import MainLayout from "../../layout/MainLayout";

import AIHeader from "../../components/aiadvisor/AIHeader";
import ChatWindow from "../../components/aiadvisor/ChatWindow";
import PromptSuggestions from "../../components/aiadvisor/PromptSuggestions";
import FinancialHealth from "../../components/aiadvisor/FinancialHealth";
import AIRecommendations from "../../components/aiadvisor/AIRecommendations";
import GoalPlanner from "../../components/aiadvisor/GoalPlanner";
import StatementUpload from "../../components/aiadvisor/StatementUpload";
import FuturePrediction from "../../components/aiadvisor/FuturePrediction";
import SpendingInsights from "../../components/aiadvisor/SpendingInsights";
import QuickActions from "../../components/aiadvisor/QuickActions";
import VoiceAssistant from "../../components/aiadvisor/VoiceAssistant";
import InvestmentTips from "../../components/aiadvisor/InvestmentTips";

function AIAdvisor() {

return(

<MainLayout>

<AIHeader/>

<div className="grid lg:grid-cols-3 gap-6 mt-8">

<div className="lg:col-span-2">

<ChatWindow/>

<PromptSuggestions/>

</div>

<div>

<FinancialHealth/>

</div>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<AIRecommendations/>

<GoalPlanner/>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<StatementUpload/>

<FuturePrediction/>

</div>

<div className="grid lg:grid-cols-2 gap-6 mt-8">

<SpendingInsights/>

<QuickActions/>

</div>
<div className="grid lg:grid-cols-2 gap-6 mt-8">

  <VoiceAssistant />

  <InvestmentTips />

</div>

</MainLayout>

)

}

export default AIAdvisor;
