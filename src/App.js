// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBar />
      </div>
    </Router>
  );
};

export default App;
