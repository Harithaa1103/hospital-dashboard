import { useEffect, useState } from "react";

import StatCard from "../components/StatCard";
import PatientTable from "../components/PatientTable";
import DoctorCard from "../components/DoctorCard";
import AppointmentTable from "../components/AppointmentTable";

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya",
      specialization: "Cardiologist",
      department: "Cardiology",
    },
    {
      id: 2,
      name: "Dr. Arun Kumar",
      specialization: "Neurologist",
      department: "Neurology",
    },
    {
      id: 3,
      name: "Dr.Sharmila",
      specialization: "Pediatrician",
      department: "Pediatrics",
    },
  ];

  useEffect(() => {
    setPatients([
      {
        id: "P001",
        name: "Shajan",
        age: 32,
        gender: "Male",
        department: "Cardiology",
        status: "Active",
      },
      {
        id: "P002",
        name: "Devi",
        age: 27,
        gender: "Female",
        department: "Neurology",
        status: "Active",
      },
      {
        id: "P003",
        name: "Prabhu",
        age: 45,
        gender: "Male",
        department: "Orthopedics",
        status: "Discharged",
      },
      {
        id: "P004",
        name: "Meena",
        age: 38,
        gender: "Female",
        department: "Pediatrics",
        status: "Active",
      },
    ]);

    setAppointments([
      {
        id: 1,
        patient: "Shajan",
        doctor: "Dr. Priya",
        date: "04 Oct 2026",
        time: "10:00 AM",
        status: "Confirmed",
      },
      {
        id: 2,
        patient: "Devi",
        doctor: "Dr. Arun Kumar",
        date: "04 Oct 2026",
        time: "11:30 AM",
        status: "Pending",
      },
      {
        id: 3,
        patient: "Meena",
        doctor: "Dr.Sharmila",
        date: "05 Oct 2026",
        time: "02:00 PM",
        status: "Confirmed",
      },
    ]);
  }, []);

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin!</p>
        </div>

        <button className="primary-btn">
          + Add Patient
        </button>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Patients"
          value="1,892"
          icon="👥"
          color="#e8f1ff"
        />

        <StatCard
          title="Total Doctors"
          value="86"
          icon="👨‍⚕️"
          color="#e8fff2"
        />

        <StatCard
          title="Appointments"
          value="324"
          icon="📅"
          color="#fff4df"
        />

        <StatCard
          title="Departments"
          value="12"
          icon="🏥"
          color="#f1e8ff"
        />
      </div>

      <div className="dashboard-grid">
        <section className="card">
          <div className="section-header">
            <h2>Recent Patients</h2>
            <a href="/patients">View All</a>
          </div>

          <PatientTable patients={patients} />
        </section>

        <section className="card">
          <div className="section-header">
            <h2>Doctors</h2>
            <a href="/doctors">View All</a>
          </div>

          <div className="doctor-list">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </section>
      </div>

      <section className="card appointment-section">
        <div className="section-header">
          <h2>Upcoming Appointments</h2>
          <a href="/appointments">View All</a>
        </div>

        <AppointmentTable appointments={appointments} />
      </section>
    </div>
  );
}

export default Dashboard;