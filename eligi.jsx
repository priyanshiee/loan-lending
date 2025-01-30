import React, { useState } from "react";

const LoanEligibilityCalculator = () => {
  const [tenure, setTenure] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [otherEmis, setOtherEmis] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [emi, setEmi] = useState("");
  const [eligibleAmount, setEligibleAmount] = useState("");

  const calculate = () => {
    if (
      !tenure ||
      !loanAmount ||
      !interestRate ||
      !monthlySalary ||
      !otherEmis
    ) {
      alert("Please fill all fields before calculating.");
      return;
    }

    // Convert input values
    const parsedTenure = parseInt(tenure);
    const parsedLoanAmount = parseInt(loanAmount);
    const parsedInterestRate = parseFloat(interestRate) / 12 / 100;
    const parsedMonthlySalary = parseInt(monthlySalary);
    const parsedOtherEmis = parseInt(otherEmis);

    // EMI Calculation
    const calculatedEmi =
      (parsedLoanAmount *
        parsedInterestRate *
        Math.pow(1 + parsedInterestRate, parsedTenure)) /
      (Math.pow(1 + parsedInterestRate, parsedTenure) - 1);

    // Calculate eligible loan amount
    const calculatedEligibleAmount =
      (parsedMonthlySalary - parsedOtherEmis) * 40;

    // Check eligibility
    const isEligible = calculatedEligibleAmount >= parsedLoanAmount;

    // Update state
    setEligibility(isEligible ? "Yes" : "No");
    setEmi(calculatedEmi.toFixed(2));
    setEligibleAmount(calculatedEligibleAmount.toFixed(2));
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontFamily: "sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "24px",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "3px",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      fontSize: "16px",
      display: "block",
      width: "100%",
      marginTop: "10px",
    },
    resultContainer: {
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ccc",
      borderRadius: "3px",
    },
    highlight: {
      backgroundColor: "#e6ffe6",
      borderRadius: "3px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Loan Eligibility Calculator</h1>

      <label style={styles.label} htmlFor="tenure">
        TENURE (MONTHS):
      </label>
      <input
        type="number"
        id="tenure"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
        min="1"
        style={styles.input}
      />

      <label style={styles.label} htmlFor="loanAmount">
        LOAN AMOUNT: ₹
      </label>
      <input
        type="number"
        id="loanAmount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        min="1"
        style={styles.input}
      />

      <label style={styles.label} htmlFor="interestRate">
        ANNUAL INTEREST RATE:
      </label>
      <input
        type="number"
        id="interestRate"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        min="0"
        step="0.1"
        style={styles.input}
      />

      <label style={styles.label} htmlFor="monthlySalary">
        MONTHLY SALARY: ₹
      </label>
      <input
        type="number"
        id="monthlySalary"
        value={monthlySalary}
        onChange={(e) => setMonthlySalary(e.target.value)}
        min="0"
        style={styles.input}
      />

      <label style={styles.label} htmlFor="otherEmis">
        OTHER EMIS: ₹
      </label>
      <input
        type="number"
        id="otherEmis"
        value={otherEmis}
        onChange={(e) => setOtherEmis(e.target.value)}
        min="0"
        style={styles.input}
      />

      <button onClick={calculate} style={styles.button}>
        Calculate
      </button>

      <div style={styles.resultContainer}>
        <h2>The output as per the calculator is displayed below:</h2>
        <p>
          ARE YOU ELIGIBLE FOR LOAN?{" "}
          <span style={eligibility === "Yes" ? styles.highlight : {}}>
            {eligibility}
          </span>
        </p>
        <p>EMI: ₹{emi}</p>
        <p>
          LOAN AMOUNT YOU ARE ELIGIBLE FOR: ₹
          <span style={eligibility === "Yes" ? styles.highlight : {}}>
            {eligibleAmount}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoanEligibilityCalculator;
