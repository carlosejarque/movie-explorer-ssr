import MovieCard from '@/components/MovieCard';

export default async function Home() {
  const API_KEY = '4e0399a2b6ec47b65df5345c7e49cca0';
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`, { next: { revalidate: 3600 } });
  const data = await res.json();

  return (
    <main>
      <h1>Películas populares</h1>
      <div className="movie-grid">
        {data.results.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
