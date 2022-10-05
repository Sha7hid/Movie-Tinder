import React from 'react'

const MovieCard = ({movie, swipe}) =>{
  return (
    <div className={`movie ${swipe ? "swipe":""}`}>
      {movie.title}
    </div>
  )
}

export default MovieCard
