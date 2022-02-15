
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {   

    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');   
    // const handleDelete=(id)=>{
    //     const NewBlog=blogs.filter((blog)=>blog.id!=id);
    //     setBlogs(NewBlog);
    // };

    return (
        <div className="Home">
            {error && <div>{error}</div>}
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title='All Blogs On This Page!' />}
        </div>
    );
}
 
export default Home;