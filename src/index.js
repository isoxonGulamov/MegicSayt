import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountProvider } from './korzinkaCount';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<CountProvider>
<BrowserRouter>

<App />

</BrowserRouter>
</CountProvider>

);

