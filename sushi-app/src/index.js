import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Components/Footer';
import Delivery from './Components/Delivery'
import Location from './Components/Location'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Delivery />
    <Location />
    <Footer />
  </React.StrictMode>
);

