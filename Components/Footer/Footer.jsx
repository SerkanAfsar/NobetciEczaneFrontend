import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="col-12 d-flex justify-content-center justify-content-md-end align-items-center ">
          <Link
            href={"https://www.linkedin.com/in/serkanafsar/"}
            rel="nofollow"
            target="_blank"
          >
            Copyright {new Date().getFullYear()} © Nöbetçi Eczaneler | Powered
            By Serkan Afşar
          </Link>
        </div>
      </div>
    </footer>
  );
}
