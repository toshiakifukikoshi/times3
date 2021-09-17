import React from 'react';

const ColofulMessage = (props) => {
  console.log(props);
  
  const ccc = {
    color:props.color,
    border:'3px solid #ddd',
    fontSize: props.fontSize
  }

  return(
    <p style={ccc}>{props.message}</p>
    <p style={ccc}>{props.message}</p>
    )

 
}

export default ColofulMessage;