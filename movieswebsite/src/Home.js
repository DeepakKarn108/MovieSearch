import Movie from "./Movie";
import Search from "./Search";
import Subscription  from "./Subscription";
const Home = () => {
  return (
    <>
      <div className="container">
        
        <Search />
        <Movie />
        <Subscription />
      </div>
    </>
  );
};

export default Home;
