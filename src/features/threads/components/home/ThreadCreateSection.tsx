import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/common/components/ui/dialog';
import { Input } from '@/common/components/ui/input';
import ThreadCreateForm from './ThreadCreateForm';
const ThreadCreateSection: FC = () => {
  return (
    <section className='mb-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Input value="Would you like to discuss or ask?" />
        </DialogTrigger>
        <DialogContent className="max-w-screen-md">
          <ThreadCreateForm />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ThreadCreateSection;
