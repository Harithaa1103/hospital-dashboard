import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
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
      name: "Dr. Meena Raj",
      specialization: "Pediatrician",
      department: "Pediatrics",
    },
    {
      id: 4,
      name: "Dr. Karthik Rao",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
    },
    {
      id: 5,
      name: "Dr. Divya Singh",
      specialization: "Dermatologist",
      department: "Dermatology",
    },
    {
      id: 6,
      name: "Dr. Vijay Kumar",
      specialization: "General Physician",
      department: "General Medicine",
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Doctors</h1>
          <p>Manage hospital doctors and specialists</p>
        </div>

        <button className="primary-btn">
          + Add Doctor
        </button>
      </div>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;