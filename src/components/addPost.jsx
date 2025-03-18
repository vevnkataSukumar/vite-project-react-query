import React from 'react';
import {
    Box,
    TextField,
    FormGroup,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Modal 
} from '@mui/material';

function AddPost(props) {
    return (
        <Modal
            open={props?.open}
            onClose={props?.onClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style }}>
                <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>Upload a Post</Typography>
                <form data-testid="post-form" onSubmit={props?.handleForm}>
                    <TextField
                        fullWidth
                        label="Enter your post"
                        name="title"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <FormGroup row>
                        {props?.tagsData?.map((tag) => (
                            <FormControlLabel
                                key={tag}
                                control={<Checkbox name={tag} />}
                                label={tag}
                            />
                        ))}
                    </FormGroup>
                    <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                        Post
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}

export default AddPost;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 280,
    bgcolor: 'background.paper',
    border: '1px solid #eee',
    boxShadow: 24,
    pt: 5,
    px: 4,
    pb: 5,
    borderRadius: 4,
};