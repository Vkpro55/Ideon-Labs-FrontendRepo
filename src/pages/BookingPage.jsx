import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const BookingPage = () => {
    const { userName } = useContext(UserContext);

    return (
        <section className="section-booking-page">
            <div className="container grid grid-two-columns">
                {/* Sidebar stays static */}
                <Sidebar />

                <main>
                    <div className="section-main">
                        {/* Main Heading stays static */}
                        <div className="main-heading">
                            <h2>Appointly: Manage Booking</h2>
                        </div>

                        {/* Dynamic content will be rendered here */}
                        <Outlet />
                    </div>
                </main>
            </div>
        </section>
    );
};

export default BookingPage;
