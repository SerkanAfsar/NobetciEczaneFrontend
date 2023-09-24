"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BreadCrumb.module.css";
export default function BreadCrumb({ title }) {
  const pathName = usePathname();
  return (
    <nav aria-label="breadcrumb" className={styles.breadCrumb}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link title="Anasayfa" href={"/"}>
            Anasayfa
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link title={`${title} Nöbetçi Eczaneleri`} href={pathName}>
            {title} Nöbetçi Eczaneleri
          </Link>
        </li>
      </ol>
    </nav>
  );
}
