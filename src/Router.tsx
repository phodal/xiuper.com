import React, { useEffect } from 'react';
import { LandingPage } from './LandingPage';

export const Router: React.FC = () => {
  useEffect(() => {
    // Redirect /#/app to the actual web.xiuper.com
    const hash = window.location.hash;
    const normalized = (hash || '').replace(/^#\/?/, '');
    if (normalized.startsWith('app')) {
      window.location.href = 'https://web.xiuper.com/';
    }
  }, []);

  return <LandingPage />;
};


