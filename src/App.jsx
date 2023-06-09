import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import styles from './style'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BookingPage from './components/BookingPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/joe-website-new/" element={<HomePage />} />
        <Route path="/joe-website-new/about" element={<AboutPage />} />
        <Route path="/joe-website-new/booking" element={<BookingPage />} />
        <Route path="/joe-website-new/contact" element={<ContactPage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
