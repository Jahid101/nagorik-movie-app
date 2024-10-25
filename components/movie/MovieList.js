import React, { useEffect, useState } from 'react';
import MovieCard from '@/components/customUI/MovieCard';
import CustomLoader from '@/components/loader/loader';
import { moviesAPIs } from '@/utility/api/movieApi';
import { useToast } from '@/components/ui/use-toast';

const MovieList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [totalData, setTotalData] = useState(null);
    const { toast } = useToast();
    const [filters, setFilters] = useState({
        page: 1,
        query: null,
    });

    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        getMovieList();
    }, [filters]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
            return;
        }
        setFilters((prev) => ({
            ...prev,
            page: prev.page + 1,
        }));
    };

    const getMovieList = async (filter = filters) => {
        setLoading(true);
        setIsFetching(true);

        try {
            const response = await moviesAPIs.getAllMovie(filter)
            if (response) {
                // console.log('response ==>', response);
                setData((prevData) => [...prevData, ...response?.results]);
                // setData(response?.results)
                setTotalData(response?.total_results)
                setLoading(false);
                setIsFetching(false);
            }
        } catch (error) {
            console.log("error ==>", error);
            setData([])
            toast({
                variant: "error",
                title: 'Something went wrong',
            })
            setLoading(false);
            setIsFetching(false);
        }
    }


    if (loading) {
        return (<CustomLoader />)
    }


    return (
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-7 m-auto max-w-[1300px] animate-fadeInUp">
            {
                data && data.map((item, index) => {
                    return (
                        <MovieCard
                            data={item}
                        />
                    )
                })
            }
        </div>
    );
};

export default MovieList;