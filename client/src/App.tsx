import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";

import type blogPost from "../../server/src/types/blogPost";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState<blogPost[]>();

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <img src="/public/heading.png" className="mx-auto max-w-5xl" />
      </div>
      <PostList posts={posts} />
    </>
  );
}

export default App;
