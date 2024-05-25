// function Student(props) {
function Student({ name, email }) {
    return (
        <div style={{ backgroundColor: 'skyblue' }}>
            {/* <h3>Name: {props.name}</h3>
            <h3>Email: {props.email}</h3> */}
            <h3>Hello: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}
export default Student