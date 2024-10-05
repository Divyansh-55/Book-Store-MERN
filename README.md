# BookStore MERN Website <br>

This is a full-stack bookstore web application built using the MERN stack (MongoDB, Express, React, Node.js). The website offers a dynamic and responsive user interface with user authentication and two types of access: registered users can access the courses section, and unregistered users can browse free books. <br>

## Features <br>

- **User Authentication**: Users can sign up, log in, and access additional content after authentication. <br>
- **Book Cards**: Each book is displayed as a card with a dummy image, title, price, rating, and category. <br>
- **Free Books**: Unregistered users can access a collection of free books. <br>
- **Courses Section**: Registered users can view exclusive courses. <br>
- **Responsive Design**: The UI is fully responsive and adjusts to various screen sizes. <br>
- **Dark Theme**: The website includes a toggleable dark theme for better user experience. <br>

## Technologies Used <br>

- **Frontend**: <br>
  - React.js <br>
  - TailwindCSS for styling <br>
- **Backend**: <br>
  - Node.js <br>
  - Express.js <br>
- **Database**: <br>
  - MongoDB <br>

## Installation and Setup <br>

 **1. Clone the repository**
```
git clone https://github.com/Divyansh-55/bookstore-mern.git
```

**2. Navigate into the project directory**
```
cd bookstore
```

**3. Install backend dependencies**
```
cd backend
npm install
```

**4. Install frontend dependencies**
```bash
cd ../frontend
npm install
```

**5. Set up environment variables:**
# Create a .env file in the backend directory with the following content:
```
echo "MONGO_URI=your_mongo_db_connection_string" >> ../backend/.env
echo "JWT_SECRET=your_jwt_secret" >> ../backend/.env
```

** 6. Run the backend server**
```
cd ../backend
npm start
```

**7. Run the frontend server**
```
cd ../frontend
npm start
```

**8. The app should now be running on:**
```
# - Frontend: http://localhost:3000
# - Backend: http://localhost:8000
```
