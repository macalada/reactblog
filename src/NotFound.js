import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>Sorry</h2>
        <p>The page you are looking for is not found</p>
        <Link to='/'>Go Back Homepage</Link>
    </div>
  )
}

export default NotFound