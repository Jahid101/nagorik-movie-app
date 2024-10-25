import MovieList from '@/components/movie/MovieList';
import TopNavBar from '@/components/top/TopNavBar';

const Home = () => {

  return (
    <div className="mb-10">
      <TopNavBar />
      <div className="pt-32"></div>
      <MovieList />
    </div>
  );
};

export default Home;
