1. why we use the useContext?
--> for removing the props driling

2. for handling the large ammount of data and data management we should use the redux toolkit and for small project we can use context

3. what is different bwt redux and redux toolkig?
--> 

4. redux-toolkit is store in which we have a store and store have many slice
how redux work

how we can update data on store
# if we click on any button for add to card so it dispatch action that call the reducer function that function update the data on the slice of the redux store.

how we can read data from store
# we have selector that is hooks using which we can access data from store.

cart-button ---> dispatch(action) ---> reducer ---> update store --> selector(read data from store) ---> UI

Note: cart suscriber to the store means cart compoent is update when store is update beacuse cart is linked with the store.

*******************************************************************************************************************************

how to use redux-toolkit

# first use ConfigureStore function that create the store and ConfigureStore function take the data which is slice of the store.

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({}) // we create the store right now

# now we create the slice using the createSclice function


import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({ // create the slice
    name: 'cart',  // name of slice
    initialState: {
        item: ["Apple"]  // intiale data of sice
    },
    reducers: {   // reducer function that modify the slice data
        addItem : (state , action) => {
            state.item.push(action.payload)
        },
        removeItem : (state , action) => {
            state.item.pop()
        },
        clearItem : (state ) => {
            state.item = []
        }
    }
})

export const {addItem , removeItem , clearItem} = cartSlice.actions;  // export the all method 

export default cartSlice.reducer;   // store all function and combine into reducer object


# for using the store to the app 

import { Provider } from "react-redux";
import store from './utils/store'

        <Provider store={store}>
          <userContext.Provider value={{user:user , setUser:setUser}}>
              <Header />
                <Outlet />
              <Footer />
          </userContext.Provider>
       </Provider>

# how can we access and update data

  <!-- access data -->

  const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.item)

  <!-- update data -->


const dispatch = useDispatch()
  const handleClick = () => {
    console.log("data")
    dispatch(addItem("Banana")); // dispatch the action this action is known as the reducers
  }


# when our store change so it re render the compoenent so we have to specify the slice and data inside the slice so react update the particular compoent where data use 
