import { onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setError(null);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  return { user, loading, error };
};
