import { forwardRef, useEffect } from "react";

const ModalHarita = forwardRef(function MapModal(props, ref) {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref={ref}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={props.id}>
              {props?.pharmacy?.ilceAdi} - {props?.pharmacy?.eczaneAdi} -
              {props?.pharmacy?.telefon}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {props.lat} - {props.long}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModalHarita;
