import fetchThreads from './remote/fetchThreads';
import postComment from './remote/postComment';
import postDownVoteThread from './remote/postDownVoteThread';
import type { PostCommentArguments } from './remote/postComment';
import type { PostDownVoteThreadArguments } from './remote/postDownVoteThread';

export type { PostCommentArguments, PostDownVoteThreadArguments };
export { fetchThreads, postComment, postDownVoteThread };
