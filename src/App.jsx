import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Patients from "./Pages/Patients";
import Doctors from "./Pages/Doctors";
import Appointments from "./Pages/Appointments";

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