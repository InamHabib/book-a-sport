import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./components/utils/errorPage";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";
import PrimaryLayout from "./components/primaryLayout";
import ManageVenue from "./components/owner/manageVenue";
import Home from './components/user/index';
import Profile from './components/user/profile';
import VenueList from './components/user/Venues/venueList';
import VenueDetail from './components/user/Venues/venueDetail';
import BookTurf from './components/user/newBooking';
import BookingHistory from './components/user/bookingHistory';
import Login from "./components/user/login";
import Signup from "./components/user/signUp";
import AddVenue from "./components/owner/addVenue";
import ManageBooking from './components/owner/manageBookings'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout  />,
    errorElement: <ErrorPage />,
    children: [   {
      path: "manage-venues",
      element: <ManageVenue />,
    },
    {
      path: "",
      element: <ManageVenue />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "cricket",
      element: <VenueList />,
    },
    {
      path: "football",
      element: <VenueList />,
    },
    {
      path: "venue-detail",
      element: <VenueDetail />,
    },
    {
      path: "booking",
      element: <BookTurf />,
    },
    {
      path: "booking-history",
      element: <BookingHistory />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },

    // OWNER LINKS //

    {
      path: "manage-venues",
      element: <ManageVenue />,
    },
    {
      path: "add-venue",
      element: <AddVenue />
    },
    {
      path: "manage-bookings",
      element: <ManageBooking />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
