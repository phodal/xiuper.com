import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './Router';
import './index.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

