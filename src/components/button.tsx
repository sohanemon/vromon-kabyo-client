import { Link } from "react-router-dom";

interface Props {
  children: any;
  className?: string;
  link?: string;
}

const Button: React.FC<Props> = ({ children, className, link }) => {
  if (link)
    return (
      <>
        <Link to={`${link}`}>
          <button
            className={`bg-yellow-500 text-black py-2 px-4 rounded font-medium flex gap-2 items-center ${className}`}
          >
            {children}
          </button>
        </Link>
      </>
    );
  else
    return (
      <button
        className={`bg-yellow-500 text-black py-2 px-4 rounded font-medium flex gap-2 items-center ${className}`}
      >
        {children}
      </button>
    );
};

export default Button;
