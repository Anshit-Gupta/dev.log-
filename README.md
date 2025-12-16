# dev.log - Note Taking Application

A modern, full-stack note-taking application built with React and Express. Create, read, update, and delete notes with a beautiful UI and powerful backend.

🔗 Live here: https://dev-log-phzk.onrender.com/

## 🚀 Features

- ✨ Create, edit, and delete notes
- 🎨 Modern UI with DaisyUI and Tailwind CSS
- 🔒 Rate limiting with Upstash Redis
- 📱 Responsive design
- ⚡ Fast and efficient
- 🌐 Production-ready deployment

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind component library
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express 4** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account (MongoDB Atlas)
- Upstash Redis account

### Clone the repository
```bash
git clone https://github.com/Anshit-Gupta/dev.log-.git
cd dev.log-
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

4. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory (from root):
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🌍 Deployment

### Prerequisites
- Build the frontend before deployment
- Set environment variables in your hosting platform

### Build Frontend
```bash
cd frontend
npm run build
```

### Deploy to Render

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your repository
4. Configure the service:
   - **Build Command**: `cd frontend && npm install && npm run build && cd ../backend && npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: Leave empty (or use backend if needed)
5. Add environment variables in Render dashboard:
   - `PORT`
   - `MONGO_URI`
   - `NODE_ENV=production`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

## 📁 Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Upstash Redis config
│   │   ├── controllers/
│   │   │   └── notesControllers.js # Note CRUD operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Express server
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── lib/
│   │   │   ├── axios.js           # Axios instance
│   │   │   └── utils.js           # Utility functions
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🔑 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5001) |
| `MONGO_URI` | MongoDB connection string |
| `NODE_ENV` | Environment (development/production) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token |

## 🎯 API Endpoints

### Notes
- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get note by ID
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🔒 Rate Limiting

The application uses Upstash Redis for rate limiting:
- **Limit**: 100 requests per 60 seconds
- **Type**: Sliding window algorithm

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Anshit Gupta**
- GitHub: [@Anshit-Gupta](https://github.com/Anshit-Gupta)

## 🙏 Acknowledgments

- DaisyUI for the beautiful components
- Upstash for rate limiting infrastructure
- MongoDB for the database solution
