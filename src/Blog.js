import React from 'react';

const Blog = ({id, title, body, author, handleDelete}) => {

    
  return (
      <div className='blog-preview' > 
        <h2>{title}</h2>
        <p>Written by {author}</p>
        <div>{body}</div>
        <button onClick={()=>handleDelete(id)}>Delete Blog</button>
     </div>

  );
};

export default Blog;
