import FeedCard from '../components/FeedCard';

export default function Home() {
  const posts = [
    {
      username: "Philip Petras",
      userImage: "https://i.pravatar.cc/150?img=1",
      timestamp: "1 hour ago",
      text: "Check out this new game mode in Fortnite!",
      image: "https://example.com/fortnite-image.jpg",
    },
    {
      username: "Elon Musk",
      userImage: "https://i.pravatar.cc/150?img=2",
      timestamp: "3 hours ago",
      text: "Falcon Heavy successfully launched today! 🚀",
      image: "https://example.com/falcon-heavy.jpg",
    },
  ];

  return (
    <div className="page-container">
      {/* Left Sidebar */}
      <div className="sidebar-left">
        <div className="menu-item">
          <div className="icon">
            <img src="home-icon.svg" alt="Home" />
          </div>
          Home
        </div>
        <div className="menu-item">
          <div className="icon">
            <img src="explore-icon.svg" alt="Explore" />
          </div>
          Explore
        </div>
        <div className="menu-item">
          <div className="icon">
            <img src="notifications-icon.svg" alt="Notifications" />
          </div>
          Notifications
        </div>
        <div className="menu-item">
          <div className="icon">
            <img src="messages-icon.svg" alt="Messages" />
          </div>
          Messages
        </div>
      </div>

      {/* Feed Section */}
      <div className="feed">
        <div className="post-button">Post Something...</div>
        {posts.map((post, index) => (
          <FeedCard key={index} post={post} />
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="sidebar-right">
        <div className="menu-item">
          <div className="icon">
            <img src="trends-icon.svg" alt="Trends" />
          </div>
          Trends
        </div>
        <div className="menu-item">
          <div className="icon">
            <img src="who-to-follow-icon.svg" alt="Who to Follow" />
          </div>
          Who to Follow
        </div>
      </div>
    </div>
  );
}
