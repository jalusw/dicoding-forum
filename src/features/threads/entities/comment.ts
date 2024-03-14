import { User } from '@/features/authentication/entities';

interface Comment {
  id?: string;
  content?: string;
  createdAt?: string;
  owner?: User;
  upVotesBy?: string[];
  downVotesBy?: string[];
}
export default Comment;
