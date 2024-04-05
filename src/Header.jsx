import React, { useState } from 'react';

export default function Header() {
    // Initial state for resetting the form
    const initialState = {
        name: '',
        email: '',
        phoneNumber: ''
    };

    // State to hold form data
    const [student, setStudent] = useState(initialState);

    // State to control the display of the confirmation message
    const [showConfirmation, setShowConfirmation] = useState(false);

    // State to hold the submitted data for display
    const [submittedDetails, setSubmittedDetails] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    // Handles form input changes
    const handleChange = (e) => {
        // Reset confirmation message visibility when editing the form after submission
        if (showConfirmation) setShowConfirmation(false);

        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Display the submitted details
        setSubmittedDetails(student);
        // Show the confirmation message
        setShowConfirmation(true);
        // Reset the form fields
        setStudent(initialState);
        // Here you might want to handle the actual submission, like sending data to a backend server
        console.log(student); // Logging the student object to the console for now
    };

    return (
        <>
            <h1>Assignment 4</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Student Name:
                        <input type="text" name="name" value={student.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Student Email:
                        <input type="email" name="email" value={student.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {showConfirmation && (
                <div>
                    <h2>Submission Confirmation</h2>
                    <p>Thank you for your submission, {submittedDetails.name}!</p>
                    <p>Email: {submittedDetails.email}</p>
                    <p>Phone Number: {submittedDetails.phoneNumber}</p>
                </div>
            )}
        </>
    );
}
