import City from "@/Components/City/City";

export default function MainPageContainer({ cityList }) {
  return (
    <div className="container">
      <div className="row">
        {cityList.map((city, index) => (
          <City key={index} city={city} />
        ))}
      </div>
    </div>
  );
}
