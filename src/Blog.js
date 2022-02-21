import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({id, title, body, author}) => {

    
  return (
      <div className='blog-preview' > 
      <Link to={`/blogs/${id}`}>
        <h2>{title}</h2>
        <p>Written by {author}</p>
        {/* <div>{body}</div> */}
        </Link>
        
     </div>

  );
};

export default Blog;
