// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieItem from './components/MovieItem';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieItem />} />
          <Route path="/favorites" element={<MovieList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
