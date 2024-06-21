import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./pages/Body";
import Footer from "./Components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./index.css";
import Error from "./Components/Error";
// import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import userContext from './utils/userContext'
import { Provider } from "react-redux";
import store from './utils/store'

const Cart = lazy(()=> import("./Components/Cart"))
// upon on demand loadin ==> upon render ==> suspend loading


const AppLayout = () => {
  const [user , setUser] = useState(
    {
       name: "Shubham Mahatma",
      email : "shubham@gmail.com"
    }
  )
  return (
    <div>
       <Provider store={store}>
          <userContext.Provider value={{user:user , setUser:setUser}}>
              <Header />
                <Outlet />
              <Footer />
          </userContext.Provider>
       </Provider>
    </div>
  );
};

export const appRouter = createBrowserRouter([  //  children always execute inside the outlet jaise humare pass AppLayout hai and it has 
  {   // children so we give Outlet in above component similir we take children in about so we should give outlet int about compoenet 
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",     // we dont need to give /profile beacuse it assume / symbol that come from root 
            element: <Profile />  // and if we give /profile so it convert into // localhost://1234/profile
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1 className="text-center font-bold">Data loading</h1>}>
          {/*means we create the new file so it take time to load for that stiation we load some data and simmer using suspense  */}
          <Cart />
        </Suspense>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
