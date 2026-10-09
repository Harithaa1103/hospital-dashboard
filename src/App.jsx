import { Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar.jsx";
import Topbar from "./Components/Topbar.jsx";

import Dashboard from "./Pages/Dashboard.jsx";
import Patients from "./Pages/Patients.jsx";
import Doctors from "./Pages/Doctors.jsx";
import Appointments from "./Pages/Appointments.jsx";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;