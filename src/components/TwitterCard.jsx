import React from 'react'
import { useState } from 'react'

const TwitterCard = ({ author, content }) => {
  return (
    <div>
        <div>
            <h3 className="border p-4 rounded m-2 flex justify-center">{author}</h3>
            <p className="font-bold">{content}</p>
        </div>
        <button>
            icono
        </button>
    </div>
  )
}

export default TwitterCard

