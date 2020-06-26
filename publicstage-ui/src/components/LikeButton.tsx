import React, { useState } from 'react';
const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({ like: 0, on: true })
  return (
    <React.Fragment>
      <button onClick={() => {
        setObj({
          like: obj.like + 1, on: obj.on
        })
      }}>{obj.like}</button>
    </React.Fragment>
  )
}

export default LikeButton