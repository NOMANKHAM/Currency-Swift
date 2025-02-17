export function setupCurrencyConverter() {
    // Function to set up currency dropdowns
    function setupDropdown(dropdownId: string, outputId: string) {
      const dropdown = document.getElementById(dropdownId)
      if (!dropdown) return
  
      const selectedValue = dropdown.querySelector(".selected-value")
      const options = dropdown.querySelectorAll(".currency")
      const output = document.getElementById(outputId)
  
      // Toggle dropdown visibility
      dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("open")
      })
  
      // Handle option selection
      options.forEach((option) => {
        option.addEventListener("click", (e) => {
          const target = e.target as HTMLElement
          const value = target.getAttribute("data-value")
          if (selectedValue && value) {
            selectedValue.textContent = value // Update displayed value
          }
          if (output && value) {
            output.textContent = value // Update output paragraph
          }
          dropdown.classList.remove("open") // Close the dropdown
        })
      })
  
      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target as Node)) {
          dropdown.classList.remove("open")
        }
      })
    }
  
    // Setup "From" and "To" dropdowns
    setupDropdown("from-dropdown", "from-output")
    setupDropdown("to-dropdown", "to-output")
  
    // Function to swap currencies
    function swapCurrencies() {
      const fromOutput = document.getElementById("from-output")
      const toOutput = document.getElementById("to-output")
      const fromDropdown = document.getElementById("from-dropdown")
      const toDropdown = document.getElementById("to-dropdown")
  
      if (fromOutput && toOutput && fromDropdown && toDropdown) {
        // Swap the text content of the output elements
        ;[fromOutput.textContent, toOutput.textContent] = [toOutput.textContent, fromOutput.textContent]
  
        // Swap the selected values in the dropdowns
        const fromSelected = fromDropdown.querySelector(".selected-value")
        const toSelected = toDropdown.querySelector(".selected-value")
        if (fromSelected && toSelected) {
          ;[fromSelected.textContent, toSelected.textContent] = [toSelected.textContent, fromSelected.textContent]
        }
      }
    }
  
    // Add event listener to the exchange button
    const exchangeButton = document.querySelector(".exchange")
    if (exchangeButton) {
      exchangeButton.addEventListener("click", swapCurrencies)
    }
  
    // Fetch data with async/await
    async function fetchExchangeRate(apiUrl: string) {
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        return data
      } catch (error) {
        console.error("Error fetching API data:", error)
        alert("Error fetching API data. Please try again.")
      }
    }
  
    // Send Request Button
    const sendRequestButton = document.getElementById("send-request")
    if (sendRequestButton) {
      sendRequestButton.addEventListener("click", async () => {
        const fromOutput = document.getElementById("from-output")
        const toOutput = document.getElementById("to-output")
        const amountInput = document.getElementById("amount") as HTMLInputElement
  
        if (fromOutput && toOutput && amountInput) {
          const fromCurrency = fromOutput.textContent?.trim()
          const toCurrency = toOutput.textContent?.trim()
          const amount = Number.parseFloat(amountInput.value)
  
          if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
            alert("Please enter valid data.")
            return
          }
  
          const apiKey = "252e8a4fdcc2587d2fc6c661" // API key
          const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`
          const data = await fetchExchangeRate(apiUrl)
  
          function showPopup() {
            const popup = document.querySelector(".ans")
            const container = document.querySelector(".container")
            if (popup && container) {
              if (data && data.conversion_result) {
                popup.classList.add("bottom")
                container.classList.add("bot")
                popup.textContent = `Converted Amount: ${data.conversion_result}`
              } else {
                container.classList.remove("bot")
                popup.classList.remove("bottom")
                popup.textContent = "Failed to fetch conversion rate."
              }
  
              // Remove after 7 seconds
              setTimeout(() => {
                popup.classList.remove("bottom")
                container.classList.remove("bot")
                amountInput.value = "" // Clear the amount input
              }, 7000)
            }
          }
  
          showPopup()
        }
      })
    }

    // ... (rest of your JavaScript converted to TypeScript)
  }
  
  