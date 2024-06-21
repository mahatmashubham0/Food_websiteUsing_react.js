NOTE: whenver any state se change or current compoenent rerender again.

1. what is micro-services achitechture?
--> when we create different project for main web application is known as micro services.

2. what is monolith?
--> monolith means when every feature contain only project such as notification , ui , sms ets contain only one project

3. we should call the fecth function for the particular place if we use the call the fetch function 
   const Body = () => {

    const foodData = {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/onrthurhbk4ztdnbbpwh",
        name: "Manohar Dairy",
        cuisines: ["Chaat", " Snacks"," Sweets", " Desserts",],
        avgRating: 4.6,
        areaName: "10 no market",
        costForTwo: "₹350 for two",
    }
        FETCH('API')
        //  IF WE CALL THE FETCH FUNCTION HERE SO WHENVER STATE IS CHANGE FETCH FUNCTION CALLLED
    }

  return (....)

  4. the best way for calling the api?
  --> the best way is first load ui and render something then call the api and then update the ui this is done by the useEffect
     const Body = () => {


    console.log("render");  // FIRST RENDER THIS AND THEN RENDER THE USEFFECT

    useEffect(()=>{
      console.log("useEffect")  // AFTER THE RENDER AND THEN USEFFECT RENDER
    })

    const filterData = (searchText , restaurant) => {
        // for fitlering we need the search text and restaurantdata
        const filterData = restaurant.filter((restua) => restua.data.name.includes(searchText))
        return filterData;
    }

  return (...)}

  first render the current component and after render component and then call the useEffect function. 
  
  if any state is changed so this two always executed
  console.log("render");  // FIRST RENDER THIS AND THEN RENDER THE USEFFECT

    useEffect(()=>{
      console.log("useEffect")  // AFTER THE RENDER AND THEN USEFFECT RENDER
    })

    *********************************************************************
  
    console.log("render");  // FIRST RENDER THIS AND THEN RENDER THE USEFFECT

    useEffect(()=>{
      console.log("useEffect")  // AFTER THE RENDER AND THEN USEFFECT RENDER
    } , [])  this is known as a dependecy array 

    if we give dependy array so it only execute the once 
    and we pass any data on dependecy array so when data is change so render the component and  useEffect also execute.

    **********************************************************************

    
