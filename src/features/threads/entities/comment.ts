import { User } from '@/features/authentication/entities';

interface Comment {
  id?: string;
  content?: string;
  createdAt?: string;
  owner?: User;
  upVotesBy?: User[];
  downVotesBy?: User[];
}
export default Comment;
