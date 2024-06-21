import React from 'react'
import '../index.css'

const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };

 
  export const MenuShimmer = () => {
    return (
      <div className="restaurant-menu">
        <div className="restaurant-summary stroke-color mt-28 mx-auto gap-4 flex justify-center items-center py-8 animate">
          <img className="shimmer-img stroke animate w-[50%] bg-gray-300" />
          <div className="restaurant-summary-details w-[40%] bg-gray-300 py-14 h-full ">
            <h2 className="shimmer-w40 bg-gray-300 w-[40%] stroke animate"></h2>
            <p className="shimmer-w20 w-[20%] stroke animate"></p>
             <div className="shimmer-w60 w-[60%] stroke animate">
            </div>
          </div>
        </div>
  
        <div className="restaurant-menu-content ">
          <div className="menu-items-container ">
            <div className="menu-title-wrap  ">
              <h3 className="shimmer-w40 stroke animate"></h3>
              <p className="shimmer-w20 stroke animate"></p>
            </div>
            <div className="menu-items-list flex items-center justify-center flex-col">
              { Array(150).fill("").map( (element, index)  => 
              <div className="shimmer-menu-card" key={index}>
                <div className="shimmer-item-details">
                  <h3 className="shimmer-w40  stroke animate"></h3>
                  <p className="shimmer-w20  stroke animate"> </p>
                  <p className="shimmer-w60  stroke animate"></p>
                </div>
                <div className="shimmer-img-wrapper">
                  <img className="shimmer-img stroke animate" /> 
                  <div className="shimmer-btn stroke animate"> </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }


const Simmer = () => {
    let array = [14,2,5,25,4,7,2,9,3,74,7]
  return (
    <div className='flex w-full justify-center flex-wrap gap-10'>
        
       {
         array.map((item,index)=>(
        
            <CardShimmer key={index}/>
            // <div className='border w-[200px] h-[400px] bg-gray-300 '></div>

              
         ))
       }
       
    </div>
  )
}

export default Simmer