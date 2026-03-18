export default function FormatPost(post: string): string {
  let formattedPost = post.replaceAll("<h2", '<h2 class="text-2xl py-2"');
  formattedPost = formattedPost.replaceAll("<p", '<p class="py-2"');
  formattedPost = formattedPost.replaceAll(
    "<ul",
    '<ul class="list-disc list-inside"',
  );
  formattedPost = formattedPost.replaceAll(
    "<ol",
    '<ol class="list-decimal list-inside"',
  );
  formattedPost = formattedPost.replaceAll("<li", '<li class="py-1"');

  return formattedPost;
}
