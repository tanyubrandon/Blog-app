import {useEffect, useState} from 'react';
import BlogList from './BlogList';

const Home = () => {   
    const [blogs,setBlogs]=useState(null);

    const handleDelete=(id)=>{
        const NewBlog=blogs.filter((blog)=>blog.id!=id);
        setBlogs(NewBlog);
    };

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res=>{
               return  res.json();
            })
            .then((data)=>{
                 setBlogs(data);   
            })
    },[]);

    return (
        <div className="Home">
         {blogs && <BlogList blogs={blogs} title='All Blogs On This Page!' handleDelete ={handleDelete}/>}
        </div>
    );
}
 
export default Home;