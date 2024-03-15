export function PostsNew() {
  return (
    <div>
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input title="title" type="text" />
        </div>
        <div>
          Body: <input title="image" type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}
