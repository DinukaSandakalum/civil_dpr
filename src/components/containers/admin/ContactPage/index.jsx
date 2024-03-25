import React, { useState } from 'react';
import './index.css';
import TopBar from "../../../templates/topBar";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Function to update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle form submission, like sending data to a backend server
        console.log(formData);
        alert("Thank you for reaching out. We'll get back to you soon!");

        // Reset form data
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            <TopBar/>
            <div className="contact-page">
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <p>If you have any questions or need further information, please feel free to contact us through the form below or via the following methods:</p>
                    <ul>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: info@yourconstructionco.com</li>
                        <li>Address: 123 Construction Way, Buildtown, ST 01234</li>
                    </ul>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default ContactPage;
