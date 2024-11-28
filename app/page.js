import SidebarLeft from "./components/SidebarLeft";
import Feed from "./components/Feed";
import SidebarRight from "./components/SidebarRight";

export default function Home() {
  return (
    <div className="page-container">
      <SidebarLeft />
      <Feed />
      <SidebarRight />
    </div>
  );
}
