import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you'r looking for doesn't exist.</p>
      <Link
        to="/"
        className="text-lg font-semibold text-purple-500 hover:text-purple-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
}
export default NotFound;
