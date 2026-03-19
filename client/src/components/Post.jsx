import { useState, useEffect } from "react";
import { useParams } from "react-router";

import FormatPost from "../libraries/FormatPost";

import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  const [post, setPost] = useState();
  let { slug } = useParams();

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        data.content = FormatPost(data.content);
        setPost(data);
      });
  }, []);

  return (
    <div className="text-white font-Blog">
      <section className="mx-auto max-w-3xl px-4 xl:max-w-5xl xl:px-0">
        <NavBar />
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {post?.title || "Post not found"}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: post?.content }}></p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
