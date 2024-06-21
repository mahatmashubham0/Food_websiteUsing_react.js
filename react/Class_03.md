what is jsx?
--> it is extention of javscript syntax that allow us to write the html in react. jsx create the create react element

THERE ARE DIFFERENT WAY OF WRITING THE JSX CODE 

1.  In jsx we write className instead of class 

import React from "react"; 
import ReactDOM from "react-dom/client"; 
const jsxHeading = <h1 className="heading">Namaste React Using JSX</h1> 
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(jsxHeading) 

2. If we want to give attribute in jsx then we should use camelCase 

import React from "react"; 
import ReactDOM from "react-dom/client"; 
const jsxHeading = <h1 className="heading" firstName="Gautam">Namaste React Using JSX</h1> 
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(jsxHeading) 


We should use camelCase for custom attributes. 
 

3. How to write single/one line of jsx 
Just we will write jsx in one line 

import React from "react"; 
import ReactDOM from "react-dom/client"; 
const jsxHeading = <h1 className="heading">Namaste React Using JSX</h1> 
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(jsxHeading) 


4. We can keep the single line of jsx in parenthesis too.  But is is not mendetory. 

import React from "react"; 
import ReactDOM from "react-dom/client"; 
const jsxHeading = (<h1 className="heading">Namaste React Using JSX</h1>) 
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(jsxHeading) 


5. How to write more than one line of jsx 
We have to keep the jsx code in parenthesis or bracket (). It is mendetory to keep the code in parenthesis. 

import React from "react"; 
import ReactDOM from "react-dom/client"; 
const jsxHeading = (<h1 className="heading"> 
Namaste React Using JSX 
</h1> 
) 
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(jsxHeading) 
 
We keep the jsx code in parenthesis for babel. Because babel will understand from where the jsx code is starting and where the jsx code is ending. 

6. In jsx we can write nested tag or siblings tag 

import React from "react"; 
import ReactDOM from "react-dom/client"; 
const jsxHeading = ( 

    <div> 

         <h1 className="heading" firstName="Gautam">Namaste React Using JSX</h1> 

    </div> 

); 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(jsxHeading); 

*************************************Important************************************
const Heading = (
<h1>
    <div>dada</div>
    <p>ok</p>
</h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Heading)

here above code we didnot write <Heading /> this way beacuse we did'nt create the component we create the jsx code if we create the component
then we write the <Heading /> in this way.

NOTE:  we can use the the react element and react component to each other.

HOW TO USE THE ONE COMPONENT TO THE ANOTHER COMPONENT

1. FIRST WAY

<Title />

2.SECOND WAY

<Title><Title/>

3.THIRD WAY

{Title()}

