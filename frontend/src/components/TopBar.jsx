export default function TopBar({ onLogout }) {
  const isLoggedIn = !!localStorage.getItem("access");

  return (
    <div id="topbar">
      <img src="/XOFlix Logo.jpg" id="logo" alt="Logo" />

      {isLoggedIn ? (
        <button className="btn btn-danger" onClick={onLogout}>
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