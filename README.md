# Appointment Booking App: Appointly: React + Firebase
This is a simple appointment booking application that allows users to book 30-minute time slots from Monday to Friday, 9:00 AM to 5:00 PM IST. Users can select a date within a configurable booking window (default: 5 days) and book available slots. The app features:

- Frontend: Built with React, providing an intuitive interface to check slot availability and book appointments.
- Backend: Powered by Firebase Cloud Functions, handling API requests to interact with Firestore.
- Database: Cloud Firestore stores and manages booking data efficiently, preventing duplicate bookings and ensuring real-time updates.

Key Features:
- Fetch available slots for a selected date.
- Book a slot with user-specific information.
- Clear feedback for booked or unavailable slots.


## How to Run the Project Locally
### Frontend (React + Context API + Pure CSS)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vkpro55/Ideon-Labs-FrontendRepo.git
   cd Ideon-Labs-FrontendRepo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm run dev
   ```


### Backend (Firebase Cloud Functions + Firebase Database)

1. **Backend Repo**:
   ```bash
   git clone https://github.com/Vkpro55/Ideon-Labs-BackendRepo.git
   cd Ideon-Labs-BackendRepo
   ```
   
3. **Install Packages**:
   ```bash
   npm install
   ```
3. **Run the backend server**:
   ```bash
   npm start
   ```
4.  **Backend Deployed Url**:
   ```bash
    https://ideon-labs-backendrepo.onrender.com
   ```
5. **Backend API Endpoints**:
   1. Get Single User Bookings
   ```bash
   curl -X GET "https://ideon-labs-backendrepo.onrender.com/userBookings?userId=Vinod%20Kumar"
   ```
   2. GET Available Slots for a Date
   ```bash
   curl -X GET "https://ideon-labs-backendrepo.onrender.com/availableSlots?date=2025-01-08"
   ```
   3. POST Book a Slot
   ```bash
   curl -X POST "https://ideon-labs-backendrepo.onrender.com/bookSlot" \
   -H "Content-Type: application/json" \
   -d '{
   "date": "2025-01-08",
   "slot": "10:30 AM - 11:00 AM",
   "userId": "Vinod Kumar"
   }'
   ```
   4. POST Cancel a Slot
   ```bash
   curl -X POST "https://ideon-labs-backendrepo.onrender.com/cancelSlot" \
   -H "Content-Type: application/json" \
   -d '{
   "date": "2025-01-08",
   "slot": "4:30 PM - 05:00 PM",
   "userId": "Anil"
   }'
   ```

6. ** Why Firebase over other Databse**:
- Real-time Data Sync: Automatically syncs data across clients, enabling real-time updates without complex setup.
- Optimistic Concurrency Control: Avoids locking issues and handles race conditions by re-trying transactions if data changes.
- Simple Integration: Easy to integrate with front-end frameworks (like React) and backend services (via Firebase Cloud Functions).
- Automatic Indexing: Manages and optimizes indexes for better query performance without manual intervention.

   
