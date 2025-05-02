"use client";

import { useRouter } from "next/navigation";
import { useState , useContext } from "react";
import { Menu, X } from "lucide-react";
import { useUser } from "../../contexts/UserProvider";


export default function Sidebar ({ isOpen, onClose }) {

  const { user, setUser } = useUser();

  const handleLogOut = (e) => {
    fetch(`/api/logout`,{
        method: 'DELETE'
        })
        .then(() => {
            fetch("/api/me").then((r) => {
                if (r.ok) {r.json().then((data) => {
                    setUser(data)});
                }});
        });
}

    const router = useRouter();

    const isGuest = user?.email === "Guest";

    return (
        <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
            isOpen ? "opacity-20 visible" : "opacity-0 invisible"
          }`}
          onClick={onClose} // Clicking outside closes the menu
        ></div>
  
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 sm:w-80 bg-white z-20 shadow-lg p-4 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4">
            <X className="w-6 h-6" />
          </button>
  
          <button onClick={() => router.push("/")} className="text-xl font-bold mb-4" >TRUSS</button>
  
          {/* Menu Items */}
          <ul className="space-y-2">
          <h1>
            {user?.email !== "Guest" && user?.name ? `Hello, ${user?.name}` : null}
          </h1>
            <li className="text-gray-600 font-semibold">User Mode</li>
            <li className="pl-6 text-gray-500">Seeker</li>
            <li className="pl-6 text-gray-500">Designer</li>
            <li className="pl-6 text-gray-500">Business</li>
            <li className="pl-4 font-bold">Searching</li>
            <li className="pl-4 font-bold">• Active</li>
            <li className="pl-6 text-gray-500">Inactive</li>
            <li className="text-gray-600">Settings</li>
            <li className="text-gray-600">Subscription</li>
            <li className="text-gray-600">Payments</li>
            <li className="text-gray-600">Privacy</li>
            <li className="text-gray-600">Advertise</li>
            <li>
            <button
              onClick={() => {
                isGuest ? router.push("/login") : handleLogOut();
              }}
              className="mt-4 w-full border text-black p-2 rounded-md"
            >
              {isGuest ? "Login" : "Logout"}
            </button>
          </li>
          </ul>
        </div>
      </>
    );
  };