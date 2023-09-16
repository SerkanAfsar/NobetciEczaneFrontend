"use client";
import SinglePharmacy from "@/Components/Pharmacy/SinglePharmacy";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./CityPharmacyContainer.module.css";
export default function CityPharmacyContainer({ result }) {
  console.log(result.pharmacies);
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  return (
    <div className="container">
      <div className={styles.gridContainer}>
        {result?.pharmacies?.map((pharmacy, index) => (
          <div key={index}>
            <SinglePharmacy pharmacy={pharmacy} />
          </div>
        ))}
      </div>
    </div>
  );
}
