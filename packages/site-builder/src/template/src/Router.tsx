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

  // Pattern: /component/{id}
  // Match component detail routes (support both singular and plural for robustness)
  const componentMatch = path.match(/^(?:components?)\/(.+)$/);
  if (componentMatch) {
    return { type: 'component', id: componentMatch[1], path };
  }

  // Pattern: /function/{id}
  const functionMatch = path.match(/^function\/(.+)$/);
  if (functionMatch) {
    return { type: 'function', id: functionMatch[1], path };
  }

  // Pattern: /interface/{id}
  const interfaceMatch = path.match(/^interface\/(.+)$/);
  if (interfaceMatch) {
    return { type: 'interface', id: interfaceMatch[1], path };
  }

  // Pattern: /type/{id}
  const typeMatch = path.match(/^type\/(.+)$/);
  if (typeMatch) {
    return { type: 'type', id: typeMatch[1], path };
  }

  // Pattern: /class/{id}
  const classMatch = path.match(/^class\/(.+)$/);
  if (classMatch) {
    return { type: 'class', id: classMatch[1], path };
  }

  // Intercept legacy/generic content component paths EARLY
  // e.g. content/components/Button -> component/Button
  const legacyComponentMatch = path.match(/^content\/components\/([^/]+)$/);
  if (legacyComponentMatch) {
    console.log('[Router] Redirecting legacy component path:', path);
    return { type: 'component', id: legacyComponentMatch[1], path };
  }

  // Pattern: /content/{path}
  const contentMatch = path.match(/^content\/(.+)$/);
  if (contentMatch) {
    const contentPath = contentMatch[1];

    // Intercept legacy/generic component paths (e.g., content/components/Button)
    // and redirect them to the rich component view
    const componentPathMatch = contentPath.match(/^components\/([^/]+)$/);
    if (componentPathMatch) {
      return { type: 'component', id: componentPathMatch[1], path };
    }

    return { type: 'content', id: contentPath, path };
  }

  return { type: 'notfound', path };
}

export function navigate(path: string) {
  window.location.hash = path;
}
