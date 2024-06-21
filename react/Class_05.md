1. what is concept of the importing and exporting?
--> there are two type of import and export
     a. name import
     b. default import 
     *****************************************************
     a. name export
     b. default export 

2. every compoenet in react maintain the state and all variable store in state. we can create the state by using the useState Hooks.

3. what is hooks?
--> hooks is just a normal function in react and it come from react nit is used for creating the state of component. and this function    return the array [] and [text , setText] first value of array is name of the state and we can change the state data by using second value of state.

4. why we use State varible jb humare pass local variable hain?
--> main reason fo state varible is when we change any data in state variavle so virtual dom is continue watching in state varibale and jaise hi state varible is changed so reconcialization process change and manipulate the data in virtual dom . and this is not done by the local varible

5. we add the toggle behiviour in app?
--> onClick={()=>{
                if(toggle === false) {setToggle(true)}
                else {setToggle(false)}
            }}>Click</button>

    another way is 
    onClick={()=>{
                setToggle((prev) => !prev)   // it change the inner value that is given by prev data
            }}

6. we add the filter beheviour in app?
--> for adding the filter feature first need the basic text using which we filter data
     const filterData = (searchText , restaurant) => {
        // for fitlering we need the search text and restaurantdata
        const filterData = restaurant.filter((restua) => restua.data.name.includes(searchText))
        return filterData;
    }

    onClick={()=>{
                    // need the filter the data
                    const data = filterData(searchText , restaurant)
                    // update the state
                    setRestaurant(data) // when we got the filter data rerender the current component and show filter restuarant
                }}