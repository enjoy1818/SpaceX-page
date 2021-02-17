import React from 'react'

function Image(props) {
    return (
        <div>
          <img src={props.url} />
        </div>
      );
  }

export default Image;