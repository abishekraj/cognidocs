import React, { useState, useEffect } from 'react';

export interface RouteMatch {
  type:
    | 'overview'
    | 'introduction'
    | 'component'
    | 'function'
    | 'interface'
    | 'type'
    | 'class'
    | 'content'
    | 'graph'
    | 'notfound';
  id?: string;
  path: string;
}

export function useRouter(): RouteMatch {
  const [route, setRoute] = useState<RouteMatch>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}

function parseHash(hash: string): RouteMatch {
  // Remove leading '#' or '#/'
  const path = hash.replace(/^#\/?/, '');

  if (!path || path === '' || path === '/') {
    return { type: 'introduction', path: 'README' };
  }

  if (path === 'overview') {
    return { type: 'overview', path };
  }

  if (path === 'README') {
    return { type: 'introduction', path };
  }

  if (path === 'graph') {
    return { type: 'graph', path };
  }

  // Catch-all for content (everything under #/content/)
  const contentMatch = path.match(/^content\/(.+)$/);
  if (contentMatch) {
    const fullPath = contentMatch[1];
    const parts = fullPath.split('/');

    // Determine type based on folder
    if (parts[0] === 'components') return { type: 'component', id: parts[1], path };
    if (parts[0] === 'functions') return { type: 'function', id: parts[1], path };
    if (parts[0] === 'interfaces') return { type: 'interface', id: parts[1], path };
    if (parts[0] === 'types') return { type: 'type', id: parts[1], path };
    if (parts[0] === 'classes') return { type: 'class', id: parts[1], path };
    if (parts[0] === 'api-routes') return { type: 'content', id: fullPath, path };

    return { type: 'content', id: fullPath, path };
  }

  return { type: 'notfound', path };
}

export function navigate(path: string) {
  window.location.hash = path;
}
