import Moment from "moment";

import type blogPost from "../../../server/src/types/blogPost";

interface PostListProps {
  posts?: blogPost[];
}

export default function PostList({ posts }: PostListProps) {
  posts?.forEach((post) => {
    post.content = post.content.replaceAll("<h2", '<h2 class="text-2xl py-2"');
    post.content = post.content.replaceAll("<p", '<p class="py-2"');
    post.content = post.content.replaceAll(
      "<ul",
      '<ul class="list-disc list-inside"',
    );
    post.content = post.content.replaceAll(
      "<ol",
      '<ol class="list-decimal list-inside"',
    );
    post.content = post.content.replaceAll("<li", '<li class="py-1"');
  });

  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {posts?.map((post) => (
          <li key={post.id} className="py-12">
            <h2 className="font-bold text-2xl">
              {post.title}{" "}
              <span className="text-gray-600">
                {Moment(post.date).format("DD-MM-YYYY")}
              </span>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
          </li>
        ))}
      </ul>
    </>
  );
}
