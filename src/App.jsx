import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import UserContent from "./components/UserContent";
import BookAppointmentPage from "./components/BookAppointmentPage";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking/*" element={<BookingPage />}>
            <Route path="user-booking" element={<UserContent />} />
            <Route path="book-appointment" element={<BookAppointmentPage />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
