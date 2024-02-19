import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = ({sequences=['',0], fontsize=''}) => {
  return (
    <div>
      <TypeAnimation
      sequence={sequences}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: `${fontsize}`, display: 'inline-block' }}
    />
    </div>
  )
}

export default TypeWriter
