import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_BASE_URL}/users/login`,
        {
          email,
          password,
        }
      );

      alert(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="page-section">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="responsive-form" style={{ maxWidth: '400px', marginTop: '20px' }}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '12px' }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '12px' }}
        />

        <button
          type="submit"
          style={{
            padding: '12px 20px',
            background: 'green',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;