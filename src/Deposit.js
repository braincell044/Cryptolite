import axios from "axios";
import { useState } from "react";

const Deposit = () => {
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handleDeposit = async () => {
        try {
            const token = localStorage.getItem("token"); // Get token from local storage

            const res = await axios.post("https://cryptoapi-hazel.vercel.app/api/auth/deposit", 
                { amount: Number(amount) },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setMessage(`Deposit successful! New Balance: ${res.data.newBalance}`);
        } catch (error) {
            setMessage(error.response?.data?.message || "Deposit failed.");
        }
    };

    return (
        <div>
            <h2>Make a Deposit</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter deposit amount"
            />
            <button onClick={handleDeposit}>Deposit</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Deposit;
