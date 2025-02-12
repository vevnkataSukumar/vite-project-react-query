import { useEffect, useState } from 'react'
import '../App.css'
import PostsList from '../components/post-list'
import { fetchPosts } from '../api/api';

function Home() {
  const [show, setshow] = useState(true);
  const [response, setResponse] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    fetchPosts().then(res => console.log(res));
  }, []);

  return (
      <div>
        <h2 className='title'>My Posts</h2>
        <button onClick={() => setshow(!show)}>posts</button>
        {
          show && 
          <PostsList/>
        }
      </div>
  )
}

export default Home;
