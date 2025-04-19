export default async function MovieDetail({ params }) {
    const { id } = params;
    const API_KEY = '4e0399a2b6ec47b65df5345c7e49cca0';
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES&append_to_response=credits`);
    const data = await res.json();

    const releaseDate = new Date(data.release_date).toLocaleDateString('es-ES');
  
    return (
        <>
            <div className="movie-detail-container">
                    <img
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                    />
                    <div className="movie-detail-ifo">
                    <h1 className="movie-title-detail">{data.title} ({new Date(data.release_date).getFullYear()})</h1>
                <p className="movie-subinfo">
                    {releaseDate} • {data.genres.map(g => g.name).join(", ")} • {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
                </p>
                <div className="movie-score">{Math.round(data.vote_average * 10)}% </div>

                <p className="movie-overview">{data.overview}</p>
                <p><strong>Director:</strong> {data.credits.crew.find(p => p.job === 'Director')?.name}</p>
                </div>
            </div>
            <div className='movie-bottom'>
                <div className="cast-section">
                    <h2>Reparto principal</h2>
                    <div className="cast-list">
                    {data.credits.cast.slice(0, 10).map(actor => (
                        <div key={actor.id} className="cast-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <div className="cast-name">{actor.name}</div>
                        <div className="cast-character">{actor.character}</div>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="movie-info-extra">
                    <p><strong>Título original</strong><br />{data.original_title}</p>
                    <p><strong>Estado</strong><br />{data.status}</p>
                    <p><strong>Idioma original</strong><br />{data.original_language.toUpperCase()}</p>
                    <p><strong>Presupuesto</strong><br />{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.budget)}</p>
                    <p><strong>Ingresos</strong><br />{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.revenue)}</p>
                </div>
            </div>
        </>
    );
  }
  