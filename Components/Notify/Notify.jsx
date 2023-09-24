import styles from "./Notify.module.css";
export default function Notify({ ilAdi }) {
  return (
    <div class={`alert alert-warning ${styles.notify}`} role="alert">
      <p>
        {ilAdi} Nöbetçi Eczaneleri Pazartesi,Salı,Çarşamba,Perşembe Cuma günleri
        genelde akşam saat 18.00 de başlar,ertesi gün sabahleyin saat 09.00 de
        sona erer.
      </p>
      <p>
        {ilAdi} Nöbetçi Eczaneler Cumartesi ve Pazar günleri genelde sabahleyin
        saat 09.00 de başlar,ertesi gün sabahleyin saat 09.00 de sona erer.
      </p>
    </div>
  );
}
