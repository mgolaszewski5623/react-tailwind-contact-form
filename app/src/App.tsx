import './App.css';
import { ContactPage } from './Pages/Contact/ContactPage';
import { ThankYouPage } from './Pages/Contact/ThankYouPage';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
