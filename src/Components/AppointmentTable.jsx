function AppointmentTable({ appointments }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
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
  );
}

export default AppointmentTable;