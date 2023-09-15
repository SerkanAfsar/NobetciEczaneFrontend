import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"} className={styles.navbarBrand} title="Nöbetçi Eczaneler">
        Nöbetçi Eczaneler
      </Link>
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
    </nav>
  );
}
