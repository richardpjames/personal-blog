import Moment from "moment";
import FormatPost from "../libraries/FormatPost";

export default function PostList({ posts }) {
  posts?.forEach((post) => {
    post.content = FormatPost(post.content);
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
