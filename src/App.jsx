import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    fetch("/db.json") // โหลด JSON จาก public folder
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions)) // 🔥 เข้าถึง transactions
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchDate(e.target.value);
  };

  const filteredTransactions = searchDate
    ? transactions.filter((t) => t.date.includes(searchDate))
    : transactions;

  return (
    <div className="cover">
      <div className="container">
        <h1>Transaction List</h1>

        <div className="search">
          <input type="date" value={searchDate} onChange={handleSearch} />
          <button onClick={() => setSearchDate("")}>Reload</button>
        </div>

        <div className="card">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="card-style">
              <h1>List {transaction.id}</h1>
              <p className="card-style-content date"><strong>Date</strong> | {transaction.date} |</p>
              <p className="card-style-content type"><strong>Type</strong> | {transaction.type} |</p>
              <p className="card-style-content amount"><strong>Amount</strong> | {transaction.amount} |</p>
              <p className="card-style-content category"><strong>Category</strong> | {transaction.category} |</p>
              <p className="card-style-content des"><strong>Description</strong> | {transaction.description} |</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
