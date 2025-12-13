import React, { useEffect, useMemo, useState } from 'react';
import { LandingPage } from './LandingPage';
import { WebUiApp } from './App';

type Route = 'landing' | 'app';

function resolveRouteFromHash(hash: string): Route {
  const normalized = (hash || '').replace(/^#\/?/, '');
  if (normalized.startsWith('app')) return 'app';
  return 'landing';
}

export const Router: React.FC = () => {
  const [hash, setHash] = useState<string>(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = useMemo(() => resolveRouteFromHash(hash), [hash]);

  if (route === 'app') return <WebUiApp />;
  return <LandingPage />;
};


