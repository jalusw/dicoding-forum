import postThread from './remote/postThread';
import fetchThread from './remote/fetchThread';
import fetchThreads from './remote/fetchThreads';
import fetchLeaderboards from './remote/fetchLeaderboards';
import postComment from './remote/postComment';
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

export type {
  PostThreadArguments,
  PostThreadPayload,
  PostCommentArguments,
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
  postDownVoteThread,
  postUpVoteThread,
  postNeutralizeThread,
};
