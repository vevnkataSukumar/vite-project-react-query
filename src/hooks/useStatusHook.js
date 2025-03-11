import { useState, useEffect, useDebugValue } from 'react';

const useStatusHook = () => {
    const [isOnline, setIsOnline] = useState(false);
      
    useDebugValue(isOnline ? 'online' : 'offline');

    useEffect(() => {
        const updateStatus =() => {
            setIsOnline(navigator.onLine);
        };
        
        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
      return () => {
        window.removeEventListener('online', updateStatus);
        window.removeEventListener('offline', updateStatus);
      }
    }, [])
    
    return isOnline;
};

export default useStatusHook;