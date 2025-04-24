"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Define the type of User (adjust properties as needed)
interface User {
  email: string;
  id: string;
  [key: string]: any; // Allow additional properties for flexibility
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create the context with correct type
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fetch user data from API
  useEffect(() => {
    fetch("/api/me", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          setUser(data);
        }
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
