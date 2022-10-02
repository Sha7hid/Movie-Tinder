import React from 'react'

const MovieCard = ({movies}) =>{
  return (
    <div className={"movie"}>
      {movies.title}
    </div>
  )
}

export default MovieCard
