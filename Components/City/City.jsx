import Link from "next/link";
import styles from "./City.module.css";
import img from "../../public/nobetci.svg";
import Image from "next/image";

export default function City({ city, hasSearch = false }) {
  return (
    <div className="col-12 col-md-4">
      <Link
        className={`shadow p-3  mb-5 d-flex justify-content-start align-items-center gap-4 rounded ${styles.city}`}
        href={`/${city.seoUrl}`}
        title={`${city.ilAdi} Nöbetçi Eczaneleri`}
      >
        <Image
          src={img}
          width={50}
          className="flex-shrink-0 flex-1"
          height={50}
          alt={city.ilAdi}
        />
        <span className="d-block text-center flex-2">
          {city.ilAdi} Nöbetçi Eczaneleri{" "}
          {hasSearch == true ? "İçin Tıklayınız" : ""}
        </span>
      </Link>
    </div>
  );
}
