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
    <section className="mb-4">
      <Dialog>
        <DialogTrigger asChild>
          <div className="container mx-0 max-w-full p-0">
            <Input value="Would you like to discuss or ask?" readOnly />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-screen-md">
          <ThreadCreateForm />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ThreadCreateSection;
