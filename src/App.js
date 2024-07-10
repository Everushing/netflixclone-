// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact>
            {/* Render homepage components here */}
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
