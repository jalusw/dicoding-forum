import { User } from '@/features/authentication/entities';
import { Comment } from '.';

interface Thread {
  id?: string;
  title?: string;
  body?: string;
  category?: string;
  createdAt?: string;
  ownerId?: string;
  owner?: User;
  upVotesBy?: string[];
  downVotesBy?: string[];
  comments?: Comment[];
  totalComments?: number;
}

export default Thread;
