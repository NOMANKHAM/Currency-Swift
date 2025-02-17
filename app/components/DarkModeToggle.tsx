"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <div className="relative">
      <style jsx global>{`
        :root {
          --primary-color: #4caf50;
          --secondary-color: #2c3e50;
          --accent-color: #ffc107;
          --background-color:rgb(255, 255, 255);
          --text-color:rgb(0, 0, 0);
          --card-background: #ffffff;
          --nav-background: #bfdbfcc2;
          --hero-background: linear-gradient(to bottom, #bfdbfcc2, #b4d5fa8e);
          --footer-background: #ffffff;
          --input-border: #036aaf;
          --input-background: white;
          --button-background: rgb(45, 31, 241);
          --button-color: #fff;
          --feature-card-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.331);
           --container-shadow: 0 10px 105px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
                   --container-background:#ffff;
                             --opt: rgb(231, 231, 231);
                              --black:#ffff;
                                --dcolor:rgb(218, 218, 218);
                                       --under-background: rgb(45, 31, 241);
        }

        .dark-mode {
          --primary-color: #45a049;
          --secondary-color: #34495e;
          --accent-color: #ffd54f;
          --background-color:rgb(26, 26, 37);
          --text-color: #f5f5f5;
          --card-background: #2c2c2c;
          --nav-background: linear-gradient(to left,rgb(28, 2, 61),rgb(18, 37, 68));
          --hero-background: linear-gradient(to left,rgb(28, 2, 61),rgb(18, 37, 68));
          --footer-background:rgb(1, 22, 43);
          --input-border:rgb(0, 0, 0);
          --input-background:rgb(255, 255, 255);
          --button-background:rgb(28, 2, 61);
          --button-color: #f5f5f5;
          --feature-card-shadow: 0 0 30px 0px rgba(255, 255, 255, 0.1);
          --container-shadow: 0 0 15px rgba(235, 232, 232, 0.64),  0 0 rgba(243, 236, 236, 0.64);
          --container-background: #111827;
          --black:#000;
          --fcolor:rgb(85, 81, 81);
            --dcolor:rgb(85, 81, 81);
          --opt: #2c2c2c;
                 --under-background: rgb(45, 31, 241);
        }

        body {
          color: var(--text-color);
          background-color: var(--background-color);
          transition: color 0.3s ease, background-color 0.3s ease;
        }
.container{
background:var(--card-background);
box-shadow:var(--container-shadow);
}.sidebar-container{
          background: var(--nav-background);
          transition: background-color 0.3s ease;
}
        .nav {
          background: var(--nav-background);
          transition: background-color 0.3s ease;
        }

        .hero {
          background: var(--hero-background);
          transition: background 0.3s ease;
        }

        input[type="number"] {
          background: var(--input-background);
          border: 2px solid var(--input-border);
          color: var(--text-color);
          transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        #send-request {
          background: var(--button-background);
          color: var(--button-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .fcards {
          background: var(--card-background);
          box-shadow: var(--feature-card-shadow);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .about {
          background: var(--background-color);
          transition: background-color 0.3s ease;
        }

        .abcard {
          background: var(--card-background);
          transition: background-color 0.3s ease;
        }

        .footer {
          background: var(--footer-background);
          transition: background-color 0.3s ease;
        }

        .dark-mode .nav-links a,
        .dark-mode .logo span,
        .dark-mode .theme-toggle,
        .dark-mode .mobile-menu-icon,
        .dark-mode .footer,
        .dark-mode .footer a {
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        /* Additional styles */
        .dropdown .selected-value {
          color: var(--text-color);
          border-color: var(--input-border);
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        .dropdown-options {
          background: var(--card-background);
          color: var(--text-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dropdown-options .currency:hover {
          background: var(--dcolor);
          color: var(--text-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        // .code {
        //   background: var(--card-background);
        //   color: var(--text-color);
        //   transition: background-color 0.3s ease, color 0.3s ease;
        // }

        .nav ul li a {
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        .nav ul li a:hover {
          color: var(--under-background);
        }

        .gets {
          background: var(--button-background);
          color: var(--button-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .gets:hover {
          background: var(--background-color);
          color: var(--text-color);
        }

        .opt  {
          background: var(--opt);
          color: var(--text-color);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .navigator {
          background: var(--black);
          transition: background-color 0.3s ease;
        }.api .bow{
           background: var(--black);
        }

        .syntax {
          color: var(--text-color);
          transition: color 0.3s ease;
        }.features,.api{
                  background: var(--background-color);
          color: var(--text-color);
        }
          .codetext{
                  background: var(--container-background);

          }.fcards{
          color:var(--text-color);
          }.fcards .fp{
           color:var(--fcolor);
          }.w-6{
               color:var(--text-color);
          }.exapip{
           color:var(--text-color);
          }
      `}</style>

      <button
        onClick={() => setDarkMode(!darkMode)}
       className="dmode"
        style={{
            // padding: "0.5rem", // p-2
            position:'absolute',
            right:'30px',
            top:'27px',
            border:'none',
            borderRadius: "9999px", // rounded-full
            backgroundColor: "transparent", // bg-card
            color: "var(--text-color)", // text-text
            transition: "background-color 0.2s ease",
            animation: 'pulse 2s ease-in-out infinite', // transition-colors duration-200
          }}
          
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  )
}

