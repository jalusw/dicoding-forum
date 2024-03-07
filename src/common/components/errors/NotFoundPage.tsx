import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <main id="main">
      <div className="container py-20 text-center">
        <div className="prose mx-auto">
          <h1>404 Not Found</h1>
          <p>The page you're looking for is not found.</p>
          <Link to="/">Return To Home</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
