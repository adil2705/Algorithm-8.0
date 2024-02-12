// Define the Edit component
// Import necessary modules
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore"; // Import getDoc from Firestore library

// Define the Edit component
const Edit = () => {
    // Obtain the current user from the context
    const user = useContext(UserContext);

    // Define state variables
    const [teamData, setTeamData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    

// Add a conditional check to handle null user
    if (!user || !user.email) {
    return <p>User not authenticated or email not available.</p>;
    }

// Now you can safely access user.email
   const userEmail = user.email;

    // Function to fetch team data for the current user
    const fetchTeamData = async () => {
        setLoading(true);
        try {
            // Fetch the document from Firestore using the user's email
            const docRef = doc(db, "teams", user.email);
            const docSnap = await getDoc(docRef); // Use getDoc function to fetch the document

            // Check if the document exists
            if (docSnap.exists()) {
                // Set the team data if the document exists
                setTeamData(docSnap.data());
            } else {
                // Handle the case where the document does not exist
                setError('No team data found for the current user.');
            }
        } catch (error) {
            // Handle errors
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch team data on component mount
    useEffect(() => {
        fetchTeamData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Render the component JSX
    return (
        <div>
            {/* Render loading state */}
            {loading && <p>Loading...</p>}
            
            {/* Render error message if any */}
            {error && <p>{error}</p>}
            
            {/* Render team data */}
            {teamData && (
                <div>
                    <p>Team Name: {teamData.teamName}</p>
                    {/* Render other team details as needed */}
                </div>
            )}
        </div>
    );
};

// Export the Edit component
export default Edit;
