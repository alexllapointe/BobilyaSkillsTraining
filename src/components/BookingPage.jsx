import React from 'react';
import { useState } from 'react';


const PopupMessage = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <p className="text-center text-xl font-bold">{message}</p>
                <button
                    className="block mx-auto mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const BookingPage = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzio0-BqWtLbh92vbQ-LqLGlICblsjXei8hkTw0GHBLfFPaKssky0EnwjmFFi9z5030cg/exec';
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then((response) => {
                setShowPopup(true);
                setPopupMessage('Thank you for your submission, We will be in contact soon.');
                form.reset();
            })
            .catch((error) => console.error('Error!', error.message));
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setPopupMessage('');
    };

    return (
        <div className=" min-h-screen flex justify-center items-center bg-gray-200 pb-10 pt-5">
            <div className="md:flex">
                <div className="md:w-1/2 ml-6 md:order-1 md:text-center">
                    <div className="p-8">
                        <h1 className="underline text-center text-4xl font-bold">Booking</h1>
                        <div className="contact-me mt-4">
                            <p>Sessions will be offered throughout May, June, July, and August.</p>
                            <p className="font-bold mt-4">Rates:</p>
                            <ul className="list-disc pl-6 mt-2">
                                Small Group Sessions:
                                <ul className="list-disc pl-4 mt-2">
                                    <li tabIndex="0">1 session: $30</li>
                                    <li tabIndex="0">4 sessions: $100</li>
                                </ul>

                                Private Sessions:
                                <ul className="list-disc pl-4 mt-2">
                                    <li tabIndex="0">1 session: $55</li>
                                </ul>

                            </ul>
                            <p className="font-bold mt-4">Locations:</p>
                            <p>Saint Maria Goretti, Guerin Catholic, or OLMC</p>
                            <p className="mt-4 text-xl">I will reach out with dates and times of sessions after the form is completed!</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 ml-6 md:order-2">
                    <div className="max-w-md p-4 bg-white rounded-lg shadow-lg mr-6">
                        <h1 className=" text-3xl font-light tracking-widest text-center mb-10">Let's get to Work!</h1>
                        <form id="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <input
                                id="athlete-name"
                                type="text"
                                placeholder="Athlete Name"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                            <input
                                id="parent-name"
                                type="text"
                                placeholder="Parent Name"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                            <input
                                id="phone-number"
                                type="text"
                                placeholder="Phone Number"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                            <select
                                id="session-type"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            >
                                <option value="">Select Session Type</option>
                                <option value="group">Group</option>
                                <option value="private">Private</option>
                            </select>
                            <select
                                id="sessions-per-week"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            >
                                <option value="">Select Sessions per Week</option>
                                <option value="sessions-per-week">1</option>
                                <option value="sessions-per-week">2</option>
                                <option value="sessions-per-week">3</option>
                                <option value="sessions-per-week">4</option>
                                <option value="sessions-per-week">5</option>
                                <option value="sessions-per-week">6</option>
                                <option value="sessions-per-week">7</option>
                            </select>
                            <input
                                id="school"
                                type="text"
                                placeholder="School"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            />
                            <select
                                id="grade"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            >
                                <option value="">Select Grade</option>
                                <option value="grade">1</option>
                                <option value="grade">2</option>
                                <option value="grade">3</option>
                                <option value="grade">4</option>
                                <option value="grade">5</option>
                                <option value="grade">6</option>
                                <option value="grade">7</option>
                                <option value="grade">8</option>
                                <option value="grade">9</option>
                                <option value="grade">10</option>
                                <option value="grade">11</option>
                                <option value="grade">12</option>
                            </select>
                            <select
                                id="payment-method"
                                className="w-full h-10 px-4 mb-4 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                required
                            >
                                <option value="">Select Payment Method</option>
                                <option value="venmo">Venmo</option>
                                <option value="cash-check">Cash/Check</option>
                            </select>
                            <input
                                id="submit"
                                type="submit"
                                value="BOOK NOW"
                                className="w-full h-10 px-6 mt-2 text-gray-700 bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400"
                            />
                        </form>
                    </div>
                </div>
            </div>
            {showPopup && (
                <PopupMessage message={popupMessage} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default BookingPage;


