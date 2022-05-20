import React from "react";

const Post = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:w-full md:w-48"
            src={post.selectedFile}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {post.creator}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {post.title}
          </a>
          <p className="mt-2 text-slate-500">
            {post.message}
          </p>
          <p className="mt-2 text-slate-400">
            {post.tags.map((key,index)=>(<span class='mr-2'>{"#"+key.trim()}</span>))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
