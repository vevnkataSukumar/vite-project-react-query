import React from 'react'
import Autocomplete from '../components/autocomplete';
// import { useMutation } from '@tanstack/react-query';
import { fetchPosts } from '../api/api';
import Modal from '../components/modal';

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
    const [isOpen, setIsOpen] = React.useState(false)
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
        <button onClick={() => setIsOpen(true)}>Pop me up!</button>
        {
            isOpen && <Modal onClose={() => setIsOpen(false)}>This is a portal modal!</Modal>
        }
    </div>
  )
}

export default PostSuggestions