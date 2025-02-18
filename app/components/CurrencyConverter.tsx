import { useState, useEffect, useCallback } from "react";
import { ArrowRightLeft } from "lucide-react";
import CurrencyDropdown from "./CurrencyDropdown";
import { setupCurrencyConverter } from "@/app/currencyConverter";

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Setup currency converter only once
  useEffect(() => {
    setupCurrencyConverter();
  }, []);

  const handleConvert = useCallback(async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    try {
      // Your conversion logic (API call or internal function)
      setResult(`Converted amount: ${amount} ${fromCurrency} = X ${toCurrency}`);
    } catch (error) {
      console.error("Conversion Error:", error);
      setResult("Error: Unable to convert currency. Try again.");
    }
    setLoading(false);
  }, [amount, fromCurrency, toCurrency]);

  const handleSwap = () => {
    setFromCurrency((prevFromCurrency) => {
      setToCurrency((prevToCurrency) => prevFromCurrency);
      return prevToCurrency;
    });
  };

  return (
    <section className="wrap1" id="wrap1">
      <h1>Currency Converter</h1>
      <div className="container">
        <p className="fromp">From</p>
        <CurrencyDropdown id="from-dropdown" defaultCurrency="USD" onSelect={setFromCurrency} />
        <button className="exchange" onClick={handleSwap} aria-label="Swap currencies">
          <ArrowRightLeft className="w-6 h-6" />
        </button>
        <p className="top">To</p>
        <CurrencyDropdown id="to-dropdown" defaultCurrency="EUR" onSelect={setToCurrency} />

        <label htmlFor="amount" className="amount">Enter Amount:</label>
        <input
          type="number"
          id="amount"
          className="dark"
          placeholder="Enter amount to convert"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <span className="ans">{loading ? "Converting..." : result}</span>

        <button id="send-request" onClick={handleConvert} disabled={loading}>
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>
    </section>
  );
}
