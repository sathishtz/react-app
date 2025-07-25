import PropTypes from 'prop-types'

function Stu(props){
    return(
        <div className="studiv">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
        </div>
    );
}

Stu.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
}

export default  Stu