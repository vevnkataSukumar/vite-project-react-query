import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary';
import { Box, Typography } from '@mui/material';

const ErrorPage = () => {
//   throw new Error("Oops! An unexpected error occurred.");

const handleClick =(e) => {
    console.log(name, age);
}
return (
    <div onClick={handleClick}>Error Page</div>
  )
}

const ErrorContainer = () => {
    return (
        <>
            <Box
                sx={{
                    maxWidth: 400,
                    mx: "auto",
                    mt: 5,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: "white",
                }}
            >
                <Typography variant="h5" mb={2}>
                    Error Component here
                </Typography>
                <ErrorBoundary>
                    <ErrorPage />
                </ErrorBoundary>
            </Box>
        </>
    )
}

export default ErrorContainer;
