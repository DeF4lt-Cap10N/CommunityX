import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile }) {
  const avatarUrl = `https://placehold.co/80x80/667eea/ffffff?text=${
    profile.name ? profile.name.charAt(0) : "U"
  }`;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 sticky top-20">
      <div className="text-center border-b border-gray-200 pb-4 mb-4">
        <div className="h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-t-lg mx-auto -mt-5  mb-5"></div>
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto border-4 border-white -mt-16"
        />
        <h2 className="text-lg font-bold mt-2 text-gray-800">{profile.name}</h2>
        <p className="text-sm text-gray-500">{profile.bio}</p>
      </div>
      <div className="text-center">
        <Link to="/profile/me" className="text-violet-600 hover:underline">
          View my profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
