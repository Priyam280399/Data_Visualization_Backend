Data Visualization Dashboard - Backend
This is the backend for the Data Visualization Dashboard. It is built using Node.js, Express, and MongoDB. It provides APIs to fetch and filter data for visualization on the frontend.

Technologies Used

Node.js
Express.js
MongoDB
Mongoose
dotenv
CORS

Project Structure

backend/
│
├── models/
│   └── DataModel.js       // Mongoose schema for the data
│
├── routes/
│   └── dataRoutes.js      // API route to get filtered data
│
├── import.js              // Script to import JSON data into MongoDB
├── server.js              // Entry point of the backend server
├── jsondata.json          // Your original JSON dataset
├── .env                   // Environment file (MongoDB URI etc.)


Setup Instructions

Clone the Repository
git clone https://github.com/Priyam280399/Data_Visualization_Backend.git
cd Data_Visualization_Backend

Install Dependencies
npm install

Start the Server
npm start

 Features
Read JSON data from MongoDB

Supports filtering by:

Country

City

Topic

Sector

Region

PEST

SWOT

Source

End Year

Easily extendable for more filters

