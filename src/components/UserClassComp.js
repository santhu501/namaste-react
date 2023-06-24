
import React from 'react';

// class based component.
class UserClassComp extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Michigan </h3>
                <h4>Contact: santhosh501</h4>
            </div>
        );
    }

}

export default UserClassComp;