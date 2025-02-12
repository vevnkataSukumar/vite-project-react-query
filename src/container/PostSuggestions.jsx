import React from 'react'
import Autocomplete from '../components/autocomplete';
// import { useMutation } from '@tanstack/react-query';
import { fetchPosts } from '../api/api';

const staticPostData = [
    {
        id: 1,
        title: 'My Post 1',
    },
    {
        id: 2,
        title: 'My Post 2',
    },
    {
        id: 3,
        title: 'My Post 3',
    },
];

function PostSuggestions() {
    // const [postsData, setPostsData] = React.useState(null)
    // const {
    //     mutate,
    //     data: postsData,
    //     isError,
    //     isPending,
    //     error,
    //     reset,
    //     isLoading,
    //   } = useMutation(fetchPosts, onSe);
    const fetchSuggestions = async () => {
        console.log('fetch data from APi');
        
        const data = await fetchPosts(null);
        return data;
    };
  return (
    <div>
        <Autocomplete
            placeholder={'Enter post to search'}
            fetchSuggestions={fetchSuggestions}
            dataKey={'title'}
            customLoading={<>Loading post...</>}
            onSelect={res => console.log(res)}
            onChange={(val) => {}}
            onBlur={(e) => {}}
            onFocus={(e) => {}}
            customStyles={{}}
            staticData={null}
        />
    </div>
  )
}

export default PostSuggestions