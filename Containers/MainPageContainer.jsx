"use client";
import { useState, useEffect } from "react";
import City from "@/Components/City/City";
import InputText from "@/Components/UI/InputText";
import Notify from "@/Components/Notify/Notify";

export default function MainPageContainer({ cityList }) {
  const [searchText, setSearchText] = useState(null);
  return (
    <div className="container">
      <div className="row mb-3">
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
