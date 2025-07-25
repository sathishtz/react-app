import PropTypes from 'prop-types'


function User(props){
    // if (props.login){
    //     return <h2>Welcome {props.name}</h2>
    // }
    // else{
    //     return <h2>login to continue</h2>
    // }

    const Welcome=<h2>Welcome {props.name}</h2>

    const Not_Welcom=<h2>login to continue</h2>

    return(props.login ? Welcome:Not_Welcom);
}

User.propTypes={
    name:PropTypes.string.isRequired,
    login:PropTypes.bool.isRequired,
}

export default User