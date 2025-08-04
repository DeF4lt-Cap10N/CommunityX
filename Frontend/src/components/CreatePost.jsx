
// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost({ onPostCreated }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!text.trim()) {
      setError("Post cannot be empty.");
      return;
    }
    try {
      await axios.post(
        'http://localhost:3000/api/posts',
        { text },
        {
          headers: { 'x-auth-token': token }
        }
      );
      setText('');
      setError('');
      if (onPostCreated) onPostCreated();
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      setError("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 mb-6">
      <form onSubmit={onSubmit}>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none"
          rows="3"
          placeholder="What's on your mind?"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-600 text-white px-5 py-2 rounded-full font-bold hover:bg-violet-700 transition-colors"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
