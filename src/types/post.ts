type PostType = {
  _id?: string;
  authorId: string;
  title: string;
  content: string;
  description: string;
  readingTime: number;
  readCount: number;
  likes: number;
  createdAt?: string;
  updatedAt?: string;
};

export default PostType;
