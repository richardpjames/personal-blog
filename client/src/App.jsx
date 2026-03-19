import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="text-white font-Blog">
      <section className="mx-auto max-w-3xl px-4 xl:max-w-5xl xl:px-0">
        <NavBar />
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest from the Blog!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My musings on food and technology by Richard James.
          </p>
        </div>
        <PostList posts={posts} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
