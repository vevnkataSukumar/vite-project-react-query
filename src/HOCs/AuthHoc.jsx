import React from 'react'
import Register from '../container/Register';

function AuthHoc(WrappedComponent) {
    return (props) => {
        const isAuthenticated = true;
        if (!isAuthenticated) {
            return <Register />
        } else {
            return <WrappedComponent {...props}/>
        }
    };
}

// function AuthHoc2(WrappedComponent) {
//     return (props) => {
//       const isAuthenticated = true; // Assume user is authenticated
//       if (!isAuthenticated) {
//         return <Register />
//       }
//       return <WrappedComponent {...props} />;
//     };
//   };
  
  export default AuthHoc;