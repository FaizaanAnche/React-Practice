import PropTypes from 'prop-types'

const Student = (props) => {

    return (
        <div className="box">
            <h2>Props</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    )

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent:false
}

export default Student;