
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-outline-primary mt-3">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
