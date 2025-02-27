import React, { useState } from "react";
import axios from "axios";

const SendEmail = () => {
    const [emailData, setEmailData] = useState({
        to: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    };

    const sendEmail = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/send-email", emailData);
            alert("Email sent successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email");
        }
    };

    return (
        <div>
            <h2>Send Email</h2>
            <input
                type="email"
                name="to"
                placeholder="Recipient Email"
                value={emailData.to}
                onChange={handleChange}
            />
            <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={emailData.subject}
                onChange={handleChange}
            />
            <textarea
                name="message"
                placeholder="Message"
                value={emailData.message}
                onChange={handleChange}
            />
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
};

export default SendEmail;
