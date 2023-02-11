import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Components/Sections/FooterSection';
import Delivery from './Components/Sections/DeliverySection'
import Location from './Components/Sections/LocationSection'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Delivery />
    <Location />
    <Footer />
  </React.StrictMode>
);

