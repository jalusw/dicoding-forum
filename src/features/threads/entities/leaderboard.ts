import { User } from '@/features/authentication/entities';

interface Leaderboard {
  user: User;
  score: number;
}

export default Leaderboard;
