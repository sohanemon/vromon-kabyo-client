import React, { FC } from "react";
// Import Swiper React components
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { PlaceType } from "../pages/home";
import { usePlaceContext } from "../contexts/place-provider";

interface Props {}
const Slider: React.FC<Props> = () => {
  const { places, setSelected, selected } = usePlaceContext();
  return (
    <>
      <Swiper
        initialSlide={1}
        spaceBetween={30}
        centeredSlides={true}
        className='w-full md:w-[60vw] m-0'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
        }}
      >
        {places?.map((el: any, i: number) => (
          <SwiperSlide
            onClick={() => setSelected?.(el)}
            className={`select-none rounded-2xl overflow-hidden shadow-2xl hover:ring-[3px] max-w-[250px] md:w-full md:max-w-xs min-h-[20rem] ${
              selected?.id === el?.id ? " ring" : ""
            } ring-yellow-300 m-2 cursor-pointer active:cursor-grabbing z-10`}
            key={i + 1}
          >
            <img
              src={el.thumbnail}
              className='object-cover w-full h-80'
              alt=''
            />
          </SwiperSlide>
        ))}
        <div className='flex items-center gap-2'>
          <SwiperChange next={false} />
          <SwiperChange next />
        </div>
      </Swiper>
    </>
  );
};
export default Slider;

const SwiperChange: FC<{ next: boolean }> = ({ next }) => {
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
