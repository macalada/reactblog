import React from 'react';
import Blog from './Blog';

const BlogList = ({blogs, title}) => {
  return (
      <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map(a=>(
        <Blog key={a.id} id={a.id} title={a.title} body={a.body}author={a.author}/>
      ))}
      </div>
  );
};

export default BlogList;
