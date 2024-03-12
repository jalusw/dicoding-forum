import fetchThreads from './remote/fetchThreads';
import postComment from './remote/postComment';
import postDownVoteThread from './remote/postDownVoteThread';
import postUpVoteThread from './remote/postUpVoteThread';
import postNeutralizeThread from './remote/postNeutralizeThread';
import type { PostCommentArguments } from './remote/postComment';
import type { PostDownVoteThreadArguments } from './remote/postDownVoteThread';
import type { PostUpVoteThreadArguments } from './remote/postUpVoteThread';
import type { PostNeutralizeThread } from './remote/postNeutralizeThread';

export type {
  PostCommentArguments,
  PostDownVoteThreadArguments,
  PostUpVoteThreadArguments,
  PostNeutralizeThread,
};

export {
  fetchThreads,
  postComment,
  postDownVoteThread,
  postUpVoteThread,
  postNeutralizeThread,
};
