'use client'

import { useRouter } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserProvider";
import { useTheme } from "../../contexts/ThemeProvider"

const CreateAccountPage = () => {
  const router = useRouter();
  const { setUser } = useUser();
  const [cart, setCart] = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    interested_in_building_profile: false,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [csrfToken, setCsrfToken] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://www.trussmade.com/api/csrf_token", {
        method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch((err) => console.error("CSRF Token Fetch Error:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending:", JSON.stringify(form));
    setErrors([]);

    try {
      const response = await fetch("https://www.trussmade.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
            interested_in_building_profile: form.interested_in_building_profile,
          }),          
      });

      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser);
        router.push("/");
      } else {
        const errorData = await response.json();
        setErrors(errorData.errors || ["Account creation failed."]);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrors(["Something went wrong. Please try again."]);
    }
  };

  return (
    <div className={`border p-8 ${theme === 'light' ? "text-black" : "text-[#5FBB46]"}`}>
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={form.password_confirmation}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="interested_in_building_profile"
            checked={form.interested_in_building_profile}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span className="text-sm">
            I&#8217;m interested in building a full profile
          </span>
        </label>

        <button type="submit" className="w-full border  p-2">
          Create Account
        </button>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </form>
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

export default CreateAccountPage;
