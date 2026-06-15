import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__message">Oops! Page not found</p>
        <Link to="/" className="btn btn--primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
