/* eslint-disable react/prop-types */
export function PostsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map((posts) => (
        <div key={posts.id}>
          <h2>{posts.name} </h2>
          <img src={posts.image_url} alt="" />
          <p> {posts.description} </p>
        </div>
      ))}
    </div>
  );
}
