import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <Link
          to={`/profile/${post.user}`}
          className="font-bold text-lg hover:underline"
        >
          {post.name}
        </Link>
        <span className="text-gray-500 ml-2 text-sm">
          - {new Date(post.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-gray-700">{post.text}</p>
    </div>
  );
}

export default Post;
