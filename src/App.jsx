import { useState } from 'react'
import './App.css'
import PostsList from './components/post-list'

function App() {
  const [show, setshow] = useState(true)
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

export default App
