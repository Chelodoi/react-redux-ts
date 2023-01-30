import React, { useEffect } from 'react';
import { IPost } from 'src/models/IPost';
import { postAPI } from 'src/services/PostService';
import PostItem from './PostItem';
const PostList = () => {
  const [limit, setLimit] = React.useState(100);

  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllUsersQuery(limit); //  { pollingInterval: 1000 }-2d param in hook useFetchAllUsersQuery for longpooling
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation(); //кортеж, 1эл - ф-ия, 2й - объект
  const [removePost, {}] = postAPI.useRemovePostMutation();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3);
  //   }, 2000);
  // }, []);
  const handleAddPost = async () => {
    const title = prompt('What is the title of your post?');
    const body = prompt('What is the body of your post?');
    await createPost({ title, body } as IPost);
  };

  const handleUpdate = async (post: IPost) => {
    await updatePost(post);
  };

  const handleRemove = async (post: IPost) => {
    await removePost(post);
  };

  return (
    <div>
      <button onClick={() => handleAddPost()}>Add new Post</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Произошла ошибка</h1>}
      {posts?.map((post) => (
        <PostItem update={handleUpdate} remove={handleRemove} post={post} />
      ))}
    </div>
  );
};

export default PostList;
