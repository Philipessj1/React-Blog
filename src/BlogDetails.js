import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, error } = useFetch('http://localhost:8000/blogs/' + id);

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => navigate('/'))
  }

  return ( 
    <div className="blog-details">
      { !error && !blog && <h2>Loading...</h2> }
      { error && !blog && <h2>{ error }</h2> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={ handleClick }>Delete Blog</button>
        </article>
      ) }
    </div>
   );
}
 
export default BlogDetails;