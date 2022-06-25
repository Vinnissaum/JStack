import React from 'react';
import Post from './Post';
import Header from './Header';

const title = 'Post title';
const subtitle = 'Post subtitle';

function App() {
  return (
    <>
      <Header>
        <h2>Post of the week</h2>
      </Header>
      <hr />
      
      <Post 
        likes={20}
        post={
          {
            title,
            subtitle,
          }
        }
      />
      <Post 
        likes={10}
        post={
          {
            title,
            subtitle,
          }
        }
      />
      <Post 
        likes={50}
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