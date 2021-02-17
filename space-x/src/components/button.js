import React from 'react'

function Button(props) {
    return (
        <div>
          <a type="button" href={props.link}>{props.name}</a>
        </div>
      );
  }

export default Button;