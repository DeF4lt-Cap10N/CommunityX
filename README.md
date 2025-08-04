#  CommunityX

A **mini LinkedIn-like community platform** built with **React** (frontend) and **Node.js + Express** (backend), designed for developers to share thoughts, showcase profiles, and connect professionally.

---

##  Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS & dotenv

---

##  Features

###  Authentication
- User Registration and Login
- Email & Password-based Auth
- Secure session handling

###  User Profile
- Name, Email, Bio
- View & Edit Profile
- Display user’s own posts

###  Posts & Feed
- Public Post Feed with timestamps
- Create & display text-only posts
- View other users' posts
- Each post shows author’s name and time

---

##  Folder Structure


---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/DeF4lt-Cap10N/CommunityX.git
cd CommunityX
cd Backend
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
npm start


cd ../Frontend
npm install
npm run dev


