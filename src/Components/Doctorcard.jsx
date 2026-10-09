function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-avatar">
        {doctor.name
          .split(" ")
          .map((word) => word[0])
          .join("")}
      </div>

      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <span>{doctor.department}</span>
      </div>

      <button>View</button>
    </div>
  );
}

export default DoctorCard;