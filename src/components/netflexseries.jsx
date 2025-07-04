import seriesData from "../api/seriesData.json";
import { SeriesCard } from "../components/list.jsx"; // Ensure correct component name



const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((data) =>(
        <SeriesCard key={data.id} data={data} />))};
    </ul>
  );
};

export default NetflixSeries;

