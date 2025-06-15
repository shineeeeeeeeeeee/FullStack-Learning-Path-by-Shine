import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComponent = () => {
    const {id} = useParams();
  return (
    <div>
      Params: {id}
      {/* http://localhost:5173/student/abc */}
      {/* Try out */}
    </div>
  )
}

export default ParamComponent
