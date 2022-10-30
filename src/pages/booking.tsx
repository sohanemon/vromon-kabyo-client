import { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import { BsCalendar2Date } from "react-icons/bs";
import Button from "../components/button";
import { usePlaceContext } from "../contexts/place-provider";

const emon = "name";
interface Props {}
const Booking: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm();
  const { selected } = usePlaceContext();
  const [from, onChangeFrom] = useState(new Date());
  const [to, onChangeTo] = useState(new Date());

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md bg-white rounded p-6 space-y-3'
    >
      <div className='flex flex-col gap-2'>
        <label className='font-medium text-gray-500 ' htmlFor='origin'>
          Origin
        </label>
        <input
          required
          type={"text"}
          {...register("origin")}
          className='bg-gray-100 rounded p-4 font-semibold outline-yellow-400 outline-1 '
          placeholder='Your location'
          id='origin'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label className='font-medium text-gray-500' htmlFor='destination'>
          Destination
        </label>
        <input
          type={"text"}
          {...register("destination")}
          className='bg-gray-100 rounded p-4 font-semibold outline-yellow-400 outline-1 '
          value={selected?.name}
          id='destination'
        />
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-gray-500' htmlFor='from'>
            From
          </label>
          <DatePicker
            calendarIcon={<BsCalendar2Date className='text-xl' />}
            clearIcon={null}
            className='bg-gray-100 rounded p-4 w-full font-semibold outline-yellow-400 outline-1 '
            onChange={onChangeFrom}
            value={from}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-medium text-gray-500' htmlFor='to'>
            To
          </label>
          <DatePicker
            calendarIcon={<BsCalendar2Date className='text-xl' />}
            clearIcon={null}
            className='bg-gray-100 rounded p-4 w-full font-semibold outline-yellow-400 outline-1 '
            onChange={onChangeTo}
            value={to}
          />
        </div>
      </div>
      <Button className='w-full flex justify-center mt-6 py-4 font-semibold'>
        Start Booking
      </Button>{" "}
    </form>
  );
};

export default Booking;
