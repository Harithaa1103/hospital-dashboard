function PatientTable({ patients }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>
                <strong>{patient.name}</strong>
                <small>{patient.id}</small>
              </td>

              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.department}</td>

              <td>
                <span className={`status ${patient.status.toLowerCase()}`}>
                  {patient.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;