import { useEffect, useState } from "react";
import { db } from "../firebase"; //
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

function Dashboard() {
    // A statefull variable to hold and and update the array of object fetched from firestore
    const [appointments, setAppointments] = useState([]);

    // when the dashboard component renders, run this block once
    useEffect(() => {
        const fetchAppointments = async () => {
        try {
        const storedAppointments = await getDocs(collection(db, "appointments"));
        // storedAppointments contains the doc and metadata fetched from firestore. I mapped over it and created a new object the contains the id and document data
        const data = storedAppointments.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setAppointments(data);
        } catch (error) {
        console.error("Error fetching appointments:", error);
        }
    };

    fetchAppointments();
    }, []);

    // function to delete appointment
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "appointments", id));
            setAppointments(appointments.filter(item => item.id !== id)); // Update UI. create a new array without the deleted item.
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    // function to mark appointment
    const markAsAttended = async (id) => {
        try {
            await updateDoc(doc(db, "appointments", id), {status: "attended"});
            setAppointments(prev =>prev.map(item => item.id === id ? { ...item, status: "attended" } : item)); // Update UI
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return ( 
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-xl font-bold mb-4">All Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments yet.</p>
            ) : (
            <ul className="space-y-4">
                {appointments.map((item) => (
                    <li key={item.id} className="bg-white p-4 rounded shadow">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Date:</strong> {item.date}</p>
                        <p><strong>Service:</strong> {item.service}</p>                       
                        <p>
                            <strong>Status:</strong>
                            {" "}
                            <span className={item.status === "attended" ? "text-green-600" : "text-yellow-600"}>
                                {item.status}
                            </span>
                        </p>
                        <div className="mt-3 flex gap-3">
                            {item.status !== "attended" && (
                            <button
                                onClick={() => markAsAttended(item.id)}
                                className="bg-green-600 text-white px-3 py-1 rounded"
                            >
                                Mark as Attended
                            </button>
                            )}

                            <button
                                onClick={() => handleDelete(item.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded"
                                >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            )}
        </div>

    );
}

export default Dashboard;