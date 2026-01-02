import { useEffect, useState } from "react";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    fetch("http://localhost:5000/api/v1/tasks", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(JSON.stringify(data));
      })
      .catch(() => {
        setMessage("Access denied or server error");
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
}

export default Dashboard;
