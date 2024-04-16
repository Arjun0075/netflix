import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProfileInfo from "./ProfileInfo"


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path : "/info",
      element : <ProfileInfo/>
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
