interface Props {}

import { createContext, useContext, useState, useEffect } from "react";
import usePlaces from "../hooks/usePlaces";
import { PlaceType } from "../pages/home";
const PlaceContext = createContext<ContextType>({});
interface ContextType {
  places?: Array<PlaceType>;
  setSelected?: Function;
  selected?: PlaceType;
}
export const usePlaceContext = () => useContext(PlaceContext);
interface Props {
  children: React.ReactElement;
}
const PlaceProvider: React.FC<Props> = ({ children }) => {
  const places: Array<PlaceType> = usePlaces();
  const [selected, setSelected] = useState<PlaceType>();
  useEffect(() => {
    setSelected(places[0]);

    return () => {};
  }, [places]);
  return (
    <PlaceContext.Provider value={{ places, setSelected, selected }}>
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceProvider;
