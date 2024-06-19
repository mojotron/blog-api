type CommentType = {
  _id?: string;
  authorId: string;
  postId: string;
  content: string;
  likes: number;
  createdAt?: string;
  updatedAt?: string;
};

export default CommentType;
