function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h2>Hospital Management</h2>
        <p>Manage your hospital efficiently</p>
      </div>

      <div className="profile">
        <div className="notification">🔔</div>

        <div className="avatar">
          AD
        </div>

        <div>
          <strong>Admin</strong>
          <small>Administrator</small>
        </div>
      </div>
    </header>
  );
}

export default Topbar;