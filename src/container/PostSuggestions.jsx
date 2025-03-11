import React, { useRef } from 'react'
import Autocomplete from '../components/autocomplete';
import { fetchPosts } from '../api/api';
import Modal from '../components/modal';
import CustomInput from '../components/customInput';

function PostSuggestions() {
    const [isOpen, setIsOpen] = React.useState(false);
    const customRef = useRef(null);
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
        <CustomInput ref={customRef}/>
        <button onClick={() => setIsOpen(true)}>Pop me up!</button>
        {
            isOpen && <Modal onClose={() => setIsOpen(false)}>This is a portal modal!</Modal>
        }
    </div>
  )
}

export default PostSuggestions