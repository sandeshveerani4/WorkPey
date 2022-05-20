import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Loading } from "../../Loading";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <Loading />
  ) : (
    <div className="p-1">
      {posts.map((data, index) => (
        <div key={index}>
          <Post post={data} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
