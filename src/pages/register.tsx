import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { useUser } from "../contexts/user-provider";
interface Props {}

const Register: React.FC<Props> = () => {
  const { emailSignUp } = useUser();
  const { register, handleSubmit } = useForm();
  const onSubmit: (data: any) => any = (data) => {
    console.log(data);
    emailSignUp(data);
  };

  return (
    // <AnimatePresence>
    <section className='grid place-content-center h-full'>
      <div className='bg-white p-10 border border-gray-300 rounded-lg shadow-xl tracking-widest select-none'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-8 w-80'
        >
          <h1 className='text-2xl font-bold'>Register</h1>

          <div className='flex flex-col gap-8 '>
            <input
              {...register("displayDame")}
              className='outline-none border-b border-gray-400 placeholder:text-black'
              type='text'
              placeholder='Name'
            />
            <input
              {...register("email")}
              className='outline-none border-b border-gray-400 placeholder:text-black'
              type='email'
              placeholder='Email'
            />
            <input
              {...register("photoURL")}
              className='outline-none border-b border-gray-400 placeholder:text-black'
              type='text'
              placeholder='Photo URL'
            />
            <input
              {...register("password")}
              className='outline-none border-b border-gray-400 placeholder:text-black'
              type='password'
              placeholder='Password'
            />

            <Button className='flex justify-center'>Register</Button>
          </div>

          <p className='text-sm font-medium tracking-normal'>
            Already have an account?{" "}
            <Link to={"/login"} className='text-yellow-500'>
              Login now
            </Link>
          </p>
        </form>
      </div>
    </section>
    // </AnimatePresence>
  );
};

export default Register;
