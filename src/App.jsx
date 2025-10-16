import { Link } from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <div className="welcome-container">
      <h1>🎓 Doubt Solver Hub</h1>
      <p>Connect with teachers and students to solve doubts, share knowledge, and learn together in a collaborative environment</p>
      <div className="welcome-buttons">
        <Link to="/login">
          <button className="btn btn-primary">📚 Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-primary">✨ Signup</button>
        </Link>
      </div>
    </div>
  );
}
