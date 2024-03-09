import { User } from "@/features/authentication/entities";

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
  totalComments?: number;
}

export default Thread;
