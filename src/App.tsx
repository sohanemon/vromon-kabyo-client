import { RouterProvider } from "react-router";
import PlaceProvider from "./contexts/place-provider";
import UserProvider from "./contexts/user-provider";
import { router } from "./routes/router";

function App() {
  return (
    <div className='font-poppins overflow-hidden '>
      <UserProvider>
        <PlaceProvider>
          <RouterProvider router={router} />
        </PlaceProvider>
      </UserProvider>
    </div>
  );
}

export default App;
