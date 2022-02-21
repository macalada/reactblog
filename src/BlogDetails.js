import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';


const BlogDetails = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    
    const handleDeleteClick = ()=>{
        fetch ('http://localhost:8000/blogs/' +id,{
            method:'DELETE',

          }).then(()=>{
            console.log('blog deleted')
            
            history.push('/')
          })

    }
    return (
        <div className='blog-details'>
            
            {isLoading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by : {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDeleteClick}>Delete</button>
                </article>
            )}
            </div>
    )
}

export default BlogDetails