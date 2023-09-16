export default function SinglePharmacy({ pharmacy }) {
  return (
    <div className="card d-flex flex-column h-100">
      <div className="card-header">{pharmacy?.ilceAdi}</div>
      <div className="card-body">
        <h5 className="card-title">{pharmacy?.eczaneAdi}</h5>
        <p className="card-text">{pharmacy?.adres}</p>
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
        <div className="p-3">
          <button className="btn btn-primary w-100 d-block  align-self-end">
            Harita
          </button>
        </div>
      )}
    </div>
  );
}
