import React from "react";
import ProfileUser from "./ProfileUserClass";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       userInfo: {}
    };

    console.log("parent Constructor")

  }

  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/mahatmashubham0')
    const json = await data.json()
    console.log(json)
    this.setState({
      userInfo: json
    })
    console.log("parent compoenetdid mount")
  }

  render() {
    console.log("render")
    const {userInfo , name} = this.state;
    return (
      <>
        {
          userInfo ? <>
             <div>
                <div>
                  <h1 className="font-semibold">About Us {this.props.name}</h1>
                   <ProfileUser userData = {userInfo} />
                   {/* <ProfileUser userData = {userInfo} /> second child exit */}  
                </div>
             </div>
          </> : null
        }
      </>
    );
  }
}

export default Profile;

// execution flow
/**
 * constructor   this is render phase
 * render        this is render phase
 * first child constructor            this is render phase
 * first child render                   this is render phase
 * 
 * // if second child exit so it will execute first then  first child componentDidMount called and after that second child componentdidMount called
 * // beacuse of react first execute the render phase then commit phase (this linw follow when we have more than one component)
 * 
 * first child componentDIdMount
 * parent ComponentDidMoount
 * 
 * but when we called any api so execution follow
 * 
 * constructor   this is render phase
 * render        this is render phase
 * first child constructor            this is render phase
 * first child render                   this is render phase
 * 
 * // now render phase come but first child componentDidMount has async so it wait for execution wheanwhile parent compoenetDidmount called then
 * // child componentDidMount execute
 * 
 * parent ComponentDidmount
 * first child componentDidmount
 * 
 */

