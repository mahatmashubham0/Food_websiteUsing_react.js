import React from "react";
import {FaFacebook , FaInstagram , FaTwitter , FaYoutube} from 'react-icons/fa'


class ProfileUser extends React.Component {


    constructor(props){
        super(props)
        console.log("first Child COnstructor")
        this.state = {
            userInfo : {},
            toggle: true
        }
        
    }

    async componentDidMount(){
    //     const data = await fetch('https://api.github.com/users/mahatmashubham0')
    //     const json = await data.json()
    //     console.log(json)
    //     this.setState({
    //     userInfo: json
    // })
        console.log("first Child ComponentDidMount")
    }

    componentDidUpdate(){
        console.log("first child componentDidUpdate")
    }

    componentWillUnmount() {
        console.log('first child componentWillUnmount');
    }

  render() {
    console.log("first Child render")
    const {name , bio , avatar_url} = this.props.userData
    return (
      <div>
        <h1 className="text-3xl my-4 text-center font-bold">{name}</h1>
        <img src={avatar_url} alt="img"  className="rounded-full mx-auto"/>
        <h2 className="text-center my-4 font-semibold text-2xl">{bio}</h2>
        <div className="w-full bg-[#ff5c0d] flex items-center justify-center rounded-lg">
          <button className=" px-4 py-1 rounded-lg my-3 " onClick={()=>this.setState({toggle: false})}>Hire me</button>
        </div>
        <div className="flex justify-center items-center gap-4 cursor-pointer my-4">
          <div className="bg-[#ff5c0d] rounded-full p-4 ">
            <a href=""><FaFacebook className="text-xl font-semibold"/></a>
          </div>
          <div className="bg-[#ff5c0d] rounded-full p-4 ">
            <FaInstagram />
          </div>
          <div className="bg-[#ff5c0d] rounded-full p-4 ">
            <FaYoutube />
          </div>
          <div className="bg-[#ff5c0d] rounded-full p-4 ">
            <FaTwitter />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileUser;


// execution flow for this code
/**
 * child conctrustor
 * child render      
 * child componentDid mount
 * 
 * // if we called the api in this part so execution flow
 * 
 * child conctrustor
 * child render
 * 
 *     called api
 *     setState (here we assign the data)   // now rerender the render method
 * 
 * child render
 * child componenetDidupdate    // it is called when we use setState, it will execute after every render when setState is changed
 * 
 * // important point is when we unmount the page (unmount means go to from current page )
 * 
 * child componentWillUnMount
 * 
 * 
 *  
 * 
 */