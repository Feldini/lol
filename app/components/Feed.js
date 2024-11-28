"use client";

import { useState, useEffect } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <main className="feed">
      <div className="news-feed">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="news-article">
              <h2 className="headline">{post.title}</h2>
              <p className="timestamp">{new Date(post.timestamp).toLocaleString()}</p>
              <p className="content">{post.content}</p>
              {post.image && <img className="article-image" src={post.image} alt={post.title} />}
            </div>
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
    </main>
  );
}
