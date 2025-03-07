import React from "react";
import "../styles/Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Exercises for Full-Body Strength",
      description: "Discover the most effective workouts to build strength and endurance.",
      image: "blog1.jpg",
    },
    {
      id: 2,
      title: "How AI is Changing Fitness Tracking",
      description: "Explore how artificial intelligence is shaping the future of fitness analytics.",
      image: "blog2.jpg",
    },
    {
      id: 3,
      title: "Healthy Eating: What Science Says",
      description: "Learn the latest research-backed tips for a balanced and nutritious diet.",
      image: "blog3.jpg",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="gradient-text">Latest Fitness Insights & Tips</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={require(`../assets/${post.image}`)} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
