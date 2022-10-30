import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../components/button";
import Slider from "../components/slider";
import { usePlaceContext } from "../contexts/place-provider";
import usePlaces from "../hooks/usePlaces";

interface Props {}
export interface PlaceType {
  name: string;
  id: string;
  description: string;
  thumbnail: string;
}
const Home: React.FC<Props> = () => {
  const { places, setSelected, selected } = usePlaceContext();
  const { pathname } = useLocation();

  return (
    <>
      <div className='grid items-center  h-full'>
        <section
          className={`grid grid-cols-5 gap-10 items-center  ${
            pathname !== "/" && "justify-items-center"
          }`}
        >
          <div className='col-span-full md:col-span-2'>
            <h1 className='text-3xl md:text-6xl mt-10 md:mt-0 tracking-wider font-medium text-white font-bebas '>
              {selected?.name}
            </h1>
            <p className='hidden md:block text-gray-200 py-3 text-sm tracking-widest'>
              {selected?.description}
            </p>
            {pathname === "/" && (
              <Button link={`/booking/${selected?.id}`}>
                Booking <FiArrowRight />
              </Button>
            )}
          </div>
          <div className='col-span-full md:col-span-3'>
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
