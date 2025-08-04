
// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';

function Profile() {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        let res;
        
        if (userId === 'me') {
          res = await axios.get('http://localhost:3000/api/posts/me', {
            headers: { 'x-auth-token': token }
          });
        } else {
          res = await axios.get(`http://localhost:3000/api/posts/user/${userId}`);
        }

        setProfileData(res.data);
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return <p className="text-center mt-10 text-lg text-gray-600">Loading profile...</p>;
  }

  if (!profileData) {
    return <p className="text-center mt-10 text-red-500">Profile not found.</p>;
  }

  const user = profileData.user || { name: profileData.posts[0]?.name || 'User', bio: 'Bio not available.' };
  const posts = profileData.posts || [];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-6">
        <div className="h-32 bg-gradient-to-r from-violet-500 to-purple-600 rounded-t-lg"></div>
        <div className="p-6 -mt-16 text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto border-4 border-white"></div>
          <h1 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h1>
          <p className="text-gray-600 text-sm mt-1">{user.bio}</p>
        </div>
      </div>

      {/* User's Posts */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Posts by {user.name}</h2>
        {posts.length > 0 ? (
          posts.map(post => <PostCard key={post._id} post={post} />)
        ) : (
          <p className="text-center text-gray-500">No posts from this user yet.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;