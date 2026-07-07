import MainLayout from "../../layout/MainLayout";

import ProfileHeader from "../../components/profile/ProfileHeader";
import UserProfileCard from "../../components/profile/UserProfileCard";
import AccountSettings from "../../components/profile/AccountSettings";
import SecuritySettings from "../../components/profile/SecuritySettings";
import NotificationSettings from "../../components/profile/NotificationSettings";
import ConnectedAccounts from "../../components/profile/ConnectedAccounts";
import Achievements from "../../components/profile/Achievements";
import UsageStatistics from "../../components/profile/UsageStatistics";
import AppearanceSettings from "../../components/profile/AppearanceSettings";

function Profile() {
  return (
    <MainLayout>

      <ProfileHeader />

      <UserProfileCard />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <AccountSettings />

        <SecuritySettings />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <NotificationSettings />

        <ConnectedAccounts />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <Achievements />

        <UsageStatistics />

      </div>

      <AppearanceSettings />

    </MainLayout>
  );
}

export default Profile;