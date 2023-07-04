
import React from 'react';

// class based component.
class UserClassComp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2
        };
        console.log("child class constructor");
    }

    componentDidMount() {
        console.log("child class componet did mount");
    }


    render(){

        const {name} = this.props;
        const {count, count2} = this.state;

        console.log("child class render");

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: Michigan </h3>
                <h4>Contact: santhosh501</h4>
                <h4>Count: {count}</h4>
                {
                 // Never update state variables directly.
                // if there are multiple states, when we do setState on single variable, react will update only one efficiently without touching anything else.
                }
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }} >CountIncrement</button>
                <h4>Fixed Count: {count2}</h4>
            </div>
        );
    }

}

export default UserClassComp;