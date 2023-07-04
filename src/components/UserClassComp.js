
import React from 'react';

// class based component.
class UserClassComp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userDetails:{
                name: "testUser",
                location: "hyd"
            }
        };
       // console.log("child class constructor");
    }

    async componentDidMount() {
      //  console.log("child class componet did mount");

      const data = await fetch("https://api.github.com/users/santhu501");
      const json = await data.json();
      console.log(json);

      this.setState({
        userDetails:json
      })

    }

    componentDidUpdate(){
        //console.log("component did update");
    }


    componentWillUnmount(){
        // console.log("component will unmount");
    }

    render(){

        const {name, location} = this.state.userDetails;        

       // console.log("child class render");
       //debugger;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location} </h3>
                <h4>Contact: santhosh501</h4>                
            </div>
        );
    }

}

export default UserClassComp;


/** 
------------- MOUNTING ---------------
constructor with default data
render with default data
html with default data
Component did mount
API call.
this.setState -> state variable is updated.

-------------- UPDATE -----------------

render with api data
html with new data.
component did update.

--------- Final -------------------
component will unmount

*/