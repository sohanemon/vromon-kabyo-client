import { Outlet } from "react-router";
import bgVideo from "../assets/bgVideo.mp4";
import Navbar from "../components/navbar";
interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <main className='relative w-full h-screen '>
      <video
        className='absolute w-full h-full aspect-video object-cover brightness-[0.3]'
        src={bgVideo}
        autoPlay
        loop
        muted
      />
      <div className='absolute top-0  h-full w-3/4 left-1/2 -translate-x-1/2'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
