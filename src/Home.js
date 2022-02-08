import {React, useState, useEffect} from 'react';
import Blog from './Blog';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs]= useState([
        {title: "My New website", body: 'lorem ipsum....', author:'mario', id:1},
        {title: "Welcome to my blog", body: 'lorem ipsum....', author:'yoshi', id:2},
        {title: "Web dev top tips", body: 'lorem ipsum....', author:'mario', id:3},
    ])

    const handleDelete =(id) => {
        const newBlogs = blogs.filter(b =>b.id !==id)
        setBlogs(newBlogs)
        
    }
    useEffect(()=>{
        console.log('use effect run')
    },[])

  return(
      <div className="home">
          <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
          <BlogList blogs={blogs.filter(x=>x.author ==='mario')} title="Mario's Blog" />
      </div>
 );
};

export default Home;
