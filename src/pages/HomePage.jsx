import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const HomePage = () => {

    const { setUserName } = useContext(UserContext);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    const clickHandler = (event) => {
        event.preventDefault();
        setUserName(name);
        navigate('/booking');
    }

    return (
        <>
            <section className="section-home-page container">
                <div className="grid grid-two-column home-page-div">

                    <div className="home-page-content">
                        <h1>Simplified Appointment Scheduling with <span>Appointly</span></h1>
                        <p>Appointly presents a seamless 30-minute appointment booking system, offering real-time availability and preventing overbooking. Built with React and Firebase, it ensures a smooth, intuitive experience for both users and administrators.</p>
                    </div>

                    <div className="home-page-form">
                        <form onSubmit={clickHandler}>
                            <input
                                type="text"
                                name="userID"
                                id="userID"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleInputChange}
                            />
                            <button className='btn btn-home-page' type="submit">Started</button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default HomePage