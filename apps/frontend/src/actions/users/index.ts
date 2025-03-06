export const createUser = async () => {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting user by ID:", error);
  }
};
