import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

const title = 'Post title';
const subtitle = 'Post subtitle';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 10 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 30 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50},
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        title: `Title#0${prevState.length +1}`, 
        subtitle: `Sub#0${prevState.length +1}`, 
        likes: 10
      }
    ]);
  }

  function handleRemove(postId) {
    setPosts(prevState => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header>
        <h2>
          Post of the week 
          <button onClick={handleRefresh}>Refresh</button>
        </h2>
      </Header>
      <hr />
      
      {posts.map((post, index) => (
        <Post 
          key={index}
          likes={post.likes}
          onRemove={handleRemove}
          post={
            { 
              id: post.id,
              title: post.title,
              subtitle: post.subtitle
            }
          }
        />
      ))}
    </>
  );
}

export default App;