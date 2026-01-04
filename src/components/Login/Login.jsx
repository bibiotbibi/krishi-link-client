import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!email || !password) {
      setError("Please enter both email and password!");
      return;
    }

    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
      setSuccessMsg("Login successful ✅");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (role) => {
    if (role === "user") {
      setEmail("demo.user1@example.com");
      setPassword("User1234@");
    } else if (role === "admin") {
      setEmail("demo.admin@example.com");
      setPassword("User1234@");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      console.log(result.user);
      setSuccessMsg("Google sign-in successful ✅");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-8/12 h-150 mx-auto relative border border-white/40 rounded-2xl overflow-hidden mt-10">
      <img
        className="w-full h-full object-cover"
        src="https://i.ibb.co/ZbR9gc5/download.jpg"
        alt="login-background"
      />
      <div className="w-full h-full absolute bg-purple-400/40">
        <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]/60"></div>
      </div>
      <div className="w-full h-full p-2 flex  absolute inset-0 items-center">
        <div className="md:w-3/5 w-full p-6 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
          <h1 className="text-5xl font-bold text-center text-[#b6f0ac] mb-4">Login</h1>

          {/* Success & Error Messages */}
          {successMsg && <p className="text-green-500 text-center mb-2">{successMsg}</p>}
          {error && <p className="text-red-500 text-center mb-2">{error}</p>}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label className="label text-white">Email</label>
            <input
              type="email"
              className="input w-full text-black"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label text-white">Password</label>
            <input
              type="password"
              className="input w-full text-black"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            

            <button
              type="submit"
              disabled={loading}
              className="btn bg-primary text-amber-50 font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="btn bg-primary text-white font-semibold mt-2"
          >
            {loading ? "Signing in..." : "Login with Google"}
          </button>

          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => handleDemoLogin("user")}
              className="btn btn-sm bg-secondary hover:bg-primary text-white flex-1"
            >
              Demo User
            </button>
         
          </div>

          <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-amber-50 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
