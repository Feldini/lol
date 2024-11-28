import { HomeIcon, BellIcon, MagnifyingGlassIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function SidebarLeft() {
  const menuItems = [
    { icon: <HomeIcon className="icon" />, text: "Home" },
    { icon: <MagnifyingGlassIcon className="icon" />, text: "Explore" },
    { icon: <BellIcon className="icon" />, text: "Notifications" },
    { icon: <ChatBubbleLeftEllipsisIcon className="icon" />, text: "Messages" },
  ];

  return (
    <aside className="sidebar-left">
      <div className="logo">X</div>
      <nav>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="menu-item">
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
      <button className="post-button">Login</button>
    </aside>
  );
}
