import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { medialUrl } from '@/utility/constants';

const MovieCard = ({ data }) => {
    const router = useRouter()

    return (
        <div 
        className="relative w-[280px] h-[380px] overflow-hidden rounded-lg shadow-md cursor-pointer  bg-white border-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md"
        onClick={() => router.push(`/movies/${data?.id}`)}
        >
            <Image
                src={data?.poster_path ? medialUrl + data?.poster_path : '/images/noImg.jpg'}
                width={280}
                height={380}
                alt="Movie Image"
                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-150 hover:rotate-20 hover:blur-sm"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-white">
                <h2 className="text-lg font-bold">Movie Title</h2>
                <p className="text-sm mt-1">Subtitle</p>
                <div className="flex items-center mt-2">
                    <Button>View</Button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
