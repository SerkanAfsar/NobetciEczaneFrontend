"use client";
import { useState } from "react";
import City from "@/Components/City/City";
import InputText from "@/Components/UI/InputText";
import styles from "./MainPageContainer.module.css";

export default function MainPageContainer({ cityList }) {
  const [searchText, setSearchText] = useState(null);
  return (
    <div className="container">
      <div className={`row mb-3 ${styles.inner}`}>
        <h1>Türkiye İl İlçe Nöbetçi Eczaneleri</h1>
        <h2>Nöbetçi Eczaneler Listesi</h2>
        <h3>Nöbetçi Eczaneler</h3>
        <h4>İstanbul Nöbetçi Eczaneleri</h4>
        <h5>Ankara Nöbetçi Eczaneleri</h5>
        <h6>İzmir Nöbetçi Eczaneleri</h6>
        <div className="col-12">
          <InputText
            title={"Aramak İstediğiniz Şehiri Yazınız"}
            name={"txt_city"}
            placeholder={"Aramak İstediğiniz Şehiri Yazınız"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        {searchText
          ? cityList
              .filter(
                (a) =>
                  a.ilAdi
                    .toLocaleLowerCase()
                    .indexOf(searchText.toLocaleLowerCase()) > -1
              )
              .map((city, index) => (
                <City key={index} hasSearch={true} city={city} />
              ))
          : cityList.map((city, index) => <City key={index} city={city} />)}
      </div>
    </div>
  );
}
