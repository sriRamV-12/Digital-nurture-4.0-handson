import { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // 1 INR ≈ 0.011 EUR
    const converted = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <p>
          ₹{rupees} = €{euro}
        </p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
