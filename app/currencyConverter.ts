export function setupCurrencyConverter() {
  // Function to set up currency dropdowns
  function setupDropdown(dropdownId: string, outputId: string) {
    const dropdown = document.getElementById(dropdownId);
    const output = document.getElementById(outputId);
    if (!dropdown || !output) return undefined;

    const selectedValue = dropdown.querySelector(".selected-value");
    const options = dropdown.querySelectorAll(".currency");

    // Toggle dropdown visibility
    const toggleDropdown = () => dropdown.classList.toggle("open");

    dropdown.addEventListener("click", toggleDropdown);

    // Handle option selection
    const handleOptionSelection = (e: Event) => {
      const target = e.target as HTMLElement;
      const value = target.getAttribute("data-value");
      if (selectedValue && value) {
        selectedValue.textContent = value;
      }
      if (output && value) {
        output.textContent = value;
      }
      dropdown.classList.remove("open");
    };

    options.forEach(option => option.addEventListener("click", handleOptionSelection));

    // Close dropdown when clicking outside
    const handleOutsideClick = (e: MouseEvent) => {
      if (!dropdown.contains(e.target as Node)) {
        dropdown.classList.remove("open");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Return cleanup function to remove event listeners
    return () => {
      dropdown.removeEventListener("click", toggleDropdown);
      options.forEach(option => option.removeEventListener("click", handleOptionSelection));
      document.removeEventListener("click", handleOutsideClick);
    };
  }

  const cleanupFromDropdown = setupDropdown("from-dropdown", "from-output");
  const cleanupToDropdown = setupDropdown("to-dropdown", "to-output");

  // Function to swap currencies
  function swapCurrencies() {
    const fromOutput = document.getElementById("from-output");
    const toOutput = document.getElementById("to-output");
    const fromDropdown = document.getElementById("from-dropdown");
    const toDropdown = document.getElementById("to-dropdown");

    if (fromOutput && toOutput && fromDropdown && toDropdown) {
      [fromOutput.textContent, toOutput.textContent] = [toOutput.textContent, fromOutput.textContent];
      
      const fromSelected = fromDropdown.querySelector(".selected-value");
      const toSelected = toDropdown.querySelector(".selected-value");
      if (fromSelected && toSelected) {
        [fromSelected.textContent, toSelected.textContent] = [toSelected.textContent, fromSelected.textContent];
      }
    }
  }

  const exchangeButton = document.querySelector(".exchange");
  if (exchangeButton) {
    exchangeButton.addEventListener("click", swapCurrencies);
  }

  async function fetchExchangeRate(apiUrl: string) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching API data:", error);
      alert("Error fetching API data. Please try again.");
      return null;
    }
  }

  const sendRequestButton = document.getElementById("send-request");
  if (sendRequestButton) {
    sendRequestButton.addEventListener("click", async () => {
      const fromOutput = document.getElementById("from-output");
      const toOutput = document.getElementById("to-output");
      const amountInput = document.getElementById("amount") as HTMLInputElement;

      if (fromOutput && toOutput && amountInput) {
        const fromCurrency = fromOutput.textContent?.trim();
        const toCurrency = toOutput.textContent?.trim();
        const amount = Number.parseFloat(amountInput.value);

        if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
          alert("Please enter valid data.");
          return;
        }

        const apiKey = "252e8a4fdcc2587d2fc6c661";
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
        const data = await fetchExchangeRate(apiUrl);

        function showPopup() {
          const popup = document.querySelector(".ans") as HTMLElement | null;
          const container = document.querySelector(".container") as HTMLElement | null;

          if (popup && container && data && data.conversion_result) {
            popup.classList.add("bottom");
            container.classList.add("bot");
            popup.textContent = `Converted Amount: ${data.conversion_result}`;
          } else if (popup && container) {
            container.classList.remove("bot");
            popup.classList.remove("bottom");
            popup.textContent = "Failed to fetch conversion rate.";
          }

          // Remove after 7 seconds
          setTimeout(() => {
            if (popup && container) {
              popup.classList.remove("bottom");
              container.classList.remove("bot");
            }
            amountInput.value = ""; // Clear the amount input
          }, 7000);
        }

        showPopup();
      }
    });
  }

  // Cleanup dropdown setup only if the cleanup functions are defined
  if (cleanupFromDropdown) cleanupFromDropdown();
  if (cleanupToDropdown) cleanupToDropdown();
}
