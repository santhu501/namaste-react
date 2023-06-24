import User from './User';
import UserClassComp from './UserClassComp';

const About = () => {

    return (
        <div>
            <h1>About</h1>
            <h2>This is about us page </h2>
            <User name="Santhosh"/>
            <UserClassComp name="Santhosh"/>
        </div>
    );
};

export default About;