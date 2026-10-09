import { useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Shajan",
      doctor: "Dr. Priya ",
      department: "Cardiology",
      date: "04 Oct 2026",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patient: "Devi",
      doctor: "Dr. Arun Kumar",
      department: "Neurology",
      date: "04 Oct 2026",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Prabhu",
      doctor: "Dr. Karthik",
      department: "Orthopedics",
      date: "05 Oct 2026",
      time: "02:00 PM",
      status: "Confirmed",
    },
    {
      id: 4,
      patient: "Meena",
      doctor: "Dr.Sharmila",
      department: "Pediatrics",
      date: "06 Oct 2026",
      time: "09:30 AM",
      status: "Cancelled",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.patient || !form.doctor || !form.date || !form.time) {
      alert("Please fill all fields");
      return;
    }

    const newAppointment = {
      id: appointments.length + 1,
      ...form,
      department: "General",
      status: "Pending",
    };

    setAppointments([
      ...appointments,
      newAppointment,
    ]);

    setForm({
      patient: "",
      doctor: "",
      date: "",
      time: "",
    });

    setShowForm(false);
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Appointments</h1>
          <p>Schedule and manage appointments</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + New Appointment
        </button>
      </div>

      {showForm && (
        <div className="card form-card">
          <h2>Book Appointment</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="patient"
              placeholder="Patient Name"
              value={form.patient}
              onChange={handleChange}
            />

            <input
              type="text"
              name="doctor"
              placeholder="Doctor Name"
              value={form.doctor}
              onChange={handleChange}
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />

            <button className="primary-btn">
              Book Appointment
            </button>
          </form>
        </div>
      )}

      <div className="card">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.patient}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.department}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>

                  <td>
                    <span
                      className={`status ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Appointments;