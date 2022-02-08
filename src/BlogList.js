import React from 'react';
import Blog from './Blog';

const BlogList = ({blogs, title, handleDelete}) => {
  return (
      <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map(a=>(
        <Blog key={a.id} id={a.id} title={a.title} body={a.body}author={a.author} handleDelete={handleDelete}/>
      ))}
      </div>
  );
};

export default BlogList;
