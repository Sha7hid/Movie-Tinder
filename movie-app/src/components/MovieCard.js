import React from 'react'

const MovieCard = ({movie}) =>{
  return (
    <div className={"movie"}>
      {movie.title}
    </div>
  )
}

export default MovieCard
