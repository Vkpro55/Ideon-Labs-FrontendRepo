import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [userBookings, setUserBookings] = useState([]);
    const [allSlots, setAllSlots] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    useEffect(() => {
        if (userName) {
            const fetchBookings = async () => {
                const response = await fetch(`https://ideon-labs-backendrepo.onrender.com/userBookings?userId=${userName}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log(data);

                if (data.bookings && Array.isArray(data.bookings)) {
                    setUserBookings(data.bookings);
                }
            };
            fetchBookings();
        }
    }, [userName]);


    const fetchSlots = async (date) => {
        try {
            const response = await fetch(`https://ideon-labs-backendrepo.onrender.com/availableSlots?date=${date}`);
            const data = await response.json();
            if (data.error) {
                setErrorMessage(data.error);
                setAllSlots([]);
            } else if (data?.slots) {
                setAllSlots(data.slots);
                setErrorMessage('');
            } else {
                setErrorMessage('No slots available for this date.');
                setAllSlots([]);
            }
        } catch (error) {
            console.error('Error fetching slots:', error);
            setErrorMessage('An error occurred while fetching slots. Please try again.');
        }
    };

    const bookSlot = async (date, slot) => {
        try {
            const response = await fetch('https://ideon-labs-backendrepo.onrender.com/bookSlot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ date, slot, userId: userName }),
            });

            const data = await response.json();
            if (response.ok && data.success) {
                // Update the slots state after booking the slot
                setAllSlots((prevSlots) =>
                    prevSlots.map((s) =>
                        s.time === slot.time && s.date === date ? { ...s, booked: true, userId: userName } : s
                    )
                );
                // Update the userBookings state to reflect the new booking
                setUserBookings((prevBookings) => [
                    ...prevBookings,
                    { date, slot: slot.time },
                ]);
                setErrorMessage('');
            } else {
                setErrorMessage(data.error || 'Failed to book the slot. Please try again.');
            }
        } catch (error) {
            console.error('Error booking slot:', error);
            setErrorMessage('An error occurred while booking the slot. Please try again.');
        }
    };


    const cancelBooking = async (booking) => {
        await fetch('https://ideon-labs-backendrepo.onrender.com/cancelSlot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: booking.date,
                slot: booking.slot,
                userId: userName,
            }),
        });

        setUserBookings((prevBookings) =>
            prevBookings.filter(
                (b) => b.slot !== booking.slot || b.date !== booking.date
            )
        );
    };

    const handleUserNameChange = (newUserName) => {
        setUserName(newUserName);
        localStorage.setItem('userName', newUserName);
    };



    return (
        <UserContext.Provider
            value={{
                userName,
                setUserName: (name) => {
                    setUserName(name);
                    localStorage.setItem('userName', name);
                },
                userBookings,
                allSlots,
                fetchSlots,
                bookSlot,
                cancelBooking,
                errorMessage,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
