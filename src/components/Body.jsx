import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProfileInfo from "./ProfileInfo"
import SearchPage from "./SearchPage";
import Header from "./Header";

const RouteBody = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <RouteBody/>,
      children : [
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
          },
          {
            path : "/search",
            element : <SearchPage/>
          }
      ]
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
