import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminDashboard() {
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [error, setError] = useState(null);
  const [manualId, setManualId] = useState("");

  useEffect(() => {
    fetchPendingDeposits();
  }, []);

  const fetchPendingDeposits = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Access Denied: No token found.");
        return;
      }

      const response = await axios.get("https://cryptoapi-1-c7wy.onrender.com/api/deposit/admin/deposit", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPendingDeposits(response.data);
    } catch (error) {
      console.error("Error fetching deposits:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Access Denied: Invalid Token or Unauthorized");
    }
  };

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`https://cryptoapi-1-c7wy.onrender.com/api/deposit/admin/deposit/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingDeposits(pendingDeposits.filter(deposit => deposit._id !== id));
    } catch (error) {
      console.error("Error approving deposit:", error.response?.data || error.message);
      setError("Failed to approve deposit.");
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`https://cryptoapi-1-c7wy.onrender.com/api/deposit/admin/deposit/${id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingDeposits(pendingDeposits.filter(deposit => deposit._id !== id));
    } catch (error) {
      console.error("Error rejecting deposit:", error.response?.data || error.message);
      setError("Failed to reject deposit.");
    }
  };

  return (
    <div className="p-6 admin-back px-5 py-5">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}

      {/* Manual ID Approval Section */}
      <div className="mb-6">
        <input
          type="text"
          className="border p-2 rounded-md w-full"
          placeholder="Enter Deposit ID"
          value={manualId}
          onChange={(e) => setManualId(e.target.value)}
        />
        <div className="flex space-x-2 mt-2">
          <button
            className="px-4 py-2 btn btn-success px-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => handleApprove(manualId)}
          >
            Approve by ID
          </button>
          <button
            className="px-4 py-2 btn btn-danger mx-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => handleReject(manualId)}
          >
            Reject by ID
          </button>
        </div>
      </div>

      {/* Pending Deposits List */}
      {pendingDeposits.length === 0 ? (
        <p>No pending deposits.</p>
      ) : (
        <ul className="space-y-4 ">
          {pendingDeposits.map((deposit) => (
            <li key={deposit._id} className="border p-4 flex justify-between items-center  rounded-md">
              <div>
                <p className="font-semibold">Amount: {deposit.amount}</p>
                <p className="text-sm text-gray-500">Plan: {deposit.plan}</p>
                <p className="text-sm text-gray-500">Status: {deposit.status}</p>
                <p className="text-sm text-gray-500">User Email: {deposit.user.email}</p>
                <p className="text-xs text-gray-400">ID: {deposit._id}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="px-4 btn btn-success px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => handleApprove(deposit._id)}
                >
                  Approve
                </button>
                <button
                  className="px-4 btn btn-danger mx-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleReject(deposit._id)}
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
