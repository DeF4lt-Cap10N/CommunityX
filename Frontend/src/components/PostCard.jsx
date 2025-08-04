
import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  // Simple avatar placeholder
  const avatarUrl = `https://placehold.co/48x48/667eea/ffffff?text=${post.name ? post.name.charAt(0) : 'U'}`;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 mb-4">
      <div className="flex items-center mb-3">
        <img src={avatarUrl} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <Link to={`/profile/${post.user}`} className="font-bold text-lg text-gray-800 hover:text-violet-700">
            {post.name}
          </Link>
          <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()} - {new Date(post.date).toLocaleTimeString()}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{post.text}</p>
    </div>
  );
}

export default PostCard;