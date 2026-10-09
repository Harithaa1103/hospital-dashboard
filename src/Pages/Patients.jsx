import { useState } from "react";

function Patients() {
  const [patients, setPatients] = useState([
    {
      id: "P001",
      name: "Shajan",
      age: 32,
      gender: "Male",
      phone: "9876543210",
      department: "Cardiology",
      status: "Active",
    },
    {
      id: "P002",
      name: "Devi",
      age: 27,
      gender: "Female",
      phone: "9876543211",
      department: "Neurology",
      status: "Active",
    },
    {
      id: "P003",
      name: "Prabhu",
      age: 45,
      gender: "Male",
      phone: "9876543212",
      department: "Orthopedics",
      status: "Discharged",
    },
    {
      id: "P004",
      name: "Meena",
      age: 38,
      gender: "Female",
      phone: "9876543213",
      department: "Pediatrics",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const addPatient = () => {
    const name = prompt("Enter patient name:");

    if (name) {
      const newPatient = {
        id: `P00${patients.length + 1}`,
        name,
        age: 25,
        gender: "Female",
        phone: "Not Added",
        department: "General",
        status: "Active",
      };

      setPatients([...patients, newPatient]);
    }
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Patients</h1>
          <p>Manage all hospital patients</p>
        </div>

        <button
          className="primary-btn"
          onClick={addPatient}
        >
          + Add Patient
        </button>
      </div>

      <div className="card">
        <div className="search-area">
          <input
            type="text"
            placeholder="Search patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td><strong>{patient.name}</strong></td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.department}</td>

                  <td>
                    <span
                      className={`status ${patient.status.toLowerCase()}`}
                    >
                      {patient.status}
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

export default Patients;