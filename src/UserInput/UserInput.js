import React from 'react' ;

const userInput = (props) => {
    
    //create some inline css for only this component
    const inputStyle = {
        border: '2px solid green'
    }
    return <input type="text" onChange={props.changed}
    value={props.currentName} 
    style={inputStyle}/>;
};

export default userInput;
