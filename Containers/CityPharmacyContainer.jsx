"use client";
import SinglePharmacy from "@/Components/Pharmacy/SinglePharmacy";
import styles from "./CityPharmacyContainer.module.css";
import DropdownList from "@/Components/UI/DropdownList";
import { useState, useCallback, useRef } from "react";

import ModalHarita from "@/Components/ModalHarita/ModalHarita";

export default function CityPharmacyContainer({ result }) {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const modalRef = useRef();

  const pharmaciList = new Set();
  result?.pharmacies?.forEach((item) => {
    pharmaciList.add(item.ilceAdi);
  });

  const data = new Array();
  data.push({ value: null, label: "Tüm İlçeler" });
  pharmaciList.forEach((elem, index) => {
    data.push({ value: elem, label: elem });
  });

  const handleMapClick = useCallback(({ item }) => {
    setSelectedPharmacy(item);
    const { Modal } =
      typeof document !== undefined
        ? require("bootstrap/dist/js/bootstrap")
        : null;
    const myModal = new Modal(modalRef.current);
    myModal.show();
  }, []);

  return (
    <div className="container">
      <div className="row mb-3">
        <div className={`col-12 ${styles.inner}`}>
          <h1>{result?.city?.ilAdi} Nöbetçi Eczaneleri</h1>
          <h2>{result?.city?.ilAdi} Nöbetçi Eczaneler Listesi</h2>
          <h3> {result?.city?.ilAdi}Nöbetçi Eczaneler</h3>
          <h4>{result?.city?.ilAdi} Günlük Nöbetçi Eczaneleri</h4>
          <h5>{result?.city?.ilAdi} Günlük Nöbetçi Eczaneler</h5>
          <h6>{result?.city?.ilAdi}</h6>
          <DropdownList
            title={"İlçe Seçiniz"}
            name={"drp_ilceler"}
            options={data}
            isMulti={false}
            closeMenuOnSelect={true}
            className={"basic-single"}
            noOptionsMessage={() => "İlçe Bulunamadı..."}
            selectMessage={() => "İlçe Seçiniz"}
            placeholder={"İlçe Seçiniz..."}
            onChange={(item) => setSelectedDistrict(item.value)}
          />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {selectedDistrict
          ? result?.pharmacies
              ?.filter((a) => a.ilceAdi == selectedDistrict)
              .map((pharmacy, index) => (
                <div key={index}>
                  <SinglePharmacy
                    handleMapClick={handleMapClick}
                    pharmacy={pharmacy}
                  />
                </div>
              ))
          : result?.pharmacies?.map((pharmacy, index) => (
              <div key={index}>
                <SinglePharmacy
                  pharmacy={pharmacy}
                  handleMapClick={handleMapClick}
                />
              </div>
            ))}
      </div>
      <ModalHarita
        ref={modalRef}
        pharmacy={selectedPharmacy}
        id="modalHarita"
      />
    </div>
  );
}
