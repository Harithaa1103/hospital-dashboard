import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>🏥</span>
        MediCare
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/patients"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          👥 Patients
        </NavLink>

        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          👨‍⚕️ Doctors
        </NavLink>

        <NavLink
          to="/appointments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          📅 Appointments
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <p>⚙️ Settings</p>
        <p>🚪 Logout</p>
      </div>
    </aside>
  );
}

export default Sidebar;