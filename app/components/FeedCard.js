export default function FeedCard({ post }) {
  return (
    <div className="feed-card">
      <div className="user-info">
        <img src={post.userImage} alt={post.username} />
        <div>
          <p className="username">{post.username}</p>
          <p className="timestamp">{post.timestamp}</p>
        </div>
      </div>
      <div className="content">
        <p>{post.text}</p>
        {post.image && <img src={post.image} alt="Post" />}
      </div>
      <div className="actions">
        <button>Like</button>
        <button>Reply</button>
        <button>Retweet</button>
      </div>
    </div>
  );
}
