import { useContext } from 'react';
import '../App.css'
// import PostsList from '../components/post-list';
import PostsList from '../components/PostsList';
import AuthHoc from '../HOCs/AuthHoc';
import { ThemeContext } from '../CoderByte/context-api';

function Home() {
  const {isDark, toggleTheme} = useContext(ThemeContext);
  return (
      <div>
        <h2 className='title'>My Posts</h2>
        <PostsList/>
      </div>
  )
}

export default AuthHoc(Home);
