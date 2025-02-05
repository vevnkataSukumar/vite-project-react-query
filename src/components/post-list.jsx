// import React from 'react';
import { addPost, fetchPosts, fetchTags } from "../api/api";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../query";
import { useState } from "react";

const PostsList = () => {
  const [page, setpage] = useState(1);
  const {
    data: postData,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts", { page }],
    queryFn: () => fetchPosts(page),
    staleTime: 5 * 60 * 1000,
    // placeholderData: keepPreviousData,
    // gcTime: 0,
    // refetchInterval: 5000,
  });

  const {
    data: tagsData,
    // isError: isTagError,
    // isPending: isTagPending,
    // error: tagError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity,
  });

  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
      });
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
    console.log(title, tags);
    mutate({
      title,
      tags,
      id: postData?.data?.length + 1,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post.."
          className="postbox"
          name="title"
        />
        <div className="tags">
          {tagsData &&
            tagsData?.map((tag) => {
              return (
                <div key={tag}>
                  <input name={tag} id={tag} type="checkbox" />
                  <label htmlFor={tag}>{tag}</label>
                </div>
              );
            })}
        </div>
        <button>Post</button>
      </form>
      {isLoading && isPending && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {isPostError && <p onClick={() => reset()}>{postError?.message}</p>}
      <div className="pages">
        <button
          disabled={!postData?.prev}
          onClick={() => setpage((prevPage) => Math.max(prevPage - 1, 0))}
        >
          Previous page
        </button>
        <span>{page}</span>
        <button
          disabled={!postData?.next}
          onClick={() => setpage((prevPage) => prevPage + 1)}
        >
          Next Page
        </button>
      </div>
      {postData &&
        postData?.data?.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div>{post?.title}</div>
              {post?.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default PostsList;
