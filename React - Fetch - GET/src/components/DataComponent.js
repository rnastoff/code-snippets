import { useEffect, useState } from "react";
import Film from "./Film";

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      let responseData = await response.json();
      responseData = responseData.results;
      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          title: responseData[key].title,
          release_date: responseData[key].release_date,
        });
      }

      setData(loadedData);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  });

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const filmList = data.map((film) => (
    <Film title={film.title} release_date={film.release_date} />
  ));

  return <div>{filmList}</div>;
};

export default DataComponent;
