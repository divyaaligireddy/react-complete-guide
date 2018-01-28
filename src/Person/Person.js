import React from 'react'
// import Radium from 'radium'
import './Person.css';

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width:'450px'
    //     }
    // }

    const rndm = Math.random();

    if(rndm > 0.7) {
        throw new Error( 'Something went wrong' );
    }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

// export default Radium(person);
export default person;