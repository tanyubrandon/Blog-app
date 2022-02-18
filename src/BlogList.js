import { Link } from "react-router-dom";

const BlogList= ({blogs,title}) => {
    // const blogs=props.blogs;
    // const title=props.title;
   return (  
        <div className="blog-list">
            <h1><b>{title}</b></h1>
              {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h1>{blog.title}</h1>
                     </Link>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList