export const apiBaseUrl = 'https://api.themoviedb.org/3/movie'; //0d93f1002d7d96fd63609b93bb5a53c9
export const medialUrl = 'https://image.tmdb.org/t/p/w500';
export const Constants = {
    Api: {
        movies: {
            movies: `${apiBaseUrl}/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        },
    },
};
