import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import UserContent from "./components/UserContent"; // Assuming this component is already defined
import BookAppointmentPage from "./components/BookAppointmentPage";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Correct path for '/booking' and its nested routes */}
          <Route path="/booking/*" element={<BookingPage />}>
            {/* Use relative path for child routes */}
            <Route path="user-booking" element={<UserContent />} />  {/* Home content */}
            <Route path="book-appointment" element={<BookAppointmentPage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
