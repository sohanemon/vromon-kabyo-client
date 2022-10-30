import { useUser } from "../contexts/user-provider";

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useUser();
  if (user?.uid) return children;
  else return <p className='text-5xl'>Wait bruh</p>;
};

export default PrivateRoute;
