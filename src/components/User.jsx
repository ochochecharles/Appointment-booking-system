import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function User() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
    status: "pending"
  });

  // onChange function
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit and store data in firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "appointments"), {
        ...form,
        createdAt: new Date()
      });
      alert("Appointment booked successfully!");
      setForm({ name: "", email: "", date: "", time: "", service: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full mb-3 p-2 border rounded" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full mb-3 p-2 border rounded" required />
          <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
          <input type="time" name="time" value={form.time} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required />
          <input type="text" name="service" value={form.service} onChange={handleChange} placeholder="Service Needed" className="w-full mb-3 p-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Book Appointment</button>
      </form>
    </div>
  );
}

export default User;