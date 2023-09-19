"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const refHeader = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (window.scrollY > refHeader.current.clientHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      ref={refHeader}
      className={
        isSticky ? `${styles.header} ${styles.sticky}` : `${styles.header}`
      }
    >
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
}
