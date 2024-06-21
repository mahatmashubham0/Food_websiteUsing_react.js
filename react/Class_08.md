React born with the class base component.

1. what is classbase component?
--> classbase component is totaly base on class when we create the class so in react we have to tell to the react using 
extend React.component and then just like function component return the jsx similiar class base component return the jsx using render method
this method return jsx using return keyword.
syntax: import React from 'react'

class Profile extends React.Component {
      render() {
        return (
            <h1>Class Base Component</h1>
        )
      }
}

2. we can access pros value using this keyword

<Profile name={"Kriti}>

<h1>{this.props.name}</h1>

3. how we can create the state variable in react?
--> we can create the state vaiable in react using the construtor beacuse when we create the class and when class is initalize the class cinstructo is always execute 

conctructor(props) {
    super(props);
    this.state = {
        count: 0,
        name: "Kriti"
    }
}

 const {cnt , count} = this.state;
    return (
      <h1>
        Class Base Component
        <h2>== {count}</h2>
      </h1>
    )

4. how can we update the state variable?
 <button onClick={()=> this.setState({toggle: (prev)=> !prev
            
        })}>click</button>

NOTE: the best way for calling the api is after render so that we can update UI after render UI.

5. story about class base component and life cycle?
--> once constructor is called then the render function will be executed and complete the render method and then if we use the ComponentDidMount so it will execute after render

there is life cycle exit in which two imporatant phase exit
1. render phase (it is fast phase)
2. commit phase in this phase dcomponenetDidMount exit

first constructor called and then render method execute then componenetDidMount called and if we use the more than one class component so react first complete the render phase then execute the commit phase (react complete the render phase then execute the commit phase beacuse suppose one commit phase called the api so anther render phase wait {important part first render things then update UI})

6. React is single page application in which only the component change.
  in function component
  useEffect(()=>{
   setInterval(()=>{
      console.log("React OP")
   },1000)
  },[])

  so we go to from HOME TO ABOUT section so only change the component 
  and this interval execute without breaking so we can say now react us single page application

7. we have unMounting in function component which used in the useEffect
 in function component

  useEffect(()=>{
   setInterval(()=>{
      console.log("React OP")
   },1000)
   console.log("useEffect)

   return = () => {
    console.log("Return UseEffect)
   }
  },[])

  console.log("render")

  execution flow --> 
  render
  useEffect
  // when we go from home to about ya contact compoent so return function execute
  return useEffect