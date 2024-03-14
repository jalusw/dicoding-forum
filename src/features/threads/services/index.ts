import postThread from './remote/postThread';
import fetchThread from './remote/fetchThread';
import fetchThreads from './remote/fetchThreads';
import fetchLeaderboards from './remote/fetchLeaderboards';
import postComment from './remote/postComment';
import postUpVoteComment from './remote/postUpVoteComment';
import postDownVoteComment from './remote/postDownVoteComment';
import postNeutralizeVoteComment from './remote/postNeutralizeVoteComment';
import postDownVoteThread from './remote/postDownVoteThread';
import postUpVoteThread from './remote/postUpVoteThread';
import postNeutralizeThread from './remote/postNeutralizeThread';
import type {
  PostThreadArguments,
  PostThreadPayload,
} from './remote/postThread';
import type { PostCommentArguments } from './remote/postComment';
import type { PostDownVoteThreadArguments } from './remote/postDownVoteThread';
import type { PostUpVoteThreadArguments } from './remote/postUpVoteThread';
import type { PostNeutralizeThread } from './remote/postNeutralizeThread';
import type { PostUpVoteCommentArguments } from './remote/postUpVoteComment';
import type { PostDownVoteCommentArguments } from './remote/postDownVoteComment';
import type { PostNeutralizeVoteCommentArguments } from './remote/postNeutralizeVoteComment';

export type {
  PostThreadArguments,
  PostThreadPayload,
  PostCommentArguments,
  PostUpVoteCommentArguments,
  PostDownVoteCommentArguments,
  PostNeutralizeVoteCommentArguments,
  PostDownVoteThreadArguments,
  PostUpVoteThreadArguments,
  PostNeutralizeThread,
};

export {
  fetchThread,
  fetchThreads,
  fetchLeaderboards,
  postThread,
  postComment,
  postUpVoteComment,
  postDownVoteComment,
  postNeutralizeVoteComment,
  postDownVoteThread,
  postUpVoteThread,
  postNeutralizeThread,
};
