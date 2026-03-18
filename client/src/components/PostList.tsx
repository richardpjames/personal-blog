import type blogPost from "../../../server/src/types/blogPost";

interface PostListProps {
  posts?: blogPost[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        {posts?.map((post) => (
          <div key={post.id}>
            <h2 className="font-bold text-2xl underline py-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
