import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Set HTTP status code for SSR/crawlers
    if (typeof window !== 'undefined') {
      document.title = "404 - Page Not Found";
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="prerender-status-code" content="404" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background" data-status="404">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/80">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
