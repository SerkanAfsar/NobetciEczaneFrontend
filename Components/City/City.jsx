import Link from "next/link";
import styles from "./City.module.css";

export default function City({ city }) {
  return (
    <div className="col-12 col-md-4">
      <Link
        className={`shadow p-3 mb-5  rounded text-center ${styles.city}`}
        href={`/${city.seoUrl}`}
        title={`${city.ilAdi} Nöbetçi Eczaneleri`}
      >
        {city.ilAdi} Nöbetçi Eczaneleri
      </Link>
    </div>
  );
}
