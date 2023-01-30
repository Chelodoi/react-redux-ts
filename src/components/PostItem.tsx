import React, { FC } from 'react';
import { IPost } from 'src/models/IPost';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const handleUpdate = (e: React.MouseEvent) => {
    const title = prompt() || '';

    update({ ...post, title });
  };

  return (
    <div style={{ border: '1px solid gray' }} onClick={handleUpdate}>
      <h2>
        {post.id}. {post.title}
      </h2>
      <button onClick={handleRemove}>Удалить</button>
    </div>
  );
};

export default PostItem;
