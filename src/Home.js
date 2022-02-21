import Blog from './Blog';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    

  return(
      <div className="home">
          {error && <div>{error.message}</div>}
          {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
          {/* <BlogList blogs={blogs.filter(x=>x.author ==='mario')} title="Mario's Blog" /> */}
      </div>
 );
};

export default Home;
