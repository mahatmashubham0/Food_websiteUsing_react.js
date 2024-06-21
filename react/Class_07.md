NOTE:
--> never create the componenet inside the componenet beacuse when the render the component so create new compoenewnt according the rendering.
--> never create the state variable inside any if else block

1. what is spa?
--> spa full form single page application 

2. how many routing exit?
--> there are two type of routing first is client side sourting second is server side routing.
we can add client side routing in which we dont need to call the nerwork and access the data from backend beacuse our data available in frontend.

3. how we can create the react routing?
--> first use createBrowserRouter compoent to create the app routing for application and create the 
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },

])

for using this appRouter in application so we have to use appRouter in render


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

root.render(<RouterProvider router={appRouter} />);

using which we can add client side routing

4. what is Link tag?
--> Link is used for removing the referece the whole html code if we use Link tag so it remove the referece concept.

5. for adding the routing in which change only content?
--> const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

where change only the outlet things and remain all component.

6. for adding the dynamic routing
-->  {
    path: "/restaurant/:resId",
    element: <About />
   },

   we can read params using useParams
   const params = useParams()
   we got the object in which resId has property thas has value which pass in the url
    const {resId} = params 
    we extract the resid fro  params object
    console.log(id)

    we can also write in this way
    const {resId} = useParams()

7. 
