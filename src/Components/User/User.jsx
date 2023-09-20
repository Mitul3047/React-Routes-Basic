import { Link } from "react-router-dom";


const User = ({user}) => {
    const{name, email , phone, id} =user ;
    const userStyle ={
        border : '2px solid red',
        margin : '10px'
    }
    return (
        <div style={userStyle}>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
            <Link to = {`/user/${id}`}>Show Detailds</Link>
        </div>
    );
};

export default User;