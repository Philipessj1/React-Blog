import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(({ title, author, id }) => (
        <div className="blog-preview" key={ id }>
          <Link to={`/blogs/${id}`}>
          <h2>{ title }</h2>
          </Link>
          <p>Written by { author }.</p>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;