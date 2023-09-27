import User from './User';
import UserClassComp from './UserClassComp';
import React from 'react';
import UserContext from '../utils/UserContext';


class About extends React.Component{

    constructor(props){
        super(props);
       // console.log("Parent class constructor");
    }

    componentDidMount(){
       // console.log("Parent class component did mount");    
    }

    render(){
     //   console.log("Parent class render");
        return (
            <div>
                <h1>About</h1>
                <div>                    
                    <UserContext.Consumer>                    
                    {({loggedInUser}) => <h1>LoggedIn User: {loggedInUser}</h1>}   
                    </UserContext.Consumer>
                </div>
                <h2>This is about us page </h2>
                {/*<User name="Santhosh"/>*/}
                <UserClassComp name="Santhosh"/>
            </div>
        );
    }

}

export default About;