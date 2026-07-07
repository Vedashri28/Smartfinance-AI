import MainLayout from "../../layout/MainLayout";

import SettingsHeader from "../../components/settings/SettingsHeader";
import GeneralSettings from "../../components/settings/GeneralSettings";
import ThemeSettings from "../../components/settings/ThemeSettings";
import LanguageSettings from "../../components/settings/LanguageSettings";
import NotificationPreferences from "../../components/settings/NotificationPreferences";
import PrivacySettings from "../../components/settings/PrivacySettings";
import SecurityCenter from "../../components/settings/SecurityCenter";
import ConnectedDevices from "../../components/settings/ConnectedDevices";
import DataExport from "../../components/settings/DataExport";
import SupportCenter from "../../components/settings/SupportCenter";
import AboutApp from "../../components/settings/AboutApp";
import LogoutCard from "../../components/settings/LogoutCard";

function Settings() {
  return (
    <MainLayout>

      <SettingsHeader />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <GeneralSettings />
        <ThemeSettings />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <LanguageSettings />
        <NotificationPreferences />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <PrivacySettings />
        <SecurityCenter />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <ConnectedDevices />
        <DataExport />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <SupportCenter />
        <AboutApp />
      </div>

      <LogoutCard />

    </MainLayout>
  );
}

export default Settings;