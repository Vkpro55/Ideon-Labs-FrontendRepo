# Appointment Booking App: Appointly: React + Firebase
This is a simple appointment booking application that allows users to book 30-minute time slots from Monday to Friday, 9:00 AM to 5:00 PM IST. Users can select a date within a configurable booking window (default: 5 days) and book available slots. The app features:

Frontend: Built with React, providing an intuitive interface to check slot availability and book appointments.
Backend: Powered by Firebase Cloud Functions, handling API requests to interact with Firestore.
Database: Cloud Firestore stores and manages booking data efficiently, preventing duplicate bookings and ensuring real-time updates.
Key Features:
Fetch available slots for a selected date.
Book a slot with user-specific information.
Clear feedback for booked or unavailable slots.

## Overview
This project is a full-stack application with a **React + TailWind CSS** Frontend and a **Node.js with Supabse and Prisma ORM** Backend. The backend handles the full Crud opeartion for Students seamlessly.


## How to Run the Project Locally

### Prerequisites
- Node.js 
- Supabase with Prisma ORM

### Backend (Node.js + Supabse + Prisma ORM)

1. **Backend Repo**:
   ```bash
   https://github.com/Vkpro55/Imagify_Backend
   ```
   Backend Deployed Url: 
   ```bash
    https://instrictive-backend.onrender.com
   ```

2. **Clone the repository**:
   ```bash
   git clone https://github.com/Vkpro55/Instrictive_Backend.git
   cd Instrictive_Backend
   ```
3. **Install Packages**:
   ```bash
   npm install
   ```
3. **Run the backend server**:
   ```bash
   npm start
   ```
4. **Backend API Endpoints**:
   ```bash
   curl -X GET https://instrictive-backend.onrender.com/api/students
    
   ```
   ```bash
   curl -X PUT https://instrictive-backend.onrender.com/api/students/3 \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Updated",
           "cohort": "AY25",
           "dateJoined": "2024-12-24T07:40:34.849Z",
           "lastLogin": "2024-12-24T07:40:34.849Z",
           "status": true,
           "courses": [
             {
                 "id": 1,
                 "name": "CBSE 9 Math"
             }
           ]
         }'

   ```

   ```bash
   curl -X DELETE http://localhost:3000/api/students/103

   ```
   ```bash
   curl -X POST https://instrictive-backend.onrender.com/api/students \
     -H "Content-Type: application/json" \
     -d '{
           "name": "New Student",
           "cohort": "AY25",
           "dateJoined": "2024-12-24T07:40:34.849Z",
           "lastLogin": "2024-12-24T07:40:34.849Z",
           "status": true,
           "courses": [
             {
                 "id": 1,
                 "name": "CBSE 9 Math"
             }
           ]
         }'


   ```

### Frontend (React)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vkpro55/Insrictive_frontend.git
   cd Insrictive_frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm run dev
   ```

![Screenshot (482)](https://github.com/user-attachments/assets/bc6806ae-4d85-4a28-91c4-071a9eec0e95)


   
