import React from 'react'

// doing memo is until and unless buttonName changes, the file will not re-render
const ChildComponent = React.memo(
    (props) => {
        console.log("Child Component got re-rendered!")
      return (
        <div>
            {/* if function sent then it will re-render no matter what */}
          <button onClick={props.handleClick}>
            {props.buttonName}
          </button>
        </div>
      )
    }
);

export default ChildComponent
