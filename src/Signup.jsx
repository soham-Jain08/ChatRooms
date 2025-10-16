import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name,
        role,
        email: user.email,
        createdAt: serverTimestamp(),
      });
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save in Firestore if first-time login
      const docRef = doc(db, "users", user.uid);
      const docSnap = await docRef.get?.(); // Firestore v9 may need getDoc
      if (!docSnap || !docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          role: "Student",
          createdAt: serverTimestamp(),
        });
      }
      navigate("/chat");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
      </select>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
      <button className="btn btn-google" onClick={handleGoogleSignup}>Signup with Google</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
