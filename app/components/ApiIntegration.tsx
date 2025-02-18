"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ApiIntegration() {
  const [activeTab, setActiveTab] = useState<"js" | "php" | "py">("js");
  const navigatorRef = useRef<HTMLDivElement>(null);

  const codeExamples = {
    js: `// JavaScript Example
const apiKey = 'YOUR_API_KEY';
const fromCurrency = 'USD';
const toCurrency = 'EUR';
const amount = 100;

fetch(\`https://v6.exchangerate-api.com/v6/\${apiKey}/pair/\${fromCurrency}/\${toCurrency}/\${amount}\`)
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      console.log(\`\${amount} \${fromCurrency} = \${data.conversion_result} \${toCurrency}\`);
    } else {
      console.error('Conversion failed:', data['error-type']);
    }
  })
  .catch(error => console.error('Error:', error));`,

    php: `// PHP Example
$api_key = 'YOUR_API_KEY';
$from_currency = 'USD';
$to_currency = 'EUR';
$amount = 100;

$url = "https://v6.exchangerate-api.com/v6/{$api_key}/pair/{$from_currency}/{$to_currency}/{$amount}";

$response = file_get_contents($url);
$data = json_decode($response, true);

if ($data['result'] === 'success') {
    echo "{$amount} {$from_currency} = {$data['conversion_result']} {$to_currency}";
} else {
    echo "Conversion failed: " . $data['error-type'];
}`,

    py: `# Python Example
import requests

api_key = 'YOUR_API_KEY'
from_currency = 'USD'
to_currency = 'EUR'
amount = 100

url = f"https://v6.exchangerate-api.com/v6/{api_key}/pair/{from_currency}/{to_currency}/{amount}"

response = requests.get(url)
data = response.json()
if data['result'] == 'success':
    print(f"{amount} {from_currency} = {data['conversion_result']} {to_currency}")
else:
    print(f"Conversion failed: {data['error-type']}")`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab]);
      alert(`Copied ${activeTab.toUpperCase()} Code ✅`);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const updateNavigator = () => {
      const activeLi = document.querySelector(".opt ul li.active") as HTMLLIElement;
      if (!activeLi || !navigatorRef.current) return;

      navigatorRef.current.style.width = `${activeLi.offsetWidth}px`;
      navigatorRef.current.style.left = `${activeLi.offsetLeft + activeLi.offsetWidth / 2}px`;
      navigatorRef.current.style.transform = "translateX(-50%)";
    };

    updateNavigator();
    window.addEventListener("resize", updateNavigator);
    return () => {
      window.removeEventListener("resize", updateNavigator);
    };
  }, [activeTab]);

  return (
    <section className="api" id="api">
      <h1 className="exapih">API Integration</h1>
      <div className="containerapi bow">
        <h1 className="exapih1">How to Use Exchange Rate API</h1>
        <p className="exapip">Integrate real-time currency conversion into your applications</p>

        {/* Tabs for Language Selection */}
        <div className="opt">
          <div ref={navigatorRef} className="navigator"></div>
          <ul>
            {["js", "php", "py"].map((tab) => (
              <li
                key={tab}
                className={`${tab} ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab as "js" | "php" | "py")}
              >
                {tab === "js" ? "JavaScript" : tab === "php" ? "PHP" : "Python"}
              </li>
            ))}
          </ul>
        </div>

        {/* Code Block */}
        <div className="code">
          <pre className="pre">
            <SyntaxHighlighter
              className="syntax"
              language={activeTab}
              style={dracula}
              customStyle={{
                background: "#00002c",
                borderRadius: "8px",
                padding: "16px",
                fontSize: "14px",
                overflowX: "auto",
              }}
            >
              {codeExamples[activeTab]}
            </SyntaxHighlighter>
          </pre>
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy Code
          </button>
        </div>

        {/* API Endpoint & Parameters */}
        <div className="api-details">
          <h3>API Endpoint</h3>
          <p>
            <code className="codetext">
              https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/FROM_CURRENCY/TO_CURRENCY/AMOUNT
            </code>
          </p>

          <h3>Parameters</h3>
          <ul>
            <li>
              <strong>YOUR_API_KEY:</strong> Your Exchange Rate API key
            </li>
            <li>
              <strong>FROM_CURRENCY:</strong> The currency code to convert from (e.g., USD)
            </li>
            <li>
              <strong>TO_CURRENCY:</strong> The currency code to convert to (e.g., EUR)
            </li>
            <li>
              <strong>AMOUNT:</strong> The amount to convert
            </li>
          </ul>

          <p>
            For more details, refer to the{" "}
            <Link href="https://www.exchangerate-api.com/docs" target="_blank" rel="noopener noreferrer">
              official Exchange Rate API documentation
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
