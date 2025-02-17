import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import Darkmode from "./DarkModeToggle"
export default function Sidebar() {
  const  [isOpen, setIsOpen] = useState<boolean>(false);

 useEffect(() => {
    let lastScrollTop: number = 0;
    const navbar: HTMLElement | null = document.querySelector(".sidebar-container");

    if (!navbar) return; // Ensure navbar exists

    const handleScroll = (): void => {
      const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("scroll");
      } else {
        // Scrolling up
        if (scrollTop < 10) {
          navbar.classList.remove("scroll");
        }
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sidebar-container">
      {/* Menu Button */}
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent', position: "absolute", zIndex: "10" ,left:'20px',width:'50px',height:'50px',border:'none' }}>
        {isOpen ? <X size={40} /> : <Menu size={40} />
        
        }
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className={`sidebar ${isOpen ? "open": ""}`}
      >
        <div className="NAV">
          {/* Logo */}
          <div className="sidebar-logo">
            <Image src="/Assets/logo.png" alt="logo" width={190} height={190} style={{position:'absolute',left:'-50px',top:'-30px'}}/>
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-nav">
            {[
              { href: "#hero", label: "Home" },
              { href: "#wrap1", label: "Converter" },
              { href: "#features", label: "Features" },
              { href: "#about", label: "About" },
              { href: "#api", label: "API" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="sidebar-link"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <ul>
              <li><Darkmode /></li>
            </ul>
          </nav>
        </div>
      </motion.aside>
    </div>
  );
}
