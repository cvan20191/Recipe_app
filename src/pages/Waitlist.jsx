import React, { useState, useEffect } from "react";

export default function Waitlist() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/waitlist")
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((data) => {
                setUserData(data)
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Waitlist</h1>
            {userData.length > 0 ? (
                <ul className="space-y-4 px-4">
                    {userData.map((client) => (
                        <li key={client.Id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
                            <div className="flex-1 border-b border-gray-300 pb-2 mb-2">{client.Name}</div>
                            <div className="flex-1 border-b border-gray-300 pb-2 mb-2">{client.Services}</div>
                            <div className="flex-1 border-b border-gray-300 pb-2 mb-2">{client.Appointment}</div>
                            <div className="flex-1">{client.MedicalConditions}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No clients in waitlist</p>
            )}
        </div>
    );
}