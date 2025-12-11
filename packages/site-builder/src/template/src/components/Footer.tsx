import { Heart, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Documentation generated with{' '}
              <a
                href="https://github.com/anthropics/cognidocs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                CogniDocs
                <ExternalLink className="h-3 w-3" />
              </a>
              , a comprehensive documentation tool for TypeScript and React projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#/overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Project Overview
                </a>
              </li>
              <li>
                <a href="#/README" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#/graph" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dependency Graph
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/anthropics/cognidocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub Repository
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Version: 0.1.0
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} CogniDocs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
