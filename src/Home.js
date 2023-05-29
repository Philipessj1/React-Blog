import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data: blogs , error } = useFetch('http://localhost:8000/blogs');
  

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);

  }

  return ( 
    <div className="home">
      { !blogs && !error && <h2>Loading Data</h2> }
      { error && !blogs && <h2>{ error }</h2> }
      { blogs && 
      <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete } />
      }
    </div>
   );
}
 
export default Home;