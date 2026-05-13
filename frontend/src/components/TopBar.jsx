export default function TopBar() {
  const isLoggedIn = !!localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <div id="topbar">
      <img src="/XOFlix Logo.jpg" id="logo" alt="Logo" />

      {isLoggedIn ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <a href="/login" className="btn btn-light">
          Login
        </a>
      )}
    </div>
  );
}