import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext"

const UserContent = () => {
    const { userBookings, cancelBooking } = useContext(UserContext);
    console.log("User Booking is:", userBookings)

    return (
        <div className="main-content">
            <div className="grid-table">
                {/* Table Header */}
                <div className="grid-header">Name</div>
                <div className="grid-header">Booked At</div>
                <div className="grid-header">Date</div>
                <div className="grid-header">Slot</div>
                <div className="grid-header">Action</div>

                {/* Display bookings */}
                {userBookings.map((booking, index) => (
                    <div key={index} className="grid-row">
                        <div className="grid-cell">{booking.userId}</div>
                        <div className="grid-cell">{booking.bookedAt}</div>
                        <div className="grid-cell">{booking.date}</div>
                        <div className="grid-cell">{booking.slot}</div>
                        <div className="grid-cell">
                            <button
                                className="btn action-btn"
                                onClick={() => cancelBooking(booking)}
                            >
                                Cancel Slot
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserContent;
