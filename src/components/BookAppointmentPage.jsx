import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../context/UserContext"

const BookAppointmentPage = () => {

    const { userName } = useContext(UserContext);

    const [allSlots, setAllSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleFetchSlots = async () => {
        if (!selectedDate) {
            alert('Please select a date.');
            return;
        }

        try {
            const response = await fetch(`https://ideon-labs-backendrepo.onrender.com/availableSlots?date=${selectedDate}`);
            const data = await response.json();
            if (response.ok && data.slots) {
                setAllSlots(data.slots);
                setErrorMessage('');
            } else {
                setAllSlots([]);
                setErrorMessage(data.error || 'No slots available.');
            }
        } catch (error) {
            console.error('Error fetching slots:', error);
            setErrorMessage('Failed to fetch slots. Please try again.');
        }
    };
    const handleBookSlot = async (slot) => {
        setAllSlots((prevSlots) =>
            prevSlots.map((s) =>
                s.time === slot.time ? { ...s, booked: true, userId: userName } : s
            )
        );

        try {
            const response = await fetch('https://ideon-labs-backendrepo.onrender.com/bookSlot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ date: selectedDate, slot: slot.time, userId: userName }),
            });

            const data = await response.json();
        } catch (error) {
            console.error('Error booking slot:', error);
            setAllSlots((prevSlots) =>
                prevSlots.map((s) =>
                    s.time === slot.time ? { ...s, booked: false, userId: null } : s
                )
            );
        }
    };

    useEffect(() => {
        console.log('Updated slots:', allSlots);
    }, [allSlots]);


    return (
        <section className="section-bookAppointment">
            <div className="bookAppointment-input">
                <input type="date" value={selectedDate} onChange={handleDateChange} placeholder="Select Date" />
                <button onClick={handleFetchSlots}>Fetch Available Slots</button>
            </div>

            <div className="bookAppointment-data">
                {allSlots.length > 0 ? (
                    <div className="new-grid-table">
                        <div className="grid-header">Name</div>
                        <div className="grid-header">Slot</div>
                        <div className="grid-header">Booked</div>
                        <div className="grid-header">Action</div>

                        {allSlots.map((slot, index) => (
                            <div key={index} className="grid-row">
                                <div className="grid-cell">{slot.userId || 'No User'}</div>
                                <div className="grid-cell">{slot.time}</div>
                                <div className="grid-cell">{slot.booked ? 'Yes' : 'No'}</div>
                                <div className="grid-cell">
                                    {!slot.booked && (
                                        <button className="btn action-btn" onClick={() => handleBookSlot(slot)}>
                                            Book
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-data">{errorMessage}</p>
                )}
            </div>
        </section>
    );
};

export default BookAppointmentPage;
