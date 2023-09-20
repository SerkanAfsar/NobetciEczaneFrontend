import styles from "./SinglePharmacy.module.css";
export default function SinglePharmacy({ pharmacy, handleMapClick = null }) {
  return (
    <div className="card d-flex flex-column h-100">
      <div className={`card-header `}>{pharmacy?.ilceAdi}</div>
      <div className="card-body">
        <h5 className={`card-title ${styles.title}`}>{pharmacy?.eczaneAdi}</h5>
        <p className={`card-text ${styles.address}`}>{pharmacy?.adres}</p>
        {pharmacy?.telefon && (
          <>
            <a
              href={`tel:${pharmacy.telefon}`}
              className="card-text d-block mb-3 text-underline"
            >
              {pharmacy?.telefon}
            </a>
          </>
        )}
      </div>
      {pharmacy.hasMap && (
        <div className="pb-3 px-3">
          <button
            onClick={(e) => handleMapClick({ item: pharmacy })}
            className={`btn btn-primary w-100 d-block  align-self-end ${styles.btn}`}
          >
            Harita İçin Tıklayınız
          </button>
        </div>
      )}
    </div>
  );
}
