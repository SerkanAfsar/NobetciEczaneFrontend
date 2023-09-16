import styles from "./CityLoading.module.css";
export default function CityLoading() {
  return (
    <div className="card mb-5" style={{ minHeight: "100px" }}>
      <div className="card-body">
        <h5
          className={`card-title ${styles.skeleton}`}
          style={{ height: "20px" }}
        ></h5>
        <p
          style={{ height: "40px" }}
          className={`card-text ${styles.skeleton}`}
        ></p>
      </div>
    </div>
  );
}
