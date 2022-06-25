import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

const title = 'Post title';
const subtitle = 'Post subtitle';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 10, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 30, read: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: true},
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
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
          onRemove={handleRemove}
          post={post}
        />
      ))}
    </>
  );
}

export default App;