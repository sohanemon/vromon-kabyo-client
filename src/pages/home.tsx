import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Button from "../components/button";
import Slider from "../components/slider";
import usePlaces from "../hooks/usePlaces";

interface Props {}
interface PlaceType {
  name: string;
  id: string;
  description: string;
  thumbnail: string;
}
const Home: React.FC<Props> = () => {
  const places: Array<PlaceType> = usePlaces();
  const [selected, setSelected] = useState<PlaceType>();
  useEffect(() => {
    setSelected(places[0]);

    return () => {};
  }, [places]);
  return (
    <>
      <div className='grid place-content-center h-full'>
        <section className='grid grid-cols-5 gap-5'>
          <div className='col-span-2'>
            <h1 className=' text-6xl tracking-wider font-medium text-white font-bebas '>
              {selected?.name}
            </h1>
            <p className='text-gray-200 py-3 text-sm tracking-widest'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum
              deserunt maiores. Ab possimus rerum ad quae architecto aliquam
              deleniti esse totam debitis porro quibusdam quo maxime, ipsa dolor
              nisi.
            </p>
            <Button link='booking'>
              Booking <FiArrowRight />
            </Button>
          </div>
          <div className='col-span-3'>
            <Slider
              places={places}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
