import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, CircularProgress, Typography, Container } from "@mui/material";

const PostListNew = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Posts List</Typography>
      <List>
        {posts.slice(0, 10).map((post) => (
          <ListItem key={post.id} divider>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostListNew;
