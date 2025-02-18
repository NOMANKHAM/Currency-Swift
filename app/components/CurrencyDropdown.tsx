"use client";

import type React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

interface CurrencyDropdownProps {
  id: string;
  defaultCurrency: string;
  onSelect: (currency: string) => void;
}

export default function CurrencyDropdown({ id, defaultCurrency, onSelect }: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach event listener only when dropdown is open
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const currencies = useMemo(
    () => [
      { code: "USD", name: "United States Dollar" },
      { code: "EUR", name: "Euro" },
      // ... All other currencies
    ],
    []
  );

  const filteredCurrencies = useMemo(
    () =>
      currencies.filter(
        (currency) =>
          currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          currency.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, currencies]
  );

  const handleSelect = (currency: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedCurrency(currency);
    onSelect(currency);
    setIsOpen(false);
  };

  const toggleDropdown = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleInputClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div id={id} className="dropdown relative" ref={dropdownRef} onClick={toggleDropdown}>
      <span className="selected-value dark cursor-pointer" onClick={toggleDropdown}>
        {selectedCurrency}
      </span>
      {isOpen && (
        <div className="dropdown-options dark absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="search p-2" onClick={handleInputClick}>
            <input
              type="text"
              className="searchInput w-full p-2 border border-gray-300 rounded"
              placeholder="Search for countries or currencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={searchInputRef}
              onClick={toggleDropdown}
            />
          </div>
          {filteredCurrencies.map((currency) => (
            <div
              key={currency.code}
              className="currency p-2 hover:bg-gray-100 cursor-pointer"
              onClick={(event) => handleSelect(currency.code, event)}
            >
              {currency.code}
              <p className="cnname text-sm text-gray-600">{currency.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
