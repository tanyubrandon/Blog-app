import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

     const [title,setTitle]=useState('');
     const [body,setBody]=useState('');
     const [author,setAuthor]=useState('brandon '); 

    const history=useHistory();

     const handleSubmit=(event)=>{
         event.preventDefault();
         const blog={title,body, author};

         fetch('http://localhost:8000/blogs',{
             method:'POST',
             headers:{"content-Type":"application/json"},
             body:JSON.stringify(blog)
         })
         .then(()=>{
             console.log('new blog added.');
             history.push('/');
         })

     };
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                 type="text" 
                 required
                 value={title}
                 onChange={(event)=>setTitle(event.target.value)}
                 /> 
                <label >Blog body:</label>
                <textarea 
                required
                onChange={(event)=>setBody(event.target.value)}
                ></textarea>
                <label >Blog author</label>
                 <select
                 value={author}
                 onChange={(event)=>setAuthor(event.target.value)}
                 >
                     <option value="Brandon">Brandon</option>
                     <option value="Tanyu">Tanyu</option>
                     <option value="Andrew">Andy</option>
                     <option value="Cecilia">Cecy</option>
                 </select>
                 <button>Add-Blog</button>
                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;