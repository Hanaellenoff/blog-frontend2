import { PostsIndex } from "./PostsIndex";

export function Content() {
  const posts = [
    { id: 1, name: "first", image_url: "https://via.placeholder.com/150", description: "jkdbkjb" },
    { id: 1, name: "second", image_url: "https://via.placeholder.com/150", description: "jkdbkjb" },
  ];
  return (
    <div>
      <p>welcome to react</p>
      <PostsIndex posts={posts} />
    </div>
  );
}
