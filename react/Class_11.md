
1. what is the props driling?
--> when we share the data from parent compoent to child component and child component share data to it's child compoenet so thats sitiaution is known as a props drilling?

2. for sharing the data on the entire project we use the4 context

3.for creating context follow some point
# first take createContext funcion and this function take data which is used entire project

const { createContext } = require("react");

const userContext = createContext({
    name: "ankit",
    email: "ankit@gmail.com"
})

export default userContext;
# and jis component me hume use krna hai data so we have to use useContext and specify the conText which we want to use in the project

 const userInfo = useContext(userContext);
 console.log(userInfo.name)

# for updating the data and give to the new data we use the context.provider

const AppLayout = () => {
  const [user , setUser] = useState(
    {
       name: "Shubham Mahatma",
      email : "shubham@gmail.com"
    }
  )
  return (
    <div>
       <userContext.Provider value={{ user:user , setUser:setUser }}>
           <Header />
             <Outlet />
           <Footer />
       </userContext.Provider>
    </div>
  );
};

# we can us it another compoent and also we got new data and we can update it also

const handleSubmit = (e) => {
    e.preventDefault();
    setUser({name: formData.name})   // here we change the data
    console.log(formData)
  }

  const {user , setUser} = useContext(UserContext); 
  console.log(user)