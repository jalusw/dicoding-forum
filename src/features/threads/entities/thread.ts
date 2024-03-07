interface Thread {
  id?: string;
  title?: string;
  body?: string;
  category?: string;
  createdAt?: string;
  ownerId?: string;
  upVotesBy?: string[];
  downVotesBy?: string[];
  totalComments?: number;
}

export default Thread;
