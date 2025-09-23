import React, { useState, useEffect } from "react";
// Use 'any' type for supabase to bypass type errors if types are not generated
import { supabase } from "@/integrations/supabase/client";
// @ts-ignore

interface User {
  id: string;
  email: string;
  name?: string;
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    // @ts-ignore
        const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
      return;
    }
    setUsers(
      (data || []).map((u: any) => ({
        id: u.id,
        email: u.email ?? u.user_id ?? "",
        name: u.name ?? u.display_name ?? "",
      }))
    );
    setLoading(false);
  };

  // Add a new user
  const addUser = async () => {
    if (!email) {
      alert("Email is required");
      return;
    }
    const { data, error } = await (supabase as any)
      .from("users")
      .insert([{ email, name }]);
    if (error) {
      console.error("Insert error:", error);
      alert("Error adding user");
      return;
    }
    setUsers(prev => [...prev, ...(data || [])]);
    setEmail("");
    setName("");
  };

  useEffect(() => {
    fetchUsers();
    // @ts-ignore
    const subscription = (supabase as any)
      .from("users")
      .on("INSERT", (payload: any) => {
        setUsers(prev => [...prev, payload.new as User]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div className="p-4">Loading users...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={addUser} className="bg-blue-500 text-white p-2 rounded">Add User</button>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.id}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.name || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
