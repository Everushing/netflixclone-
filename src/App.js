// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import UserProfile from './components/UserProfile';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TVShowDetails from './components/TVShowDetails';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movie" element={<MovieDetails/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/tvshow" element={<TVShowDetails />} />
          <Route path="/tvshow/:id" element={<TVShowDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
