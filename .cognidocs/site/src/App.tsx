import { ThemeProvider } from './ThemeContext';
import { Layout } from './components/Layout';
import { PageHeader } from './components/PageHeader';
import { useRouter } from './Router';
import { OverviewPage } from './pages/OverviewPage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { MarkdownPage } from './pages/MarkdownPage';
import { GraphPage } from './pages/GraphPage';

function AppContent() {
  const route = useRouter();

  const renderPage = () => {
    switch (route.type) {
      case 'overview':
        return <OverviewPage />;

      case 'introduction':
        return <MarkdownPage path="README" />;

      case 'component':
        return route.id ? <ComponentDetailPage id={route.id} /> : <NotFoundPage />;

      case 'function':
      case 'interface':
      case 'type':
      case 'class':
        return <DetailPlaceholderPage type={route.type} id={route.id || 'Unknown'} />;

      case 'content':
        return route.id ? <MarkdownPage path={route.id} /> : <NotFoundPage />;

      case 'graph':
        return <GraphPage />;

      case 'notfound':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <Layout>
      <PageHeader route={route} />
      <div className="px-6 py-6">
        {renderPage()}
      </div>
    </Layout>
  );
}

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
      <p className="text-xl text-foreground mb-2">Page Not Found</p>
      <p className="text-muted-foreground mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="#/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}

function DetailPlaceholderPage({ type, id }: { type: string; id: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-foreground capitalize">{type} Detail</h1>
      <p className="text-lg text-muted-foreground">
        Detailed view for <code className="bg-muted px-2 py-1 rounded">{id}</code>
      </p>
      <p className="text-sm text-muted-foreground">
        This page type is coming soon in a future update.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
