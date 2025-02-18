"use client"

import { useState } from "react"
import { ArrowRightLeft} from "lucide-react"
import CurrencyDropdown from "./CurrencyDropdown"
import { setupCurrencyConverter } from "@/app/currencyConverter"
export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [amount, setAmount] = useState("")
  const [result,setResult] = useState("")

  const handleConvert = async () => {
await setupCurrencyConverter();
    // Implement the conversion logic here
    // You'll need to use an API or a library for accurate conversion rates
 setResult(`Converted amount: ${amount} ${fromCurrency} = X ${toCurrency}`)
  }

  return (
    <section className="wrap1" id="wrap1">
      <h1>Currency Converter</h1>
      <div className="container">
        <p className="fromp">From</p>
        <CurrencyDropdown id="from-dropdown" defaultCurrency="USD" onSelect={(currency) => setFromCurrency(currency)} />
        <button className="exchange">
        <ArrowRightLeft className="w-6 h-6" />
        </button>
        <p className="top">To</p>
        <CurrencyDropdown id="to-dropdown" defaultCurrency="EUR" onSelect={(currency) => setToCurrency(currency)} />
        <p className="selcur selfrom">
          Selected From Currency: <span id="from-output">{fromCurrency}</span>
        </p>
        <p className="selcur selto">
          Selected To Currency: <span id="to-output">{toCurrency}</span>
        </p>
        <label htmlFor="amount" className="amount">
          Enter Amount:
        </label>
        <input
          type="number"
          id="amount"
          className="dark"
          placeholder="Enter amount to convert"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <span className="ans">{result}</span>
        <button id="send-request" onClick={handleConvert}>
          Convert
        </button>
      </div>
    </section>
  )
}

