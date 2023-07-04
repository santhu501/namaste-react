import {useState} from 'react';

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(2);

    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Michigan </h3>
            <h4>Contact: santhosh501</h4>
            <h4>Count: {count}</h4>
            <h4>Fixed Count: {count2}</h4>
        </div>
    );
}

export default User;