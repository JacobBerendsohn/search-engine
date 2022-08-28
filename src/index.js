import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './context/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);

