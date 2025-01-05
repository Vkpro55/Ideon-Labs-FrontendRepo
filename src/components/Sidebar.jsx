
import { FaCalendarAlt, FaClipboardList } from 'react-icons/fa';
import logo from "../asset/Logo.png";
import profilePicture from "../asset/profilePic.png"

import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { userName } = useContext(UserContext);
    return (
        <>
            <aside className="sidebar-div">
                <div className="sidebar-logo">
                    <h3>Welcome {userName}</h3>
                    <figure>
                        <img src={logo} alt="Appointly Logo" />
                    </figure>
                </div>
                <div className="sidebar-content">
                    <h4>Menu</h4>

                    <Link to="/booking/user-booking">
                        <button className='btn sidebar-btn'>
                            <FaClipboardList /> Manage Appointments
                        </button>
                    </Link>
                    <Link to="/booking/book-appointment">
                        <button className='btn sidebar-btn'>
                            <FaCalendarAlt /> Book Appointment
                        </button>
                    </Link>

                </div>
                <div className="sidebar-profile">
                    <figure>
                        <img src={profilePicture} alt="Profile Picture" />
                    </figure>
                    <p>{userName}</p>
                </div>
            </aside>
        </>
    )
}

export default Sidebar