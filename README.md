# Fareeha Kanwal – O & A Level English Educator | MERN Stack Website

A modern, responsive, and professional personal branding and course inquiry website built on the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** for **Fareeha Kanwal**, a premier English Language and Literature teacher, trainer, and academic entrepreneur based in **Karachi, Pakistan**.

---

## 🌟 Project Overview

This platform establishes Fareeha Kanwal's professional digital presence, highlights her teaching career across Karachi's top collegiate institutions (Nixor College, City School PAF Chapter, Beaconhouse A Levels College, Zaitians O & A Levels College, and Houser A Levels College), presents her educational initiatives (including **Spring Buds School**), details Cambridge CAIE course offerings, showcases student/parent reviews, and accepts prospective admissions inquiries.

---

## 🏛️ Associated Karachi Institutions Highlighted
- **Nixor College (A Levels)**
- **City School PAF Chapter (A Levels)**
- **Beaconhouse A Levels College**
- **Zaitians O & A Levels College**
- **Houser A Levels College**

---

## 🚀 Key Features

1. **Hero Section**:
   - Distinctive typography using literary serif (`Playfair Display`) and clean modern body text (`Plus Jakarta Sans`).
   - Exact required introduction statement highlighting her teaching career across Karachi's reputed colleges.
   - Professional headshot placeholder with clearly marked code comments for uploading the real portrait.
   - Quick badges: 10+ Years Experience, 5 Elite Colleges, A* & Distinction Mentorship.
2. **About Me / Biography**:
   - Highlights her multi-faceted role as an accomplished A Level teacher, trainer, and entrepreneur.
   - Spotlight on her community literacy and leadership initiative: **Spring Buds School**.
   - Core teaching pillars: *Student-Centric Learning*, *Conceptual Clarity Over Rote*, and *Exam-Focused Cambridge Strategy*.
3. **Experience & Institutions Timeline**:
   - Interactive, visually appealing timeline showcasing all 5 institutions with roles, syllabus focus, and institutional tags.
4. **Courses & Curricula**:
   - **O Level English Language (CAIE 1123)**
   - **O Level English Literature (CAIE 2010 / 0475)**
   - **A Level English Language (CAIE 9093)**
   - **A Level English Literature (CAIE 9695)**
   - **Institutional Teacher Training & Faculty Workshops**
   - Interactive modal pre-selection for course enrollment.
5. **Dynamic Testimonials**:
   - Dynamic testimonials stored in and served from MongoDB Atlas (`GET /api/testimonials`).
   - Resilient fallback with curated Cambridge student and parent reviews.
   - Interactive "Leave a Review" modal enabling students and parents to submit feedback (`POST /api/testimonials`).
6. **Admissions & Contact Section**:
   - Fully functional contact form connected to Express & MongoDB (`POST /api/contact`).
   - Fields: Name, Email, Phone, Subject category, Message, and Privacy Consent notice.
   - Direct professional contact coordinates:
     - Email: `fareeha.kanwal@example.com`
     - Phone / WhatsApp: `+92-3XX-XXXXXXX`
     - Location: Karachi, Pakistan
     - Official Instagram: [https://www.instagram.com/fareeha.khi/](https://www.instagram.com/fareeha.khi/)

---

## 🛠️ Tech Stack & Architecture

- **Frontend**:
  - React 18 with Vite
  - React Router DOM (supports single-page smooth scroll + multi-page routing)
  - Tailwind CSS with bespoke academic color theme (Royal Navy `#0f2744`, Academic Gold `#c28822`, Teal `#134e4a`, Cream `#faf8f5`)
  - Lucide React icons
  - Context API for global inquiry modal and toast notification management
- **Backend**:
  - Node.js & Express.js REST API
  - Mongoose ODM
  - CORS, Morgan logger, Dotenv
  - Resilient In-Memory Fallback: Operates seamlessly out of the box even before MongoDB Atlas credentials are provided, preventing application crashes.
- **Database**:
  - MongoDB Atlas (Cloud) with schemas for `Contact` inquiries and `Testimonial` reviews.

---

## 📁 Directory Structure

```
fareeha-kanwal-website/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # MongoDB Atlas connection & resilient fallback
│   │   ├── controllers/
│   │   │   ├── contactController.js     # Contact submission handlers
│   │   │   └── testimonialController.js # Testimonials fetch & creation
│   │   ├── middleware/
│   │   │   └── errorHandler.js          # Central error handling
│   │   ├── models/
│   │   │   ├── Contact.js               # Mongoose Contact Schema
│   │   │   └── Testimonial.js           # Mongoose Testimonial Schema
│   │   ├── routes/
│   │   │   ├── contactRoutes.js         # /api/contact routes
│   │   │   └── testimonialRoutes.js     # /api/testimonials routes
│   │   ├── seeds/
│   │   │   └── seedTestimonials.js      # Seed and fallback data
│   │   └── server.js                    # Express app initialization
│   ├── .env.example
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── ExperienceTimeline.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Methodology.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── EnrollModal.jsx
│   │   │   └── Toast.jsx
│   │   ├── context/
│   │   │   └── ContactContext.jsx
│   │   ├── services/
│   │   │   └── api.js                   # Client HTTP API methods
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
├── package.json                         # Root package script runner
└── README.md
```

---

## ⚡ Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Backend Setup
```bash
cd backend
npm install

# Configure environment variables
cp .env.example .env
```

Open `backend/.env` and optionally set your MongoDB Atlas connection URI:
```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/fareeha_kanwal_db?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:5173
```
*(Note: If `MONGODB_URI` is left blank, the backend operates in resilient demo mode with memory caching so you can test all features immediately!)*

Start the backend:
```bash
npm run dev
```
The server will run at `http://localhost:5001`.

### 2. Frontend Setup
In a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your web browser.

---

## 🖼️ Updating Fareeha Kanwal's Profile Picture

Because the official Instagram profile ([@fareeha.khi](https://www.instagram.com/fareeha.khi/)) is currently private, a placeholder avatar is rendered in the Hero section.

To update the image with her official photograph:
1. Save the high-resolution photo to:
   ```
   frontend/src/assets/fareeha-kanwal.jpg
   ```
2. Open `frontend/src/components/Hero.jsx` and locate the comment:
   `// TODO: PROFILE PICTURE UPDATE`
3. Replace the placeholder `div` with:
   ```jsx
   <img
     src="/src/assets/fareeha-kanwal.jpg"
     alt="Fareeha Kanwal - O & A Level English Educator"
     className="w-full h-full object-cover object-top"
   />
   ```

---

## 🚢 Deployment Guidelines

### 1. Database (MongoDB Atlas)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database user and whitelist IP `0.0.0.0/0` (allow access from anywhere).
3. Copy the connection string and paste it into your production environment variables as `MONGODB_URI`.

### 2. Backend (Render / Railway / Cyclic)
1. Connect your Git repository to **Render** (as a Web Service).
2. Set Build Command: `npm install`
3. Set Start Command: `node src/server.js`
4. Root Directory: `backend`
5. Add Environment Variables:
   - `PORT`: `5001` (or let Render set it)
   - `MONGODB_URI`: your Atlas connection string
   - `NODE_ENV`: `production`

### 3. Frontend (Vercel / Netlify)
1. Connect your Git repository to **Vercel** or **Netlify**.
2. Root Directory: `frontend`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Environment Variable:
   - `VITE_API_URL`: URL of your deployed backend (e.g. `https://fareeha-kanwal-api.onrender.com/api`)

---

## 🔒 Privacy & Data Protection
- Contact form submissions do not expose personal data client-side.
- The contact form includes an explicit consent statement verifying adherence to academic inquiry privacy protocols.
