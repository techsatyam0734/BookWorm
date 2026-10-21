📚 BookWorm

BookWorm is a full-stack, cross-platform app where book lovers can share and discover book recommendations. It runs on iOS, Android and the web from a single React Native (Expo) codebase and is backed by a Node.js, Express and MongoDB REST API with secure JWT authentication.

<!-- Add a banner or app screenshot here --> <!-- ![BookWorm](./screenshots/banner.png) -->
✨ Features
🔐 Complete authentication – signup, login and logout
🔒 JWT authentication – secure user sessions
📱 Cross-platform – works on iOS, Android and web browsers
📊 5 screens – Auth, Home, Create, Profile and more
🔄 Infinite loading – paginated, performance-optimized content loading
❤️ Interactive features – create, view and delete book recommendations
🖼️ Media handling – upload and share book cover images
✏️ Profile management – view your posts and profile information
🎨 4 UI themes – easy customization options
🔔 Confirmation alerts – user-friendly delete confirmations
🚀 Custom branding – personalized app logo and loading screen
🛠️ Tech Stack
Layer	Technologies
Frontend	React Native, Expo, JavaScript
Backend	Node.js, Express.js
Database	MongoDB
Auth	JSON Web Tokens (JWT)
API Testing	Postman
📸 Screenshots
<!-- Replace with your own screenshots -->
Login	Home	Create	Profile
Show Image	Show Image	Show Image	Show Image
🚀 Getting Started
Prerequisites
Node.js (v18 or later recommended)
A MongoDB database (local or Atlas)
Expo Go app on your phone (optional, for testing on a device)
1. Clone the repository
bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
2. Set up the backend
bash
cd backend
npm install

Create a .env file in the backend folder:

env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server:

bash
npm run dev
3. Set up the mobile app
bash
cd mobile
npm install
npx expo start

Then press:

a to open on an Android emulator
i to open on an iOS simulator
w to open in the browser
or scan the QR code with Expo Go on your phone

Make sure the app's API base URL points to your running backend.

🔌 API Overview
Method	Endpoint	Description
POST	/api/auth/register	Create a new account
POST	/api/auth/login	Log in and receive a JWT
GET	/api/books	Get paginated book recommendations
POST	/api/books	Create a recommendation
DELETE	/api/books/:id	Delete a recommendation
GET	/api/books/user	Get the logged-in user's recommendations

All book routes are protected and require a valid JWT in the Authorization header.

Update the routes above to match your actual API.

📁 Project Structure
BookWorm/
├── backend/     # Node.js + Express + MongoDB API
└── mobile/      # React Native (Expo) app

Adjust the folder names to match your repository.

🧪 Testing

The REST API was tested manually with Postman.

🔮 Future Improvements
Likes and comments on recommendations
Search and filter by genre or author
Edit existing recommendations
👤 Author

Satyam Tiwari

GitHub: @techsatyam0734
Email: satyamtiwari0734@gmail.com

⭐ If you like this project, give it a star!
