import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

function GifGrid({ category }) {

   const { data:images, loading } = useFetchGif(category);

   return (
      <>
         <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>

         { loading ? <p className="animate__animated animate__bounce animate__flash">Cargando</p> : null }
         
         <div className="card-grid">
            {
               images.map((img) => (
                  <GifGridItem 
                     key={img.id}
                     { ...img }
                  />
               ))
            }
         </div>
      </>
   )
}

export default GifGrid
