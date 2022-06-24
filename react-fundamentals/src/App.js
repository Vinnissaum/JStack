import React from 'react';
import Post from './Post';

const title = 'Post title';
const subtitle = 'Post subtitle';

function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Post of the week</h2>
      <hr />
      
      <Post 
        post={
          {
            title,
            subtitle,
          }
        }
      />
      <Post 
        post={
          {
            title,
            subtitle,
          }
        }
      />
      <Post 
        post={
          {
            title,
            subtitle,
          }
        }
      />
    </>
  );
}

export default App;