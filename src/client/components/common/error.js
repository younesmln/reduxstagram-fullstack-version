import React from 'react';

function Error({action}) {
  return (
    <div>error
      <button onClick={action}>try agrain</button>
    </div>
  )
}

export default Error;