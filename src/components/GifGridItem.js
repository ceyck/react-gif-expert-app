import React from 'react'

function GifGridItem({ title, url }) {
   return (
      <div className="card animate__animated animate__bounce animate__fadeIn">
         <img src={url} alt={title} />
         <p>{title}</p>
      </div>
   )
}

export default GifGridItem
