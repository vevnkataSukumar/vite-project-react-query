import {Suspense} from 'react';
import AuthHoc from '../HOCs/AuthHoc';

// async function fetchUser() {
//     return fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((res) => res.json())
//       .then((data) => data.name);
//   }
  
// const userPromise = fetchUser();

const FetchComponent = () => {
    const userName = 'No user';
    // const userName = fetchUser()  || 'No user';
    return <h1>{userName}</h1>;
}

function UserPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
        <FetchComponent />
        <h1>Hello</h1>
    </Suspense>
  )
}

export default AuthHoc(UserPage);