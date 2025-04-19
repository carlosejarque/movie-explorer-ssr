import Link from 'next/link';

export default function MovieCard({ movie }) {
  const releaseDate = new Date(movie.release_date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Link href={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <span className="score-badge">{Math.round(movie.vote_average * 10)}%</span>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-date">{releaseDate}</p>
      </div>
    </Link>
  );
}
