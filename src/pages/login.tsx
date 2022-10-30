import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/button";
import { useState } from "react";
import { useUser } from "../contexts/user-provider";
interface Props {}

const Login: React.FC<Props> = () => {
  const [socialLogin, setSocialLogin] = useState(false);
  // const { googleSignIn } = useUser();
  return (
    // <AnimatePresence>
    <section className='grid place-content-center h-full'>
      <div className='bg-white p-10 border border-gray-300 rounded-lg shadow-xl tracking-widest select-none'>
        <form className='flex flex-col gap-8 w-80'>
          <h1 className='text-2xl font-bold'>Login</h1>
          {!socialLogin && (
            <div className='flex flex-col gap-8 '>
              <input
                className='outline-none border-b border-gray-400 placeholder:text-black'
                type='email'
                placeholder='Username or email'
              />
              <input
                className='outline-none border-b border-gray-400 placeholder:text-black'
                type='password'
                placeholder='Password'
              />
              <div className='flex text-sm tracking-normal items-center justify-between'>
                <div className='flex items-center gap-2 '>
                  <input
                    type='checkbox'
                    id='remember me'
                    className='accent-yellow-500'
                  />
                  <label htmlFor='remember me'>Remember me</label>
                </div>
                <p className='text-yellow-500'>Forgot password?</p>
              </div>
              <Button className='flex justify-center'>Login</Button>
            </div>
          )}
          <p className='text-sm font-medium tracking-normal'>
            Don’t have an account?{" "}
            <Link to={"/register"} className='text-yellow-500'>
              Create an account
            </Link>
          </p>
        </form>
        <div className='flex relative my-5'>
          <div className=' border-gray-400 w-full border-t' />
          <p
            onClick={() => setSocialLogin((p) => !p)}
            className='absolute text-sm left-1/2 text-center -translate-x-1/2 -top-[10px] bg-white px-2 text-gray-900 cursor-pointer'
          >
            {socialLogin ? "Login with email" : "Login with social account"}
          </p>
        </div>
        {socialLogin && (
          <div className='flex flex-col [&>button]:w-full [&>button]:border [&>button]:rounded-full [&>button]:my-2 [&>button]:flex [&>button]:items-center   [&>button]:justify-between  [&>button]:p-2 tracking-wider'>
            <button>
              <BsGoogle className='text-xl text-yellow-500' />
              <p className='text-center flex-auto font-semibold text-sm'>
                Continue with Google
              </p>
            </button>
            <button>
              <FaFacebook className='text-xl text-blue-500' />
              <p className='text-center flex-auto font-semibold text-sm'>
                {" "}
                Continue with Facebook
              </p>
            </button>
          </div>
        )}
      </div>
    </section>
    // </AnimatePresence>
  );
};

export default Login;
