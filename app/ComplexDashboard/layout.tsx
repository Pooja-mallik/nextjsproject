import UserAnalytics from "./UserAnalytics/page";
import Notification from "./Notification/page";

export default function ComplexDashboard() {
  return (
    <div>
      <h1>Complex dashboard</h1>
      <UserAnalytics />
      <Notification />
    </div>
  );
}