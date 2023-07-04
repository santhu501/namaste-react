
import React from 'react';

// class based component.
class UserClassComp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2
        };
    }
    

    render(){

        const {name} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: Michigan </h3>
                <h4>Contact: santhosh501</h4>
                <h4>Count: {count}</h4>
                <h4>Count2: {count2}</h4>
            </div>
        );
    }

}

export default UserClassComp;