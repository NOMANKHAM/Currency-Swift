import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Darkmode from "./DarkModeToggle"
export default function Sidebar() {
  const  [isOpen, setIsOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   const bodye = document.querySelector("body");

  //   if (bodye && window.matchMedia("(max-width: 956px)").matches) {
  //     if (isOpen) {
  //       bodye.style.overflowY = "hidden"; // Prevent scrolling
  //     } else {
  //       bodye.style.overflowY = "auto"; // Restore scrolling
  //     }
  //   }

  //   // Cleanup function to reset styles when component unmounts
  //   return () => {
  //     if (bodye) {
  //       bodye.style.overflowY = "auto";
  //     }
  //   };
  // }, [isOpen]);
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
