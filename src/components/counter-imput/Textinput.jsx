import { useState } from "react";
import React from 'react'

const Textinput = () => {
    const [text, setText] = useState('chao')
  return (
    <div>
        <input
        className="border mt-2"
        type="text"
        value={text}
        onChange={(element) => {setText(element.target.value)}}
        />
        <p>{text}</p>
    </div>
  )
}

export default Textinput