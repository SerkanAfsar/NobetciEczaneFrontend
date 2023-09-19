"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive == true) {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <nav
      className={
        isActive ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
      }
    >
      <Link href={"/"} className={styles.navbarBrand} title="Nöbetçi Eczaneler">
        Nöbetçi Eczaneler
      </Link>
      <div className={`${styles.menu}`}>
        <ul>
          <li>
            <Link
              href={`/istanbul-nobetci-eczaneleri`}
              title="İstanbul Nöbetçi Eczaneleri"
            >
              İstanbul Nöbetçi Eczaneleri
            </Link>
          </li>
          <li>
            <Link
              href={`/ankara-nobetci-eczaneleri`}
              title="Ankara Nöbetçi Eczaneleri"
            >
              Ankara Nöbetçi Eczaneleri
            </Link>
          </li>
          <li>
            <Link
              href={`/izmir-nobetci-eczaneleri`}
              title="İzmir Nöbetçi Eczaneleri"
            >
              İzmir Nöbetçi Eczaneleri
            </Link>
          </li>
        </ul>
        <button type="button" onClick={(e) => setIsActive((item) => !item)}>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
