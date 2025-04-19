import MovieCard from '@/components/MovieCard';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query;
  const API_KEY = '4e0399a2b6ec47b65df5345c7e49cca0';
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}`);
  const data = await res.json();

  return (
    <div>
      <h2>Resultados para: "{query}"</h2>
      <div className="movie-grid">
        {data.results?.length > 0 ? (
          data.results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}
