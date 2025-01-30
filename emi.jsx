import React, { useState } from "react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const calculateEMI = () => {
    if (amount && interest && tenure) {
      const monthlyInterest = interest / 12 / 100;
      const emiValue =
        (amount * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
        (Math.pow(1 + monthlyInterest, tenure) - 1);
      const totalPayment = emiValue * tenure;
      const interestPayment = totalPayment - amount;

      setEmi(`EMI: ₹${emiValue.toFixed(2)}`);
      setTotalAmount(`Total Amount: ₹${totalPayment.toFixed(2)}`);
      setTotalInterest(`Total Interest: ₹${interestPayment.toFixed(2)}`);
    } else {
      alert("Please enter all values.");
    }
  };

  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F5F5F5",
      fontFamily: "'Open Sans', sans-serif",
      minHeight: "100vh",
      alignItems: "center",
    },
    container: {
      width: "600px",
      height: "auto",
      backgroundColor: "#445A6F",
      color: "#FFFFFF",
      padding: "25px",
      borderRadius: "10px",
    },
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    inputBlock: {
      backgroundColor: "#e63946",
      padding: "20px",
      borderRadius: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginTop: "10px",
      border: "none",
      fontSize: "20px",
    },
    button: {
      backgroundColor: "#28a745",
      color: "white",
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "20px",
    },
    resultText: {
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Loan Calculator</h1>
        <div style={styles.wrapper}>
          <div style={styles.inputBlock}>
            <p>Loan Amount (₹)</p>
            <input
              type="number"
              style={styles.input}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div style={styles.inputBlock}>
            <p>Interest Rate (%)</p>
            <input
              type="number"
              style={styles.input}
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
          </div>
          <div style={styles.inputBlock}>
            <p>Tenure (in months)</p>
            <input
              type="number"
              style={styles.input}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
            />
          </div>
        </div>
        <button style={styles.button} onClick={calculateEMI}>
          Calculate
        </button>
        <h2 style={styles.resultText}>{emi}</h2>
        <h2 style={styles.resultText}>{totalAmount}</h2>
        <h2 style={styles.resultText}>{totalInterest}</h2>
      </div>
    </div>
  );
};

export default LoanCalculator;
