import { useEffect, useState } from "react";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/places`)
      .then((res) => res.json())
      .then((data) => setPlaces(data));

    return () => {};
  }, []);
  return places;
};

export default usePlaces;
