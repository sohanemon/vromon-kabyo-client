import React from "react";
// Import Swiper React components
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";

interface Places {
  thumbnail: string;
}
interface Props {
  places: Places;
}
const Slider: React.FC<Props> = ({ places, setSelected, selected }) => {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={20} className=''>
        {places.map((el: any, i: number) => (
          <SwiperSlide
            onClick={() => setSelected(el)}
            className={`select-none rounded-2xl overflow-hidden shadow-2xl hover:ring-[3px] ${
              selected?.id === el?.id ? " ring" : ""
            } ring-yellow-300 m-2 cursor-pointer active:cursor-grabbing z-10`}
            key={i + 1}
          >
            <div>
              <img
                src={el.thumbnail}
                className='object-cover w-full h-72'
                alt=''
              />
            </div>
          </SwiperSlide>
        ))}
        <div className='flex items-center gap-2'>
          <SwiperChange />
          <SwiperChange next />
        </div>
      </Swiper>
    </>
  );
};
export default Slider;

const SwiperChange = ({ next }) => {
  const swiper = useSwiper();
  return (
    <button
      className='p-[10px] bg-white rounded-full text-2xl m-1 text-gray-700 grid place-content-center active:scale-95 transition-all'
      onClick={() => {
        next ? swiper.slideNext() : swiper.slidePrev();
      }}
    >
      {next ? <MdOutlineArrowForwardIos /> : <MdOutlineArrowBackIos />}
    </button>
  );
};
