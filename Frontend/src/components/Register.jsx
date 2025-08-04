import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', bio: '' });
  const [error, setError] = useState('');
  const { name, email, password, bio } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://communityx-9e14.onrender.com/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Registration failed. A user with this email may already exist.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Make the most of your professional life</h1>
      <p className="text-center text-gray-500 mb-6">Join CommunityX today!</p>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Bio (optional)"
            name="bio"
            value={bio}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-violet-600 text-white p-3 rounded-md font-bold hover:bg-violet-700 transition-colors"
        >
          Agree & Join
        </button>
      </form>
      <div className="text-center mt-6">
        <p className="text-gray-600">Already on CommunityX? <Link to="/login" className="text-violet-600 hover:underline font-bold">Sign in</Link></p>
      </div>
    </div>
  );
}

export default Register;