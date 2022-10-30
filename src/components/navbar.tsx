import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Button from "./button";
import { useUser } from "../contexts/user-provider";
interface Props {}

const Navbar: React.FC<Props> = () => {
  const { user, logOut } = useUser();
  return (
    <section className='flex absolute top-0 left-0 z-10 items-center justify-between w-full  mx-auto p-4'>
      <Link to='/'>
        <h1 className='text-white font-semibold font-cursive text-2xl'>
          VromonKabyo
        </h1>
      </Link>
      <div className='lg:flex hidden items-center border px-4 py-2 text-white space-x-3 basis-80 border-gray-400 rounded-md '>
        <FaSearch />
        <input
          placeholder='Search your destination...'
          type='text'
          className='bg-transparent border-none outline-none'
        />
      </div>
      <ul className='list-none hidden lg:flex items-center [&>li]:ml-5'>
        {navItems.map((el) => (
          <li className='capitalize text-white' key={el}>
            <Link to={"/" + el}>{el}</Link>
          </li>
        ))}
      </ul>
      {!user?.uid ? (
        <Button link='/login'>Login</Button>
      ) : (
        <>
          <img src={user?.photoURL} className='w-10 h-10 rounded-full' alt='' />
          <span onClick={logOut}>
            <Button>Sign Out</Button>
          </span>
        </>
      )}
    </section>
  );
};

export default Navbar;

const navItems = ["news", "destination", "blog", "content"];
