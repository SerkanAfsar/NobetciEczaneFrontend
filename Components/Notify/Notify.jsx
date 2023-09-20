import styles from "./Notify.module.css";
export default function Notify() {
  return (
    <div class={`alert alert-warning ${styles.notify}`} role="alert">
      <p>
        Nöbetçi Eczaneler Pazartesi,Salı,Çarşamba,Perşembe Cuma günleri genelde
        akşam saat 18.00'de başlar,ertesi gün sabahleyin saat 09.00'de sona
        erer.
      </p>
      <p>
        Nöbetçi Eczaneler Cumartesi ve Pazar günleri genelde sabahleyin saat
        09.00'de başlar,ertesi gün sabahleyin saat 09.00'de sona erer.
      </p>
    </div>
  );
}
