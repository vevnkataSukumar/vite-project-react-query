import { Box } from '@mui/material';
import React, { Component } from 'react';
// import NotFound from '../assets/svgs/410.svg'

const MySVG = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill="green" />
      <circle cx="75" cy="25" r="20" stroke="black" strokeWidth="3" fill="green" />
      <path cx="75" cy="25" width="20" height="2" fill='black'/>
    </svg>
  );

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log("Error caught by Error Boundary:", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <Box>
                    {/* <NotFound
                        width="100"
                        height="100"
                    /> */}
                    {/* <img src={'../assests/svgs/concert.svg'} alt="Not found" width="100" height="100" /> */}
                    <MySVG />
                    <h2>Something went wrong</h2>
                </Box>
            )
        }
        return this.props.children;
    }
}
