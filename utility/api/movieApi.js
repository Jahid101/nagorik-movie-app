import { Constants } from "@/utility/constants";
import axios from "axios";

export const moviesAPIs = {
    getAllMovie: async (filters = null) => {
        const data = await axios({
            url: Constants.Api.movies.movies,
            method: "GET",
            params: { ...filters, page: filters?.page },
            // headers: {
            //     authorization: 'Bearer' + ' ' + token,
            // },
        })
        return data?.data;
    },
    getMovieById: async (movieId) => {
        const data = await axios({
            url: Constants.Api.movies.movies + movieId,
            method: "GET",
        })
        return data.data;
    },

}
