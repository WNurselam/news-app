import "./App.css";
import { Routes, Route} from "react-router-dom";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Sidebar from "./components/SideBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="md:flex-grow">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App;
