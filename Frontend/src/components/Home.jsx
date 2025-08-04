import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import ProfileCard from './ProfileCard';

function Home() {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('https://communityx-9e14.onrender.com/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('https://communityx-9e14.onrender.com/api/posts/me', {
        headers: { 'x-auth-token': token }
      });
      setProfile(res.data.user);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchProfile();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg text-gray-600">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Sidebar for Profile Card */}
      <div className="col-span-1 md:block">
        {profile && <ProfileCard profile={profile} />}
      </div>
      
      {/* Main Post Feed */}
      <div className="md:col-span-2 lg:col-span-1">
        <CreatePost onPostCreated={fetchPosts} />
        {posts.length > 0 ? (
          posts.map(post => <PostCard key={post._id} post={post} />)
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center text-gray-500">
            <p>No posts yet. Be the first to post!</p>
          </div>
        )}
      </div>

      {/* Right Sidebar for Suggestions/News (Placeholder) */}
      <div className="hidden lg:block col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-gray-700">CommunityX News</h2>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
              The future of work is remote.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
              Top tech skills for 2024.
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
              Hiring is on the rise!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;