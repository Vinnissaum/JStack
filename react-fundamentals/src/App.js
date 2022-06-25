import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

const title = 'Post title';
const subtitle = 'Post subtitle';

function App() {
  const [posts, setPosts] = useState([
    { title: 'Title#01', subtitle: 'Sub#01', likes: 10 },
    { title: 'Title#02', subtitle: 'Sub#02', likes: 30 },
    { title: 'Title#03', subtitle: 'Sub#03', likes: 50},
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          title: `Title#0${prevState.length +1}`, 
          subtitle: `Sub#0${prevState.length +1}`, 
          likes: 10
        }
      ]);
    }, 2000);
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
          post={
            {
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