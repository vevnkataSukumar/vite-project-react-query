import '../App.css'
import PostsList from '../components/post-list'

function Home() {
  return (
      <div>
        <h2 className='title'>My Posts</h2>
        <PostsList/>
      </div>
  )
}

export default Home;
