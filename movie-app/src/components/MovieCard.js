import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="movie">
      {movie.title}
    </div>
  )
}

export default MovieCard
