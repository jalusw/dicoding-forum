import { Button } from '@/common/components/ui/button';
import { FC } from 'react';

const ThreadCommentForm: FC = () => {
  return (
    <section className="my-8">
      <div className="container ">
        <div className="prose">
          <h2 className="m-0 text-md">Comment</h2>
          <div className="rounded-md p-2 shadow-border" contentEditable>
            ...
          </div>
          <Button className="mt-4">Post</Button>
        </div>
      </div>
    </section>
  );
};

export default ThreadCommentForm;
