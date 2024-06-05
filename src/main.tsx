import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWService } from 'sw-service';
import './stylesheets/index.css';
import { App } from './components/app.component';

// install the service worker
SWService.register();

// initialize the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
