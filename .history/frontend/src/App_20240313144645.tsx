import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import DoctorSearch from "./Pages/DoctorSearch";
import DoctorDescription from "./Pages/Doctor/DoctorDescription";
import Profile from "./Pages/Profile";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";
import Appointments from "./Pages/Doctor/Appointments";
import DoctorProfileUpdate from "./Pages/Doctor/DoctorProfileUpdate";
import DoctorOverview from "./Pages/Doctor/DoctorOverview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import { useSelectorTyped } from "./hooks/hooks";
import { User } from "./assets/data/doctors";

function App() {
  const queryClient = new QueryClient();
  const role: string = "patient";
  const user: User | null | undefined = useSelectorTyped((state) => state);

  const routesDoctor = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <DoctorProfile />,
          children: [
            { index: true, element: <DoctorOverview /> },
            { path: "/appointments", element: <Appointments /> },
            { path: "/profile", element: <DoctorProfileUpdate /> },
          ],
        },
      ],
    },
  ]);
  const routesPatient = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home />, index: true },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "contact", element: <Contact /> },
        { path: "services", element: <Services /> },
        { path: "doctor-search", element: <DoctorSearch /> },
        { path: "doctor/:id", element: <DoctorDescription /> },
        {
          path: "profile",
          element: user ? <Profile/>,
        },
        { path: "doctor-profile", element: <DoctorProfile /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider
          router={role === "patient" ? routesPatient : routesDoctor}
        />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
