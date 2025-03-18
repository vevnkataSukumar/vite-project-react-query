import React from 'react';
import {useForm} from 'react-hook-form';
import { Box, Button, Paper, Typography, TextField } from '@mui/material';

function HookForm() {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = (data) => console.log("Form Data:", data);
  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 20, borderRadius: 4 }}>
      <Typography variant="h5" mb={2}>
        Register Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{display: "flex", flexDirection: 'column'}}>
          <TextField
            fullWidth
            {...register("name", { required: "Name is required" })}
            label="Name"
            required
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            margin="normal"
          />
          <Button
            type={'submit'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  )
}

export default HookForm