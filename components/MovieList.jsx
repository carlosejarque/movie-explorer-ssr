import React from 'react'
import MovieCard from './MovieCard'
import { useFetch } from '../hooks/useFetch'

export default function MovieList() {

    const API_KEY = '4e0399a2b6ec47b65df5345c7e49cca0';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;
    const { data, loading } = useFetch(url);

    if (loading) {
        return <p>Cargando películas...</p>
    }

    return (
    <>
        <h2>Películas populares</h2>
        <div className="movie-grid">
            {data.results?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </>
    )
}

