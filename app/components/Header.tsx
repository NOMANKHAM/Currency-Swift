import Link from "next/link"
import Image from "next/image"
import Darkmode from "./DarkModeToggle"

import { useEffect } from "react";

export default function Nav(){

  useEffect(() => {
    let lastScrollTop: number = 0;
    const navbar: HTMLElement | null = document.querySelector(".nav");

    if (!navbar) return; // Ensure navbar exists

    const handleScroll = (): void => {
      const scrollTop: number = window.scrollY || document.documentElement.scrollTop;

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

    
return(


    <nav className="nav">
    <button className="menu">
      <pre>--- ---</pre>
    </button>
    <ul>
      <li className="logo">
        <Image src="/Assets/logo.png" alt="logo" width={70} height={70} />
        <span>Currency-Swift</span>
      </li>
      <li className="home">
        <Link href="#hero" className="nav-link downeffect">
          Home
        </Link>
      </li>
      <li className="home">
        <Link href="#wrap1" className="nav-link downeffect">
          Converter
        </Link>
      </li>
      <li className="home">
        <Link href="#features" className="nav-link downeffect">
          Features
        </Link>
      </li>
      <li className="home">
        <Link href="#about" className="nav-link downeffect">
          About
        </Link>
      </li>
      <li className="home">
        <Link href="#api" className="nav-link downeffect">
          API
        </Link>
      </li>
      <li><Darkmode /></li>
      {/* <li className="toggle">
        <div className="toggle-container">
          <input className="toggle-input" type="checkbox" />
          <div className="toggle-handle-wrapper">
            <div className="toggle-handle">
              <div className="toggle-handle-knob"></div>
              <div className="toggle-handle-bar-wrapper">
                <div className="toggle-handle-bar"></div>
              </div>
            </div>
          </div>
          <div className="toggle-base">
            <div className="toggle-base-inside"></div>
          </div>
        </div>
      </li> */}
    </ul>
  </nav>

)

}