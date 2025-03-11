import { addPost, fetchPosts, fetchTags } from "../api/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../query";
import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddPost from "./addPost";

const PostsList = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const { data: postData, isLoading, isError, error } = useQuery({
    queryKey: ["posts", { page }],
    queryFn: () => fetchPosts(page),
  });

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity,
  });

  const { mutate, isError: isPostError, isPending, error: postError, reset } =
    useMutation({
      mutationFn: addPost,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"], refetchType: "all" });
        queryClient.refetchQueries({ queryKey: ["posts"] });
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if (!title || !tags) return;
    setOpen(false);
    mutate({
      title,
      tags,
      id: postData?.items + 1,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setOpen(!open)}
        sx={{}}
        startIcon={<AddIcon />}
      >
        Add Post
      </Button>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 5 }}>
        {isLoading && isPending && <Typography>Loading...</Typography>}
        {isError && <Typography color="error">{error?.message}</Typography>}
        {isPostError && (
          <Typography color="error" onClick={() => reset()}>{postError?.message}</Typography>
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            variant="outlined"
            disabled={!postData?.prev}
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          >
            Previous
          </Button>
          <Typography>{page}</Typography>
          <Button
            variant="outlined"
            disabled={!postData?.next}
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next
          </Button>
        </Box>
        {postData?.data?.map((post) => (
          <Paper key={post.id} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">{post.title}</Typography>
            <Box >
              {post.tags.map((tag, index) => (
                <Chip key={`${tag}-${index}`} label={tag} color="primary" variant="outlined" sx={{ margin: "8px", marginLeft: '0px' }} />
              ))}
            </Box>
          </Paper>
        ))}
        <AddPost open={open} onClose={handleClose} handleForm={handleSubmit} tagsData={tagsData}/>
      </Paper>
    </>
  );
};

export default PostsList;
