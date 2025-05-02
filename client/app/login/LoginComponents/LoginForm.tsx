import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserProvider";

const LoginPage = () => {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [cart, setCart] = useContext(CartContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [csrfToken, setCsrfToken] = useState("");

  // Fetch CSRF Token on Component Mount
  useEffect(() => {
    fetch("https://trussstart.onrender.com/api/csrf_token", {
      method: "GET",
      credentials: "include", // Ensures session cookies are sent
    })
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch((err) => console.error("CSRF Token Fetch Error:", err));
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await fetch("https://trussstart.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken, // Include CSRF token
        },
        credentials: "include", // Required for session authentication
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        router.push("/");
      } else {
        const errorData = await response.json();
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrors(["Something went wrong. Please try again."]);
    }
  };

  return (
    <div className="border p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border "
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border "
          required
        />
        <button
          type="submit"
          className="w-full border text-black p-2  "
        >
          Login
        </button>
      </form>
        <div className="pt-2">
          <button
              onClick={() => router.push("/login/CreateAccount")}
              className="w-full border text-black p-2"
            >
            Create Account
          </button>
        </div>
      {errors.length > 0 && (
        <div className="mt-4 text-red-600">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoginPage;

// import React from "react";

// const LoginPage = () => {
//   const handleGoogleLogin = () => {
//     window.location.href = "http://localhost:4000/auth/google_oauth2"; // Redirect to Rails server for Google login
//   };

//   return (
//     <div className="login-container">
//       <button
//         className="google-login-btn"
//         onClick={handleGoogleLogin}
//       >
//         Login with Google
//       </button>
//     </div>
//   );
// };

// export default LoginPage;