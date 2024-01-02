// App.js
import React from 'react';
import BlogList from './BlogList';
import AddBlogForm from './AddBlogForm';

const App = () => {
  const handleBlogAdded = (newBlog) => {
    // Handle the addition of a new blog, e.g., update state or perform any other actions
    console.log('New blog added:', newBlog);
  };

  return (
    <div>
      <h1>Blog App</h1>
      <BlogList />
      <AddBlogForm onBlogAdded={handleBlogAdded} />
    </div>
  );
};

export default App
